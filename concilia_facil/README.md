Especificaciones Técnicas del Proyecto: "Concilia Fácil"
1. Tipografía y Sistema de Colores (Variables CSS)
Todo el proyecto debe basarse en un sistema de variables CSS (:root) para mantener la consistencia.

Tipografía: Familia sans-serif del sistema (Ej: 'Inter', 'Roboto', 'Segoe UI', sans-serif).

Colores Principales:

--primary-blue: #1A73E8 (Botones principales, íconos activos).

--primary-green: #1E8E3E (Botón del SAT).

--bg-app: #F4F7F6 (Fondo gris muy claro para el área de contenido).

--bg-surface: #FFFFFF (Fondo de menús laterales y tarjetas blancas).

--border-color: #E0E0E0 (Bordes de tarjetas, líneas de tablas y separadores de menú).

Colores de Texto:

--text-main: #202124 (Títulos, texto de tablas).

--text-muted: #5F6368 (Subtítulos, breadcrumbs, placeholders).

Colores de Estado (Etiquetas/Pills):

--status-success-bg: #CEEAD6 | --status-success-txt: #0D652D (Conciliado).

--status-warning-bg: #FEF7E0 | --status-warning-txt: #B06000 (Pendiente).

--status-error-bg: #FCE8E6   | --status-error-txt: #C5221F (No Coincide).

--status-neutral-bg: #F1F3F4 | --status-neutral-txt: #5F6368 (Sin CFDI).

2. Arquitectura del Layout (Estructura de la Página)
La pantalla ocupa el 100% del alto y ancho de la ventana (100vh, 100vw) y utiliza un contenedor principal con display: flex; flex-direction: row;.

Se divide en 3 columnas principales:

Sidebar Izquierdo (Navegación): Ancho fijo de 240px.

Contenido Principal (Centro): Ocupa el espacio restante (flex-grow: 1).

Toolbar Derecho (Herramientas): Ancho fijo estrecho de 50px.

3. Especificaciones del HTML y CSS por Componente
A. Sidebar Izquierdo (<aside class="left-sidebar">)
Fondo: --bg-surface. Borde derecho: 1px solid --border-color. Padding: 20px 16px.

Estructura Interna (display: flex; flex-direction: column; justify-content: space-between;):

Top (Logo): Texto "CF" (C en azul, F en verde) seguido de "Concilia Fácil" en --text-main, font-weight: 600, tamaño 18px. Margen inferior: 30px.

Middle (Menú - <ul> sin viñetas): 6 elementos (<li>).

Items: Tablero, Conciliaciones, Estados de Cuenta, CFDIs SAT, Reportes, Configuración.

Estilo base item: display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: 8px; font-size: 14px; color: --text-main; cursor: pointer.

Estado Activo ("Tablero"): Fondo #E8F0FE, texto e ícono en --primary-blue, font-weight: 500.

Bottom (Usuario): Separado por un margin-top: auto (para empujarlo al fondo). Muestra un avatar circular gris (32x32px), el texto "Ana García" (14px) y debajo un botón de "Logout" con ícono.

B. Contenido Principal (<main class="main-content">)
Fondo: --bg-app. Padding: 32px 40px. Overflow: auto (scroll vertical si es necesario).

Header de la Página:

Breadcrumb: Texto "Conciliación Bancaria" en tamaño 12px, color --text-muted. Margen inferior 8px.

Título: "Nueva Conciliación Bancaria", etiqueta <h1>, tamaño 24px, color --text-main, font-weight: 600. Margen inferior 24px.

Barra de Acciones Principales (display: flex; gap: 12px; margin-bottom: 24px;):

3 botones (<button>). Todos con border-radius: 6px, padding: 10px 16px, font-size: 14px, display: flex; align-items: center; gap: 8px.

Botón 1: "Cargar Estado de Cuenta". Fondo --primary-blue, texto blanco.

Botón 2: "Descargar CFDIs SAT". Fondo --primary-green, texto blanco.

Botón 3: "Importar Manualmente". Fondo --bg-surface, texto --text-main, borde 1px solid --border-color.

Tarjeta 1: Filtros de Conciliación (<section class="card">)

Estilo de Tarjeta: Fondo --bg-surface, borde 1px solid --border-color, border-radius: 8px, padding: 24px, margin-bottom: 24px.

Título Interno: "Conciliación en Curso" (16px, bold, margen inferior 16px).

Fila de Controles (display: flex; gap: 16px; align-items: flex-end;):

Tres selectores (<div class="input-group">): "Banco" (Santander), "Cuenta" (****1234), "Mes" (Octubre 2023).

Cada selector tiene un <label> (12px, --text-muted, margen inferior 4px) y un <select> (alto 36px, borde --border-color, radio 6px, padding interno 0 12px, ancho flexible flex: 1).

Un botón azul "Cargar Datos" al final de la fila.

Tarjeta 2: Tabla de Movimientos (<section class="card">)

Mismos estilos base de Tarjeta. Título: "Resumen de Movimientos (Octubre 2023)".

Estructura de Tabla (<table style="width: 100%; border-collapse: collapse;">):

Encabezados (<thead>): Textos en 12px, --text-muted, alineación izquierda (excepto montos que van a la derecha). Borde inferior 1px solid --border-color. Padding inferior 12px.

Cuerpo (<tbody>): Filas (<tr>) con un borde inferior 1px solid --bg-app. Celdas (<td>) con padding 14px 0, tamaño de fuente 13px o 14px.

Columna "Estado": Aquí van las etiquetas (pills). Cada etiqueta es un <span> con border-radius: 12px, padding: 4px 10px, font-size: 12px, font-weight: 500. (Ver sección de colores para aplicar clases .status-success, .status-warning, etc. según el texto).

Columna "Monto": Celdas numéricas alineadas a la derecha (text-align: right; font-variant-numeric: tabular-nums;).

Columna "Acciones": Dos íconosSVG (un ojo y un documento) en color --text-muted, separados por un gap de 8px.

C. Toolbar Derecho (<aside class="right-toolbar">)
Fondo: --bg-surface. Borde izquierdo: 1px solid --border-color. Ancho: 50px.

Estructura (display: flex; flex-direction: column; align-items: center; padding-top: 16px; gap: 24px;):

Ícono superior: Doble flecha << (colapsar).

Ícono medio: Signo de interrogación ? (Ayuda). Vertical text "Ayuda".

Ícono inferior: Campana (Notificaciones). Vertical text "Notificaciones".

(Nota para CSS: Para los textos verticales debajo de los íconos, usar writing-mode: vertical-rl; text-orientation: mixed; font-size: 11px; color: --text-muted; margin-top: 8px;).

4. Requerimientos de JavaScript (Interactividad Básica)
Aunque el diseño es estático, el agente debe programar el JS mínimo para simular un comportamiento de "Single Page Application" (SPA) o prototipo funcional:

Interactividad de Pestañas (Sidebar):

Escuchar el evento click en los <li> del menú izquierdo.

Al hacer clic, remover la clase .active (que da el fondo azul y texto azul) del elemento actual y añadirla al elemento clicado.

Interactividad de Botones de Tabla (Acciones):

Añadir eventos click a los íconos de "ojo" y "documento" en las filas de la tabla para que lancen un console.log("Visualizar registro") o un simple alert().

Simulación de Carga:

El botón principal "Cargar Datos" (en la sección de filtros) debe, al hacerle clic, cambiar su texto a "Cargando..." por 1 segundo (usando setTimeout) y luego volver a su estado original, para simular la petición de datos.