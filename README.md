Markdown
# LomitosVet - Landing Page Veterinaria a Domicilio

Landing Page desarrollada para **LomitosVet**, un servicio de atención veterinaria médica a domicilio en Santiago de Chile. El sitio web ha sido maquetado utilizando estándares modernos de desarrollo Frontend, asegurando una experiencia de usuario óptima, accesibilidad internacional y un diseño adaptativo.

## Características del Proyecto

- **Estructura Semántica:** HTML5 estructurado de forma limpia y validado según los estándares de la W3C.
- **Diseño Moderno:** Estilizado modular mediante CSS3 utilizando variables globales (`:root`) para mantener la consistencia de la marca.
- **Maquetación Avanzada:** Uso combinado de **Flexbox** para componentes lineales (navegación, botones, testimonios) y **CSS Grid** para matrices cuadriculares (grilla de servicios).
- **Interactividad Avanzada:** Microanimaciones en botones, estados de enfoque (`:focus`) accesibles en formularios, scroll suave global (`smooth`) y efectos de zoom interactivo en imágenes mediante transformaciones de escala.
- **Cumplimiento de Estándares:** Contraste cromático optimizado según pautas de accesibilidad internacional (WCAG AA) con un tamaño de fuente base mínimo de 16px.

---

## Estructura de Carpetas

La arquitectura del proyecto sigue una estructura limpia, separando los recursos de desarrollo dentro del directorio de código fuente (`src/`):

VETERINARIA-DOMICILIO/
│
├── index.html          # Documento HTML principal y estructura semántica del sitio
├── .gitignore          # Archivo de exclusión para el control de versiones de Git
├── README.md           # Documentación técnica del proyecto (este archivo)
│
└── src/                # Carpeta contenedora del código fuente de la aplicación
    ├── css/
    │   └── styles.css  # Hoja de estilos global, variables, layouts y animaciones
    │
    ├── js/             # Directorio para scripts de JavaScript (reservado para futuras expansiones)
    │
    └── assets/         # Recursos multimedia y activos de diseño
        └── img/
            ├── logo-lomitosvet.jpg  # Logotipo oficial de la marca (renderizado por IA)
            ├── nosotros.png         # Imagen para la sección corporativa de presentación
            ├── tutor-bruno.jpg      # Fotografía para la tarjeta de testimonio de Bruno
            ├── tutor-odin.jpg       # Fotografía para la tarjeta de testimonio de Odín
            └── tutor-violeta.jpg    # Fotografía para la tarjeta de testimonio de Violeta