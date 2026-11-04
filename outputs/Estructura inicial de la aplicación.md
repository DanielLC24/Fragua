# Estructura inicial de la aplicación

## 1. Propósito

Plataforma que conecta estudiantes y recién egresados con proyectos reales de pequeñas y medianas empresas. Cada proyecto puede contar con un mentor que acompaña al equipo y valida el trabajo. El resultado para el estudiante es experiencia comprobable y un portafolio basado en entregables reales.

## 2. Propuesta de valor

No es solamente un catálogo de vacantes. Organiza proyectos de principio a fin: solicitud de la empresa, definición de alcance, selección del equipo, trabajo supervisado, entrega y evaluación. La experiencia validada por mentor es el elemento diferenciador para el talento junior.

## 3. Perfiles y permisos

- **Estudiante / talento junior:** crea su perfil, explora proyectos, aplica, trabaja en tareas y recibe retroalimentación.
- **Empresa:** registra su organización, publica una necesidad, revisa candidatos/equipo, consulta avances y acepta entregas.
- **Mentor:** acompaña a un equipo, revisa entregas y PRs, registra retroalimentación y valida competencias.
- **Administrador:** modera cuentas y proyectos, resuelve incidencias y supervisa la operación.

Los permisos deben asignarse por rol y verificarse en el servidor. Una cuenta podrá tener una organización o pertenecer a un equipo sin duplicar identidad.

## 4. Módulos de producto

1. **Acceso y perfiles:** registro, inicio de sesión, recuperación y datos de perfil.
2. **Organizaciones:** perfil de empresa y miembros autorizados.
3. **Proyectos:** publicación, revisión, alcance, requisitos, tecnologías, duración y estado.
4. **Postulaciones y selección:** aplicaciones de talento, revisión y asignación al equipo.
5. **Equipos y mentoría:** integrantes, mentor, comunicación y seguimiento.
6. **Trabajo y entregas:** tareas, hitos, archivos/enlaces, estados y comentarios.
7. **Revisión y evaluación:** validación del mentor, feedback de empresa y rúbrica de habilidades.
8. **Portafolio:** proyectos completados y habilidades demostradas con consentimiento del estudiante.
9. **Notificaciones:** cambios importantes, invitaciones, comentarios y entregas pendientes.
10. **Administración:** moderación, soporte y métricas operativas.

Pagos, sincronización automática con GitHub y facturación pueden añadirse en fases posteriores. Para el primer prototipo, basta con enlaces a repositorios y registro manual de hitos; así se valida el flujo antes de integrar servicios externos.

## 5. Flujo principal

1. La empresa describe una necesidad y envía una propuesta de proyecto.
2. Administración o mentor revisa alcance, duración y requisitos.
3. La oportunidad se publica y estudiantes aplican.
4. Se forma el equipo y se asigna mentor.
5. El equipo trabaja en tareas organizadas por hitos.
6. El mentor revisa avances y solicita cambios o valida entregas.
7. La empresa revisa y acepta el resultado.
8. El estudiante recibe evaluación y, si lo autoriza, agrega la experiencia a su portafolio.

## 6. Estados principales

**Proyecto:** Borrador → En revisión → Buscando equipo → En curso → En revisión del cliente → Completado. También puede quedar Cancelado.

**Postulación:** Enviada → En revisión → Aceptada o No seleccionada. El candidato puede retirarla.

**Hito:** Pendiente → En curso → En revisión del mentor → En revisión de empresa → Aprobado o Requiere cambios.

Mantener estados explícitos evita que distintas pantallas interpreten el avance de forma diferente.

## 7. Modelo de datos inicial

- **User:** id, nombre, correo, autenticación, estado.
- **Role / UserRole:** rol y alcance del permiso; permite que una persona tenga más de una función cuando corresponda.
- **StudentProfile:** biografía, habilidades, enlaces y preferencias.
- **Organization:** datos de empresa.
- **OrganizationMember:** relación entre usuarios y organizaciones con su cargo.
- **Project:** organización, creador, título, descripción, requisitos, modalidad, fechas y estado.
- **Application:** proyecto, estudiante, mensaje, fecha y estado.
- **Team / TeamMember:** equipo del proyecto, mentor y participantes.
- **Milestone:** proyecto, descripción, fecha objetivo y estado.
- **Task:** hito, responsable, descripción y estado.
- **Submission / Review:** entrega, revisor, resultado y comentarios.
- **Notification:** destinatario, evento, lectura y fecha.
- **PortfolioEntry:** proyecto validado, habilidades y visibilidad elegida por el estudiante.

Pagos y datos de GitHub se modelan después como módulos propios, vinculados a Project/Task, en lugar de mezclar credenciales o integración externa con el perfil principal.

## 8. Estructura técnica recomendada

Empezar con un **monolito modular**: una sola aplicación desplegable, organizada por dominios. Es más sencilla para un equipo pequeño y mantiene límites que permitirían separar servicios si el crecimiento lo exige.

```text
app/
  auth/
  users/
  organizations/
  projects/
  applications/
  teams/
  milestones/
  reviews/
  portfolio/
  notifications/
  admin/
shared/
  database/
  permissions/
  files/
  observability/
```

Cada módulo debe concentrar sus reglas, validaciones y acceso a datos. Las pantallas no deben hablar directamente con la base de datos: deben usar una capa de aplicación/API, donde se verifican permisos y transiciones de estado.

## 9. Alcance recomendado para la primera versión

Construir primero: registro/login, perfiles básicos, publicación y listado de proyectos, postulaciones, asignación manual de mentor/equipo, hitos/tareas, comentarios y aprobación de entregas, y una vista de portafolio sencilla.

Dejar para iteraciones posteriores: pagos automáticos, facturación fiscal, métricas avanzadas de GitHub, chat en tiempo real, recomendaciones algorítmicas y aplicaciones móviles nativas. No almacenar datos de tarjetas; cualquier pago futuro debe pasar por un proveedor especializado.

## 10. Decisiones pendientes antes de elegir tecnología

- ¿La primera versión será web, móvil o web adaptable a móvil?
- ¿El proyecto es académico/prototipo o se planea operar con empresas reales?
- ¿Qué país y reglas de privacidad/datos aplican?
- ¿La plataforma facilitará pagos desde el inicio o solo coordinará proyectos?
- ¿GitHub será obligatorio o una opción para proyectos técnicos?
- ¿Cómo se verifica que un usuario es estudiante y quién conserva la propiedad del trabajo?

Estas respuestas definen tecnologías, seguridad, pagos y alcance; conviene resolverlas antes de crear tablas o pantallas definitivas.
