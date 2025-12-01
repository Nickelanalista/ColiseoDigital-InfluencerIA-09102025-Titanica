# 📊 Guía de Configuración del Pixel de Facebook/Meta

## ✅ Estado Actual
- **Pixel ID**: `858727636835795`
- **Estado**: ✅ Ya instalado en el sitio web
- **Ubicación**: `index.html` (líneas 27-40)

## 🎯 Estrategia de Tracking

### 1. UN SOLO PIXEL para todo el dominio
El mismo pixel (ID: `858727636835795`) se usa para:
- Página de Influencer IA (`/ugc`)
- Página de Método CALMA (`/metodocalma`)
- Página Home (`/`)

### 2. EVENTOS DIFERENTES para cada producto

#### Eventos que se disparan automáticamente:

**Método CALMA** (`/metodocalma`):
- ✅ `PageView` - Vista de página (estándar)
- ✅ `ViewContent` - Ver contenido (estándar)
- ✅ `MetodoCalma_PageView` - Vista específica (personalizado)
- ✅ `MetodoCalma_Hero_CTA_Click` - Click en botón del Hero (personalizado)
- ✅ `InitiateCheckout` - Inicio de compra (estándar)

**Influencer IA** (`/ugc`):
- ✅ `PageView` - Vista de página (estándar)
- 🔄 Puedes agregar más eventos similares

## 🛠️ Cómo Configurar en Meta Business Manager

### Paso 1: Acceder al Administrador de Eventos

