# Sitio web — Miranda Jheman Abogados

Sitio estático (HTML + CSS + JavaScript, sin frameworks ni proceso de
compilación) listo para subir a cualquier hosting en la nube.

## Estructura del proyecto

```
miranda-jheman-website/
├── index.html               → Página principal
├── quienes-somos.html       → Quiénes somos (incluye semblanza del socio fundador)
├── mision-vision.html       → Misión y visión
├── servicios.html           → Servicios (15 áreas de práctica)
├── revista.html             → Revista Penalista (proyecto editorial)
├── contacto.html            → Contacto con formulario y mapa
├── robots.txt                → Indicaciones para buscadores (SEO)
├── sitemap.xml                → Mapa del sitio (SEO)
├── README.md                  → Este archivo
├── css/
│   └── styles.css           → Todos los estilos (colores, tipografía, layout)
├── js/
│   └── main.js               → Menú móvil + validación del formulario
└── assets/
    └── images/
        ├── logo.png                        → Logotipo horizontal (encabezado)
        ├── favicon.png                     → Ícono de pestaña (monograma MJ)
        ├── og-cover.jpg                     → Imagen para compartir en redes
        ├── oficina-recepcion.jpg           → Foto de recepción (Inicio)
        ├── despacho-trabajo.jpg            → Foto de trabajo (Quiénes somos)
        ├── oscar-miranda-jheman.jpg        → Retrato del socio fundador
        └── revista-penalista-portada.jpg   → Portada de la revista Penalista
```

## Datos ya integrados

- **Marca:** logotipo verde bosque + blanco, nombre "Miranda Jheman Abogados".
  El color de marca (verde) está centralizado en `css/styles.css`, sección
  `1. VARIABLES DE MARCA`.
- **Teléfono:** 81 2748 7222
- **Correo:** notificaciones@mirandajheman.com
- **Dirección:** Medicina 68, Copilco Universidad, Coyoacán,
  04360 Ciudad de México, CDMX (incluida también en el mapa de la página
  de Contacto).
- **Socio fundador:** semblanza del Mtro. Oscar Miranda Jheman en
  `quienes-somos.html`, con fotografía real.
- **Revista Penalista:** página nueva (`revista.html`) con la portada del
  primer número y las líneas editoriales (doctrina, jurisprudencia,
  práctica forense, análisis).

## Lo único que sigue pendiente de tu parte

El formulario de contacto (`contacto.html`) está validado y funcional en
el navegador, pero un sitio estático no tiene servidor propio para
enviar los mensajes a tu correo. Para activarlo:

1. Crea una cuenta gratuita en [Formspree](https://formspree.io),
   [Web3Forms](https://web3forms.com) o [EmailJS](https://www.emailjs.com).
2. Sustituye el valor de `action="https://formspree.io/f/TU_ID_DE_FORMULARIO"`
   en el `<form id="contact-form">` de `contacto.html` por la URL/clave real
   que te entregue el servicio.
3. Elimina el atributo `data-demo-mode="true"` del mismo formulario.

Mientras tanto, el formulario valida los campos correctamente pero no
envía el mensaje a ningún lado (solo muestra una confirmación visual).

## Cómo editar contenido

- Cada archivo HTML tiene comentarios `<!-- ... -->` que marcan el
  inicio de cada sección (banner, menú, contenido central, formulario,
  pie de página) para que sepas exactamente dónde modificar.
- `css/styles.css` está dividido en 14 bloques numerados. Los colores de
  marca están centralizados al inicio del archivo: cambiarlos ahí
  actualiza todo el sitio de forma automática.
- Para agregar o quitar un servicio, ve a `servicios.html` y copia o
  elimina un bloque completo `<div class="service-row">...</div>`.
- Para agregar otro integrante del equipo en "Quiénes somos", copia el
  bloque `<div class="founder-card">...</div>` completo.
- Para editar el número de la revista, ve a `revista.html` y cambia la
  imagen de portada, los temas destacados y las líneas editoriales.

## Publicar el sitio en la nube

Este proyecto no necesita ningún proceso de compilación: puedes subir
la carpeta completa tal cual. Algunas opciones sencillas y gratuitas:

- **Netlify:** arrastra la carpeta del proyecto a app.netlify.com/drop.
- **Vercel:** `vercel deploy` desde la carpeta del proyecto.
- **GitHub Pages:** sube el contenido a un repositorio de GitHub y
  activa "Pages" en la configuración del repositorio.
- **Cualquier hosting compartido tradicional:** sube todos los
  archivos y carpetas por FTP/SFTP a la carpeta pública del hosting
  (normalmente `public_html` o `www`).

En todos los casos, `index.html` debe quedar en la raíz del sitio
publicado para que cargue como página principal.

## Dominio y SEO

Todas las páginas incluyen: título único, meta descripción, palabras
clave, etiqueta canónica, Open Graph, Twitter Card y datos
estructurados (Schema.org) — `LegalService` en la home y `Periodical`
en la revista. Actualmente usan el dominio de ejemplo
`https://www.mirandajheman.com/`. En cuanto tengas tu dominio real,
busca y reemplaza esa URL en:
- Las etiquetas `<link rel="canonical">`, `og:url`, `og:image` y
  `twitter:image` de cada página.
- `robots.txt` y `sitemap.xml`.
