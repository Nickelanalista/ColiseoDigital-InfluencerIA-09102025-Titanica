import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { lookup } from 'mime-types';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config({ path: '.env' });

const {
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_ENDPOINT,
  R2_BUCKET_NAME,
  VITE_R2_PUBLIC_URL
} = process.env;

const R2_PUBLIC_URL = VITE_R2_PUBLIC_URL;

// Validar que existan las credenciales
if (!R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_ENDPOINT || !R2_BUCKET_NAME) {
  console.error('❌ Error: Faltan credenciales de R2 en .env.local');
  process.exit(1);
}

// Configurar cliente S3 para Cloudflare R2
const r2Client = new S3Client({
  region: 'auto',
  endpoint: R2_ENDPOINT,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

// Función para obtener todos los archivos recursivamente
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = join(dirPath, file);
    if (statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Función para subir un archivo a R2
async function uploadFile(filePath, publicDir) {
  const fileContent = readFileSync(filePath);
  const relativePath = relative(publicDir, filePath);
  const key = relativePath.replace(/\\/g, '/'); // Normalizar path para Windows
  const contentType = lookup(filePath) || 'application/octet-stream';

  try {
    const command = new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: fileContent,
      ContentType: contentType,
    });

    await r2Client.send(command);
    console.log(`✅ Subido: ${key}`);
    return { success: true, key };
  } catch (error) {
    console.error(`❌ Error subiendo ${key}:`, error.message);
    return { success: false, key, error: error.message };
  }
}

// Función principal
async function main() {
  console.log('🚀 Iniciando migración a Cloudflare R2...\n');
  
  const publicDir = './public';
  const allFiles = getAllFiles(publicDir);
  
  console.log(`📦 Total de archivos encontrados: ${allFiles.length}\n`);
  
  const results = {
    success: [],
    failed: []
  };

  // Subir archivos uno por uno (puedes paralelizar con Promise.all si quieres)
  for (const filePath of allFiles) {
    const result = await uploadFile(filePath, publicDir);
    if (result.success) {
      results.success.push(result.key);
    } else {
      results.failed.push(result);
    }
  }

  // Resumen
  console.log('\n📊 Resumen de migración:');
  console.log(`✅ Exitosos: ${results.success.length}`);
  console.log(`❌ Fallidos: ${results.failed.length}`);
  
  if (results.failed.length > 0) {
    console.log('\n❌ Archivos fallidos:');
    results.failed.forEach(f => console.log(`  - ${f.key}: ${f.error}`));
  }
  
  console.log(`\n🌐 URL pública de R2: ${R2_PUBLIC_URL}`);
  console.log('\n✨ Migración completada!');
}

main().catch(console.error);