1. Ve a [Meta Business Suite](https://business.facebook.com)
2. Menú lateral → **Administrador de eventos**
3. Selecciona tu Pixel ID: `858727636835795`

### Paso 2: Verificar que el Pixel está Activo

1. En el panel del Pixel, deberías ver un **punto verde** ✅
2. Si ves "Activo", significa que está recibiendo datos
3. Debajo verás "Eventos recibidos en las últimas 24 horas"

### Paso 3: Ver Eventos en Tiempo Real

1. En el Administrador de Eventos → **Probar eventos**
2. Ingresa tu URL: `https://coliseodigital.cl/metodocalma`
3. Abre el sitio y haz acciones (click en botones, etc.)
4. Verás los eventos aparecer en tiempo real en el panel de Meta

### Paso 4: Configurar Conversiones Personalizadas

Para separar las conversiones de cada producto:

#### Para Método CALMA:

1. Administrador de Eventos → **Conversiones personalizadas** → **Crear conversión personalizada**

**Conversión 1: Vista de Método CALMA**
- Nombre: `Método CALMA - Página Vista`
- Reglas:
  - URL contiene: `/metodocalma`
  - Evento: `PageView`

**Conversión 2: Click en Comprar Método CALMA**
- Nombre: `Método CALMA - Inicio Checkout`
- Reglas:
  - URL contiene: `/metodocalma`
  - Evento: `InitiateCheckout`

**Conversión 3: Compra Método CALMA** (cuando Hotmart notifique)
- Nombre: `Método CALMA - Compra Completada`
- Reglas:
  - URL contiene: `/metodocalma`
  - Evento: `Purchase`

#### Para Influencer IA:

Repite el mismo proceso pero con:
- URL contiene: `/ugc`
- Nombres: `Influencer IA - [acción]`

### Paso 5: Usar las Conversiones en Anuncios

Cuando crees anuncios en Facebook Ads:

1. **Objetivo de campaña**: Conversiones
2. **Evento de conversión**: Selecciona la conversión personalizada que creaste
3. Ejemplos:
   - Para promocionar Método CALMA → Selecciona "Método CALMA - Inicio Checkout"
   - Para promocionar Influencer IA → Selecciona "Influencer IA - Inicio Checkout"

## 📈 Eventos Disponibles

### Eventos Estándar (vienen predefinidos en Facebook)

| Evento | Cuándo se dispara | Uso en Ads |
|--------|-------------------|------------|
| `PageView` | Al cargar cualquier página | Tráfico |
| `ViewContent` | Al ver un producto/contenido | Consideración |
| `InitiateCheckout` | Click en "Comprar ahora" | **Conversiones** ⭐ |
| `Purchase` | Compra completada | **ROI/ROAS** ⭐ |
| `Lead` | Envío de formulario | Generación de leads |

### Eventos Personalizados (los defines tú)

Ya configurados en el código:

| Evento | Descripción |
|--------|-------------|
| `MetodoCalma_PageView` | Vista específica de la página |
| `MetodoCalma_Hero_CTA_Click` | Click en botón principal del Hero |
| `MetodoCalma_Pricing_CTA_Click` | Click en botón de precios |
| `MetodoCalma_FAQ_Opened` | Usuario abre una pregunta del FAQ |
| `UGC_PageView` | Vista de la página de Influencer IA |
| `UGC_Hero_CTA_Click` | Click en Hero de UGC |

## 🎨 Crear Audiencias Personalizadas

### Audiencia: "Interesados en Método CALMA"

1. Meta Business → **Audiencias** → **Crear audiencia** → **Audiencia personalizada**
2. Fuente: **Sitio web**
3. Reglas:
   - Visita la URL: contiene `/metodocalma`
   - En los últimos: 30 días
4. Nombre: `Método CALMA - Visitantes 30 días`

### Audiencia: "Iniciaron Compra de Método CALMA"

1. Crear audiencia personalizada
2. Evento: `InitiateCheckout`
3. URL: contiene `/metodocalma`
4. Últimos: 7 días
5. **Úsala para remarketing** 🎯

## 🔥 Estrategia de Campañas Recomendada

### Campaña 1: Tráfico Frío
- **Objetivo**: Tráfico o Alcance
- **Audiencia**: Intereses relacionados (maternidad, bebés, crianza)
- **Optimización**: Click en enlaces
- **Destino**: `/metodocalma`

### Campaña 2: Retargeting Tibio
- **Objetivo**: Conversiones
- **Audiencia**: "Método CALMA - Visitantes 30 días"
- **Optimización**: `ViewContent` o `InitiateCheckout`
- **Destino**: `/metodocalma`

### Campaña 3: Retargeting Caliente
- **Objetivo**: Conversiones
- **Audiencia**: "Iniciaron Compra de Método CALMA"
- **Optimización**: `Purchase`
- **Destino**: `/metodocalma`
- **Mensaje**: Urgencia, garantía, últimas unidades, etc.

## 🔍 Verificación y Debugging

### Verificar que funciona:

1. **Extensión de Chrome**: [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
   - Instálala
   - Visita tu sitio
   - El icono se pondrá azul con el número de eventos detectados

2. **Consola del navegador**:
   - Abre DevTools (F12)
   - Ve a la pestaña **Console**
   - Deberías ver logs: `[FB Pixel] Standard Event: ...`

3. **En Meta**:
   - Administrador de Eventos → **Probar eventos**
   - Ingresa tu URL y verás eventos en tiempo real

## 📞 Integración con Hotmart (Compras)

Para trackear compras completadas:

1. Ve a tu producto en Hotmart
2. Configuración → **Pixel de Conversión**
3. Agrega este código:

```javascript
<!-- Pixel de compra completada -->
<script>
  fbq('track', 'Purchase', {
    value: {{transaction.price}},
    currency: '{{transaction.currency}}',
    content_name: 'Método CALMA - Sueño de Bebé',
    content_ids: ['metodocalma']
  });
</script>
```

Hotmart reemplazará automáticamente `{{transaction.price}}` con el valor real.

## 🎯 Próximos Pasos

1. ✅ **YA HECHO**: Pixel instalado
2. ✅ **YA HECHO**: Eventos configurados en el código
3. 🔄 **HACER AHORA**:
   - Crear conversiones personalizadas en Meta
   - Crear audiencias personalizadas
   - Configurar pixel en página de gracias de Hotmart
4. 🚀 **DESPUÉS**: Crear campañas usando estas conversiones

## ❓ FAQs

**P: ¿Necesito un pixel diferente para cada producto?**
R: ❌ NO. Un solo pixel por dominio. Los eventos y conversiones personalizadas separan los productos.

**P: ¿Los eventos personalizados cuestan extra?**
R: ❌ NO. Son gratis e ilimitados.

**P: ¿Puedo ver qué producto genera más conversiones?**
R: ✅ SÍ. Usa las conversiones personalizadas que filtran por URL.

**P: ¿Cuánto tardan en aparecer los datos?**
R: ⏱️ 15-30 minutos para datos históricos, tiempo real en "Probar eventos".

## 📚 Recursos Útiles

- [Meta Business Suite](https://business.facebook.com)
- [Documentación oficial del Pixel](https://developers.facebook.com/docs/meta-pixel)
- [Extensión Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
