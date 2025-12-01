# 🔄 Flujo de Trabajo con Cloudflare R2

## 📌 Regla de Oro

```
Contenido multimedia (fotos/videos) → Subir a R2 PRIMERO
Código (componentes React) → Git → Netlify DESPUÉS
```

---

## 🎯 Conceptos Importantes

### ¿Qué es R2?
Cloudflare R2 es un servicio de almacenamiento de archivos (como Google Drive, pero para aplicaciones). Todos tus archivos multimedia están ahí, no en Netlify.

### ¿Por qué usamos R2?
- ✅ **Gratis**: Hasta 10M de requests/mes
- ✅ **Rápido**: CDN global incluido
- ✅ **Escalable**: Sin límites de bandwidth

### ¿Dónde están mis archivos?
```
Antes:  /public/ugc/kate/foto.jpg → Netlify (pesado)
Ahora:  /public/ugc/kate/foto.jpg → R2 (ligero)
        ↓
        El código apunta a: https://pub-xxx.r2.dev/ugc/kate/foto.jpg
```

---

## 🚀 Comandos Esenciales

### Subir archivos a R2
```bash
npm run upload:r2
```

### Ver sitio en desarrollo
```bash
npm run dev
```

### Verificar que compila
```bash
npm run typecheck
npm run build
```

---

## 📋 Flujos de Trabajo

### 1️⃣ AGREGAR Nuevo Contenido

#### Ejemplo: Agregar foto de James

**Paso 1: Agrega el archivo localmente**
```bash
# Opción A: Copiar archivo
cp mi-foto.jpg public/ugc/james/james_nueva_foto.jpg

# Opción B: Arrastra el archivo a la carpeta en tu editor
# Carpeta: public/ugc/james/
```

**Paso 2: Sube a R2**
```bash
npm run upload:r2
```

**Output esperado:**
```
✅ Subido: ugc/james/james_nueva_foto.jpg
📊 Resumen: 1 exitoso, 0 fallidos
```

**Paso 3: Usa en tu código**
```tsx
// En cualquier componente .tsx
import { getR2Url } from '../config/r2';

<img 
  src={getR2Url('ugc/james/james_nueva_foto.jpg')} 
  alt="James nueva foto"
/>
```

**Paso 4: Guarda cambios en Git**
```bash
git add .
git commit -m "feat: agregar nueva foto de James"
git push
```

✅ **Listo!** En 2-3 minutos se desplegará en Netlify.

---

### 2️⃣ REEMPLAZAR Contenido Existente

#### Ejemplo: Actualizar logo de la empresa

**Paso 1: Reemplaza el archivo (mismo nombre)**
```bash
# Sobrescribe el archivo existente
cp nuevo-logo.png public/material/logo_coliseo.png
```

**Paso 2: Sube a R2**
```bash
npm run upload:r2
```

**Output:**
```
✅ Subido: material/logo_coliseo.png (actualizado)
```

**Paso 3: NO necesitas cambiar código**
```tsx
// Este código ya existe y sigue funcionando:
<img src={getR2Url('material/logo_coliseo.png')} />
```

**Paso 4: Commit**
```bash
git add public/material/logo_coliseo.png
git commit -m "chore: actualizar logo empresa"
git push
```

**Nota:** El navegador puede cachear la imagen vieja. Refresca con `Ctrl+Shift+R` (Windows) o `Cmd+Shift+R` (Mac).

---

### 3️⃣ ELIMINAR Contenido

#### Ejemplo: Borrar foto obsoleta

**Paso 1: Elimina localmente**
```bash
rm public/ugc/james/foto-vieja.jpg
```

**Paso 2: Quita referencias del código**
```tsx
// Busca y elimina líneas como:
<img src={getR2Url('ugc/james/foto-vieja.jpg')} />
```

**Paso 3: Commit**
```bash
git add .
git commit -m "chore: eliminar foto obsoleta de James"
git push
```

**Paso 4: (Opcional) Borrar de R2**

