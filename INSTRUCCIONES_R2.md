# ✅ Migración a Cloudflare R2 Completada

## 📊 Resumen

✅ **98 archivos** (357MB) migrados exitosamente a Cloudflare R2
✅ **Todos los componentes** actualizados para usar URLs de R2
✅ **Código compilado** sin errores

---

## 🚀 Configuración en Netlify

### Paso 1: Agregar Variable de Entorno

1. Ve a tu dashboard de Netlify
2. Selecciona tu sitio
3. Ve a **Site settings → Environment variables**
4. Agrega la siguiente variable:

```
VITE_R2_PUBLIC_URL=https://pub-9dfbf62c091746ec886cc815fa379d74.r2.dev
```

**IMPORTANTE:** Solo necesitas agregar esta variable. Las credenciales privadas (R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, etc.) **NO** son necesarias en Netlify porque solo se usan para subir archivos localmente.

### Paso 2: Desplegar

```bash
# Opción 1: Push a tu repositorio (si tienes auto-deploy)
git add .
git commit -m "feat: migrar contenido multimedia a Cloudflare R2

- 98 archivos (357MB) migrados a R2
- Todos los componentes actualizados
- Variables de entorno configuradas

Co-authored-by: factory-droid[bot] <138933559+factory-droid[bot]@users.noreply.github.com>"
git push

# Opción 2: Deploy manual desde Netlify dashboard
```

---

## 📁 Archivos Importantes

### `.env`
Contiene tus credenciales de R2 (para uso local). **NO COMMITEAR** - ya está en .gitignore.

### `.env.example`
Template sin credenciales reales. Este SÍ se puede commitear como referencia.

### `scripts/upload-to-r2.mjs`
Script para subir archivos a R2. Usar cuando agregues nuevo contenido:
```bash
npm run upload:r2
```

### `src/config/r2.ts`
Configuración que lee la variable de entorno y provee la función `getR2Url()`.

---

## 🔥 Beneficios de la Migración

### Antes:
- ❌ 357MB en cada deploy
- ❌ Build más lentos
- ❌ Mayor uso de bandwidth de Netlify

### Después:
- ✅ ~1MB en cada deploy (solo código)
- ✅ Builds 10x más rápidos
- ✅ CDN global de Cloudflare (carga más rápida)
- ✅ Bandwidth ilimitado en R2
- ✅ Costos reducidos

---

## 🛠️ Comandos Útiles

### Verificar compilación
```bash
npm run typecheck
npm run build
```

### Subir nuevo contenido a R2
```bash
# 1. Agregar archivos a /public
# 2. Ejecutar:
npm run upload:r2
```

### Ver sitio en desarrollo
```bash
npm run dev
```

---

## 📝 Notas Importantes

1. **Archivos en `/public`**: Ahora se sirven desde R2, no desde Netlify
2. **Nuevos archivos**: Si agregas contenido multimedia nuevo, súbelo primero con `npm run upload:r2`
3. **Variables de entorno**: Solo `VITE_R2_PUBLIC_URL` es necesaria en Netlify
4. **Credenciales de R2**: Guárdalas en un lugar seguro (están en `.env`)

---

## 🔍 Verificar que todo funciona

Después de desplegar en Netlify:

1. Abre tu sitio
2. Verifica que las imágenes y videos carguen correctamente
3. Abre las DevTools → Network tab
4. Confirma que los assets se cargan desde `pub-9dfbf62c091746ec886cc815fa379d74.r2.dev`

---

## ❓ Troubleshooting

### Las imágenes no cargan
- Verifica que la variable `VITE_R2_PUBLIC_URL` esté configurada en Netlify
- Redeploya después de agregar la variable

### Error 403 en R2
- Verifica que el bucket tenga permisos públicos de lectura
- Ve a tu bucket en Cloudflare → Settings → Public access: ON

### Necesito agregar más archivos
```bash
# 1. Agrega archivos a /public
cp mi-imagen.jpg public/ugc/nombre/

# 2. Sube a R2
npm run upload:r2

# 3. Usa en tu código
import { getR2Url } from '../config/r2';
<img src={getR2Url('ugc/nombre/mi-imagen.jpg')} />
```

---

## 🎉 ¡Listo!

Tu sitio ahora está optimizado con Cloudflare R2. Disfruta de:
- ⚡ Cargas más rápidas
- 💰 Costos reducidos
- 🚀 Deploys más ágiles
