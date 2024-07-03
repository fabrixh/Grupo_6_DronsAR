# Sprint 2 - DronsAR

Este documento resume la retrospectiva del equipo DronSAR después de completar el primer sprint del proyecto. En él se destacan los aspectos positivos a mantener, las áreas que requieren más atención y las nuevas prácticas por implementar. Además, se presentan los entregables del proyecto, que incluyen este archivo denominado ```retro.md``` con los resultados de la retrospectiva, el enlace al tablero de trabajo en Trello y los diferentes componentes de la aplicación **Node.js+Express** desarrollada por el equipo, tales como la página de inicio, los detalles del producto, el carrito de compras, el formulario de registro y el formulario de inicio de sesión. Las consignas a cumplir están en el siguiente [enlace](https://drive.google.com/file/d/1qmrlVIY1rKOGIr-vLzkFzX-BYrdVtRmv/view) para más información. 

## Resumen de entregables
- Archivo retro.md con el resultado de la retrospectiva.
- Enlace al tablero de trabajo
- Aplicación Node.js+Express con:
  - Home (index.html)
  - Detalle del producto (productDetail.html)
  - Carrito de compras (productCart.html)
  - Formulario de registro (register.html)
  - Formulario de login (login.html)




# 🔄 Retrospectiva estrella de mar

La retrospectiva de estrella de mar del equipo DronSAR luego de haber finalizado el primer sprint del proyecto se puede resumir de la siguiente manera:

<a href="https://jamboard.google.com/d/1Gs2wdcw2brC3uuam4NZVb0yCvpyKNdkrMNkCz1aQXNg/edit?usp=sharing" style="display: block; text-align: center;">
<img src="https://img001.prntscr.com/file/img001/MwxO7cRWTjKf2S3NRQeYAg.png" width="800">


## 👍 Keep Doing (Seguir Haciendo)
- **Cooperación**: Mantener la colaboración entre los miembros del equipo.
- **Buena organización y comunicación**: Continuar con una buena organización y comunicación efectiva.
- **Empatía**: Seguir mostrando empatía entre los compañeros de equipo.
- **Comunicación asertiva**: Mantener una comunicación clara y directa.
- **Capacitar a nuestros compañeros**: Seguir capacitando a los miembros del equipo.

## ➕ More Of (Hacer Más)
- **Comunicación**: Incrementar la comunicación entre los miembros del equipo.
- **Constancia**: Ser más constantes en el trabajo y en las reuniones.
- **Feedback**: Dar y recibir más retroalimentación.
- **Automotivación - motivar al equipo**: Aumentar la automotivación y motivar más al equipo.
- **Reuniones espontáneas**: Tener más reuniones espontáneas.
- **Confianza**: Fomentar la confianza dentro del equipo.

## ⏱️ Start Doing (Comenzar a Hacer)
- **Avisar por el grupo de WhatsApp antes de hacer un commit**: Informar en el grupo de WhatsApp antes de realizar un commit.
- **Trabajar en ramas diferentes en GitHub para tener control del proyecto principal**: Utilizar ramas diferentes en GitHub para mejor control del proyecto.
- **Respetar horarios**: Cumplir con los horarios establecidos.
- **Leer documentación**: Dedicar tiempo a leer la documentación.
- **Planificación**: Empezar a planificar mejor las tareas y actividades.

## 🚫 Stop Doing (Dejar de Hacer)
- **Trabajar solo sin informar la tarea**: Evitar trabajar de forma aislada sin comunicar las tareas realizadas.
- **Comentarios negativos**: Parar de hacer comentarios negativos.

## 🎈 Less Of (Hacer Menos)
- **No pedir ayuda**: Evitar la falta de solicitud de ayuda cuando se necesita.
- **Distracciones**: Reducir las distracciones durante el trabajo.

# 📅 Tablero de trabajo en Trello

A continuacion se ofrece el enlance al Tablero de trabajo usando la plataforma de Trello: https://trello.com/b/C13pJ5cq/grupo-6

<br> <!-- Salto de línea -->

# 🚀 Aplicación Node.js+Express 

## 📂 Estructura del Proyecto
```bash
.
├── main/
│   ├── desing/
│   │── public/
│   │   ├── CSS/
│   │   │   ├── login.css         # Estilos para la página de inicio de sesión
│   │   │   ├── registro.css      # Estilos para la página de registro
│   │   │   └── styles.css        # Estilos generales de la aplicación
│   │   └── img/
│   │        ├── DRONSAR PROP-10.svg     # Imagen vectorial del logo DRONSAR
│   │        ├── d1.png                   # Imagen de producto
│   │        ├── d2.png                   # Imagen de producto
│   │        ├── d3.png                   # Imagen de producto
│   │        ├── drone2.gif               # Animación de drone
│   │        ├── fondo.jpg                # Imagen de fondo para la aplicación
│   │        ├── fondo2.jpg               # Otra imagen de fondo
│   │        ├── imagen-login.png         # Imagen para la página de inicio de sesión
│   │        └── imagen-principal.png     # Imagen principal de la aplicación
│   └── views/
│       ├── carrito-compra.html    # Página del carrito de compra
│       ├── detalle-producto.html  # Página de detalle de producto
│       ├── index.html            # Página principal de la aplicación
│       ├── login.html            # Página de inicio de sesión
│       └── registro.html         # Página de registro de usuario
├── wireframes/                        # Carpeta para los wireframes del proyecto
├── .gitignore                         # Archivo de configuración para ignorar archivos en Git
├── README.md                          # Archivo con información básica del proyecto
├── Retro.md                           # Archivo para registrar retrospectivas del proyecto
├── app.js                             # Archivo principal de la aplicación (JavaScript)
├── package-lock.json                  # Archivo de bloqueo de versiones de paquetes (npm)
└── package.json                       # Archivo de configuración de paquetes (npm)
```

## 🏠 Home ```(index.html)```

  Este archivo representa la página principal de la aplicación, donde los usuarios aterrizan inicialmente. Contiene la estructura y el contenido principal que se muestra al cargar la aplicación.

  <a href="https://github.com/chavow5/Grupo_6_DronsAR/blob/main/views/index.html">
  <img src="https://img001.prntscr.com/file/img001/IPUaKk7RRl-1cRTYUl7ixw.jpg" width="700">
  </a>
  

<br> <!-- Salto de línea -->

## 👉 Formulario de registro ```(registro.html)```

  Aquí se encuentra el formulario que los usuarios utilizan para registrarse en la aplicación. Incluye campos y validaciones necesarios para capturar la información de los nuevos usuarios.

<a href="https://github.com/chavow5/Grupo_6_DronsAR/blob/main/views/registro.html" >
<img src="https://img001.prntscr.com/file/img001/VxlYD9xNRc6WByD8jhOv_Q.png" width="400">
</a>
<br> <!-- Salto de línea -->

## 🔐 Formulario de login ```(login.html)```

  Este formulario permite a los usuarios iniciar sesión en la aplicación. Es crucial para la autenticación y seguridad de los usuarios al acceder a sus cuentas personales.

<a href="https://github.com/chavow5/Grupo_6_DronsAR/blob/main/views/login.html" style="display: block; text-align: center;">
  <img src="https://img001.prntscr.com/file/img001/a03TXDPhTFaD-hGDiRUWug.png" width="400">
</a>  

<br> <!-- Salto de línea -->

## 🔍 Detalle del producto ```(detalle-producto.html)```

  La página de detalle del producto muestra información detallada sobre un producto específico. Esto incluye características, precios y opciones de compra, proporcionando una vista profunda para los usuarios interesados en un artículo en particular.

<a href="https://github.com/chavow5/Grupo_6_DronsAR/blob/main/views/detalle-producto.html">
<img src="https://img001.prntscr.com/file/img001/-_2y_NY3RU-KyviikAClJQ.png" width="700">
</a>

<br> <!-- Salto de línea -->

## 🛒 Carrito de compras ```(carrito-compra.html)```

  Aquí se encuentra la interfaz donde los usuarios gestionan los productos seleccionados para la compra. Permite agregar, modificar o eliminar elementos del carrito antes de proceder con la compra final.

  <a href="https://github.com/chavow5/Grupo_6_DronsAR/blob/main/views/carrito-compra.html">
  <img src="https://img001.prntscr.com/file/img001/6yVSObBMR8mcrgjgSxzdGw.png" width="700">
  </a>