Ve al dashboard de Cloudflare:
1. Cloudflare Dashboard → R2
2. Selecciona bucket `coliseo-digital-media`
3. Busca `ugc/james/foto-vieja.jpg`
4. Click en ... → Delete

**Nota:** El script `npm run upload:r2` NO borra archivos de R2, solo sube/actualiza.

---

## 📁 Estructura de Carpetas

```
public/
├── ugc/              # User Generated Content (influencers)
│   ├── kate/        # Fotos/videos de Kate
│   ├── james/       # Fotos/videos de James
│   ├── dave/        # Fotos/videos de Dave
│   └── kloe/        # Fotos/videos de Kloe
├── promo/           # Material promocional
│   ├── mockups/
│   └── videos/
├── material/        # Logos, iconos, branding
└── people/          # Fotos de testimonios
```

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Agregar nuevo influencer "Alex"

```bash
# 1. Crea carpeta
mkdir public/ugc/alex

# 2. Agrega fotos
cp alex_1.jpg public/ugc/alex/
cp alex_2.jpg public/ugc/alex/
cp alex_3.jpg public/ugc/alex/

# 3. Sube a R2
npm run upload:r2

# 4. Usa en código (Showcase.tsx)
const showcaseItems = [
  // ... existentes ...
  {
    name: 'Alex',
    image: getR2Url('ugc/alex/alex_1.jpg'),
    description: 'Influencer tech',
    category: 'Tech',
  },
];

# 5. Commit
git add .
git commit -m "feat: agregar influencer Alex"
git push
```

---

### Ejemplo 2: Actualizar video promocional

```bash
# 1. Reemplaza video (mismo nombre para no cambiar código)
cp nuevo-video.mp4 public/promo/james_vid_2.mp4

# 2. Sube a R2
npm run upload:r2

# 3. NO cambies código (ya funciona)

# 4. Commit
git add public/promo/james_vid_2.mp4
git commit -m "chore: actualizar video promocional James"
git push
```

---

### Ejemplo 3: Agregar nueva variación de Kate

```bash
# 1. Agrega foto
cp kate_new.jpg public/ugc/kate/kate_gap_5.jpg

# 2. Sube a R2
npm run upload:r2

# 3. Agrega a ImageVariations.tsx
const variations = [
  // ... existentes ...
  {
    id: 4,
    title: 'Nueva Pose',
    description: 'Kate en nueva ubicación',
    icon: MapPin,
    image: getR2Url('ugc/kate/kate_gap_5.jpg'),
    badge: 'Nuevo',
    color: 'from-green-500 to-teal-500',
  },
];

# 4. Commit
git add .
git commit -m "feat: agregar nueva variación de Kate"
git push
```

---

## 🚫 Errores Comunes

### ❌ ERROR 1: Cambiar código sin subir a R2

```tsx
// Agregas esto en el código:
<img src={getR2Url('ugc/nueva-foto.jpg')} />

// ❌ Pero NO ejecutaste: npm run upload:r2
// Resultado: 404 Not Found en producción
```

**✅ Correcto:**
```bash
1. cp nueva-foto.jpg public/ugc/nueva-foto.jpg
2. npm run upload:r2  # ← NO olvides esto!
3. Edita código con getR2Url('ugc/nueva-foto.jpg')
4. git commit && git push
```

---

### ❌ ERROR 2: Usar URL directa en código

```tsx
// ❌ INCORRECTO:
<img src="https://pub-9dfbf62c091746ec886cc815fa379d74.r2.dev/ugc/kate/foto.jpg" />

// ✅ CORRECTO:
import { getR2Url } from '../config/r2';
<img src={getR2Url('ugc/kate/foto.jpg')} />
```

**Por qué:** Si cambias de bucket, solo actualizas `.env` en lugar de 50+ archivos.

---

### ❌ ERROR 3: No commitear archivos de /public

```bash
npm run upload:r2  # ✅ Subes a R2

# ❌ NO haces commit del archivo en /public
# Problema: Tu equipo no tiene el archivo localmente
```

