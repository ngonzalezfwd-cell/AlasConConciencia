# Guía: Cómo Agregar Coordenadas y Párrafos al Mapa Interactivo

El mapa interactivo de **AlasConCiencia** utiliza una estructura flexible basada en HTML y CSS. Aquí te explico cómo puedes personalizarlo.

## 1. Localizar la Estructura en el HTML
Abre el archivo `public/pages/Home.html` y busca el contenedor con el id `#contenedor-mapa`. Dentro verás bloques como este:

```html
<div class="punto-interactivo" style="top: 20%; left: 30%;">
    <div class="pin"></div>
    <div class="parrafo-info">
        <h3>Nombre de la Región</h3>
        <p>Tu descripción personalizada aquí.</p>
    </div>
</div>
```

## 2. Cambiar las Coordenadas
Para mover un punto, solo necesitas ajustar los valores de `top` (vertical) y `left` (horizontal) en el atributo `style`:

- **`top`**: Un valor de `0%` está en la parte superior del mapa, `100%` en la inferior.
- **`left`**: Un valor de `0%` está a la izquierda, `100%` a la derecha.

> **Tip**: Puedes usar decimales para mayor precisión, por ejemplo: `top: 45.5%; left: 12.8%;`.

## 3. Agregar Nuevos Párrafos
Para añadir una nueva zona, simplemente copia uno de los bloques anteriores y pégalo dentro de `#contenedor-mapa`. Luego:
1. Cambia las coordenadas `top` y `left`.
2. Modifica el texto dentro del `<h3>` (Título) y el `<p>` (Párrafo explicativo).

## 4. Personalización Visual (CSS)
Si quieres cambiar el color de los puntos o el estilo de los cuadros de texto, puedes hacerlo en `public/styles/Home.css`:
- Busca `.pin` para cambiar el color del círculo vibrante.
- Busca `.parrafo-info` para ajustar el tamaño, fondo o bordes de los mensajes emergentes.
