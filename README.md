# Fragua

Fragua es una plataforma B2B2C en desarrollo: conecta a pequeñas y medianas empresas que necesitan resolver proyectos digitales con estudiantes y recién egresados que buscan experiencia profesional. Cada proyecto se organiza en hitos y células de trabajo, con acompañamiento de un mentor senior. El objetivo es entregar valor a la empresa y ayudar al talento junior a construir un portafolio con experiencia verificable.

Este repositorio contiene un prototipo de frontend; los requisitos que siguen describen el producto objetivo y no deben interpretarse como funcionalidades ya disponibles.

## Roles

- **Cliente B2B (Pyme):** solicita proyectos, aprueba presupuestos, monitorea avances y aprueba hitos y pagos.
- **Talento junior (B2C):** aplica a proyectos, trabaja en tareas y envía código.
- **Mentor senior:** lidera la célula de trabajo, revisa pull requests y valida entregables y aprendizajes.
- **Administrador:** modera proyectos, asigna mentores y gestiona usuarios y finanzas.

## Flujos y módulos objetivo

1. **Solicitud y matchmaking:** la Pyme describe una necesidad; el equipo de Fragua define el alcance y presupuesto, asigna mentor y publica vacantes para formar una célula.
2. **Ejecución y seguimiento:** el trabajo se organiza en hitos o sprints y tareas, con estados visibles para el cliente, el talento y el mentor.
3. **Integración con GitHub:** Issues y pull requests enlazan el trabajo con su revisión técnica. La plataforma debe reflejar la actividad para que el mentor pueda auditarla.
4. **Revisión y aprobación:** el mentor revisa código, entrega feedback pedagógico y valida cada hito antes de presentarlo a la Pyme para su aprobación.
5. **Pagos por hitos:** la Pyme consulta facturas y libera pagos conforme se aprueban los hitos. Administración supervisa ingresos, pagos a mentores y subsidios B2C.
6. **Portafolio y evaluación:** al cerrar un proyecto, la experiencia, las métricas de contribución y la evaluación del mentor pueden reflejarse en el perfil del talento.

Las interfaces previstas incluyen una landing pública y acceso; paneles para Pyme, talento junior y mentor; y un backoffice de administración. Estos paneles abarcan, entre otros, la creación y seguimiento de proyectos, marketplace, tablero Kanban, revisión de código, reportes, gestión de células, evaluaciones y finanzas.

## Modelo de datos objetivo

La plataforma deberá persistir y relacionar, como mínimo:

- **Usuarios:** datos de contacto, rol, credenciales u OAuth, perfil profesional y estado de cuenta.
- **Proyectos:** Pyme propietaria, alcance, sector, tecnologías, presupuesto, moneda, fechas y estado.
- **Células de trabajo:** proyecto, mentor líder y talentos junior asignados.
- **Hitos/sprints:** entregables, valor económico asociado y estado de aprobación.
- **Tareas y sincronización con GitHub:** hito, responsable, enlaces a Issues y pull requests, estado y comentarios de revisión.
- **Evaluaciones:** evaluador, evaluado, tipo de métrica, calificación y comentarios.
- **Transacciones:** proyecto, Pyme, monto, concepto, estado y recibo o factura.

El diseño definitivo del almacenamiento (relacional o NoSQL) queda por decidir; este modelo describe las entidades y relaciones requeridas, no una base de datos implementada.

## Requisitos

- Node.js 20.19 o posterior (o 22.12 o posterior).
- npm.

## Instalación y uso

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <CARPETA_DEL_PROYECTO>
npm ci
npm run dev
```

Abre en el navegador la dirección local que muestra Vite en la terminal.

Para generar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

## Funcionalidades implementadas en el prototipo

- Explorar proyectos de ejemplo y filtrarlos por categoría o texto.
- Abrir el detalle de un proyecto, guardarlo y simular una postulación durante la sesión actual.
- Navegar por las secciones de proyectos, trabajo y portafolio; algunas son solo vistas de demostración.
- Interfaz adaptable a distintos tamaños de pantalla.

## Estado y alcance

El frontend actual usa proyectos de ejemplo definidos en `src/data/projects.js`. Los guardados y las postulaciones viven solo en memoria y se pierden al recargar. No incluye backend, autenticación, persistencia, roles, sincronización con GitHub, pagos, facturación ni gestión real de proyectos. Por tanto, las pantallas y flujos descritos como objetivo aún requieren implementación.

El documento preliminar [Estructura inicial de la aplicación](./outputs/Estructura%20inicial%20de%20la%20aplicaci%C3%B3n.md) contiene contexto adicional de producto y una propuesta de evolución técnica.

## Tecnologías

- React
- Vite
- JavaScript
- Lucide React para iconos

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la compilación de producción en `dist/`. |
| `npm run preview` | Sirve localmente la compilación de producción. |

## Estructura principal

```text
.
├── index.html
├── src/
│   ├── components/       # Componentes de navegación y proyectos
│   ├── data/             # Datos de ejemplo
│   ├── App.jsx           # Pantalla y estado principal
│   ├── main.jsx          # Punto de entrada de React
│   └── styles.css        # Estilos de la interfaz
├── outputs/              # Documento de propuesta inicial
├── package.json
└── vite.config.js
```