**✅ Correcto:**
```bash
npm run upload:r2
git add public/ugc/nueva-foto.jpg  # ← Importante!
git commit -m "..."
git push
```

---

## 🔍 Cómo Verificar que Funciona

### En Local (desarrollo)
```bash
npm run dev
# Abre: http://localhost:5173
# Las imágenes deben cargar desde R2
```

### En Producción (Netlify)
```bash
# Después de push, espera 2-3 min

# 1. Abre tu sitio
# 2. Abre DevTools (F12)
# 3. Ve a tab "Network"
# 4. Busca una imagen
# 5. Verifica que carga desde: pub-9dfbf62c091746ec886cc815fa379d74.r2.dev
```

---

## 📊 Cheatsheet Rápido

| Acción | Comandos |
|--------|----------|
| **Agregar contenido** | `cp archivo.jpg public/carpeta/` → `npm run upload:r2` → Edita código → `git push` |
| **Actualizar contenido** | `cp nuevo.jpg public/carpeta/mismo-nombre.jpg` → `npm run upload:r2` → `git push` |
| **Eliminar contenido** | `rm public/carpeta/archivo.jpg` → Quita del código → `git push` → Borra en R2 dashboard |
| **Ver cambios localmente** | `npm run dev` |
| **Verificar compilación** | `npm run typecheck` |

---

## 🎨 Tips de Organización

### Nombres de archivos
```
✅ kate_gap_winter_2025.jpg      # Descriptivo
✅ james_stanley_video_v2.mp4    # Con versión
✅ logo_coliseo_2025.png         # Con año

❌ img1.jpg                       # Poco claro
❌ video.mp4                      # Genérico
❌ foto.jpg                       # Sin contexto
```

### Optimización antes de subir
```bash
# Reduce tamaño de imágenes (opcional)
# Usa herramientas como TinyPNG o Squoosh
# Ahorra espacio y mejora velocidad de carga
```

---

## 🆘 Problemas y Soluciones

### "404 Not Found" en producción
**Causa:** Olvidaste ejecutar `npm run upload:r2`
**Solución:**
```bash
npm run upload:r2
# Espera 1-2 min para que R2 actualice el CDN
```

---

### "Imagen no se actualiza en el navegador"
**Causa:** Caché del navegador
**Solución:**
```bash
# Opción 1: Forzar recarga
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)

# Opción 2: Cambiar nombre del archivo
kate_gap_2.jpg → kate_gap_2_v2.jpg
```

---

### "Error: Credentials not found"
**Causa:** Archivo `.env` no existe o está mal configurado
**Solución:**
```bash
# Verifica que existe .env en la raíz
ls -la .env

# Copia desde el ejemplo si no existe
cp .env.example .env

# Edita con tus credenciales
```

---

## 📚 Recursos Adicionales

### Archivos importantes:
- `INSTRUCCIONES_R2.md` - Setup inicial y configuración Netlify
- `.env` - Credenciales (NO commitear)
- `.env.example` - Template de credenciales
- `scripts/upload-to-r2.mjs` - Script de upload

### Comandos útiles:
```bash
# Ver todos los scripts disponibles
npm run

# Limpiar node_modules (si hay problemas)
rm -rf node_modules package-lock.json
npm install

# Ver versión de Node
node --version
```

---

## ✅ Checklist Antes de Cada Deploy

- [ ] Ejecuté `npm run upload:r2` si agregué/modifiqué multimedia
- [ ] Verifiqué localmente con `npm run dev`
- [ ] Ejecuté `npm run typecheck` sin errores
- [ ] Hice `git add .` de TODOS los archivos (código + public)
- [ ] Commit con mensaje descriptivo
- [ ] Push a repositorio

---

## 🎉 ¡Listo!

Ahora tienes un flujo de trabajo profesional con Cloudflare R2.

**Recuerda:**
1. Archivo → `/public`
2. `npm run upload:r2`
3. Código con `getR2Url()`
4. `git push`

**¿Dudas?** Revisa este documento o las `INSTRUCCIONES_R2.md`.
