---
publishDate: 2025-07-01T00:00:00Z
title: Nuevas funcionalidades clave en Mis techos de Asturias. Gestionando el crecimiento del producto
excerpt: Por fin podrás seguir la ruta completa para alcanzar todos los picos y después compartirlo cómodamente en tu red social favorita
image: ~/assets/images/blog/track-and-share-techosdeasturias.webp
tags:
  - techos de asturias
  - gestión de producto
  - programación
---

El objetivo de hacer la [aplicación de los techos de Asturias](https://guitarranalon.github.io/MisTechosAsturias2) siempre fue ofrecer la mejor herramienta posible para ascender los 78 picos sin tener que pasar horas rastreando información y después aplicándola sobre el terreno para poder optimizar cada salida enlazando la mayor cantidad de cimas posibles. Para alguien que ame la montaña esto parece un poco contradictorio ya que parece mejor tener 78 excusas para ir de monte que 50 pero en el caso de los techos de los concejos de Asturias no es siempre así: mientras que algunos de ellos son montañas increíbles con rutas interesantes para llegar a ellas, muchas son simples tachuelas al lado de una carretera, con un corto paseo y a veces tan cubiertas de vegetación que carecen de toda vista. Y, si ya cuesta encontrar la motivación para desplazarse a sitios alejados y hacer rutas no muy bonitas, cuánto cuesta encontrarla para documentarse sobre esa ascensión. Y, aunque es de gran ayuda también en el caso de las montañas más interesantes, aquí es donde brilla especialmente la app Mis Techos de Asturias: ¿que voy un día de visita por la zona del Cabo Peñas? Pues me acerco hasta el techo de Gozón. ¿Que voy con mi familia de comida a la zona de la Senda del Oso? Pues para bajarla nos subimos al Grandamiana y poco a poco vamos completando el reto. Y no necesito una gran planificación.

Cuando hace años comencé con la programación de la aplicación de los Techos de Asturias lo hice con el fin de poder practicar algunas cosas nuevas (para mi) como eran básicamente temas PWA (Progressive Web Applications) que, básicamente, permiten hacer aplicaciones web con características similares a una aplicación móvil (por ejemplo, acceso a sensores, persistencia, caché, etc). Por eso, cuando hube practicado lo suficiente, perdí un poco de motivación y decicí no añadir el track de la ruta para ascender a los picos ya que, si bien a nivel de programación suponía poco trabajo, sí que era una tarea larga de documentación para obtener los 78 tracks. Pasó el tiempo y añadí la funcionalidad de navegar, que actualiza tu posición en el mapa ya que algunos picos, como por ejemplo el de Avilés, son difíciles de reconocer sobre el terreno y podía ser de gran ayuda. Sin embargo, viendo la aplicación con una perspectiva más de producto, era una carencia que tenía desde el lanzamiento, algo que siempre tenía ahí pendiente y, en cierto modo, me molestaba.

Por otra parte, el mapa de progreso, que ya ha ayudado a varias personas a motivarse para culminar el reto, no es fácil de compartir: tenemos que asumir que muchos usuarios no saben hacer capturas de pantalla y después compartir esa captura en la red social de turno. Si conseguía reducir esta fricción, era posible que más gente compartiese su progreso y ayudase de paso a difundir la existencia de la app. Con ese objetivo y lo sencillo que resulta obtener una imagen ráster a partir de un svg (que es como se implementó el mapa de progreso) decidí que podría ser una de las tareas más interesantes a implementar del producto.

## Equilibrio deuda técnica/nueva funcionalidad

Todo lo anterior estaría hecho hace años de no ser por un detalle: el tiempo es finito. De hecho, la cantidad de horas que le dedico al año a este proyecto es muy baja. Y por ello es necesario priorizar. Sobre todo teniendo en cuenta que es un proyecto relativamente longevo y va pidiendo también que se resuelva deuda técnica que tiene. Por ejemplo, cuando el año pasado retomé el proyecto decidí que era necesario subir la versión de Angular a una reciente por temas de rapidez, seguridad y nivel de las herramientas de desarrollo. Pero una vez realizado ese desarrollo me pareció que volvía a urgir añadir algunas funcionalidades, sobre todo pensando que han ido saliendo varias herramientas genéricas de coleccionismo montañero y necesitaba reposicionar la mía incidiendo en su principal fortaleza: su especificidad.

Durante el desarrollo he visto varias cosas que me gustaría mejorar, también han salido nuevas versiones de Angular pero me he limitado a ir anotando para atenderlas cuando tenga tiempo (y ganas). Digamos que me he generado un pequeño backlog con sus tareas de deuda técnica que iré priorizando según vea más conveniente en cada iteración.

## ¿Cómo se cubre actualmente el flujo de hacer una ruta? 

Vamos a ver ahora cómo podríamos utilizar la app en un caso práctico. Supongamos que queremos subir el techo del municipio de Oviedo. Quizás ni siquiera sepamos cuál es o dónde está. Haremos lo siguiente:

1. Accedemos a la [app](https://guitarranalon.github.io/MisTechosAsturias2) y nos abrirá el listado de picos
2. En el cuadro de búsqueda de la parte superior izquierda escribiremos Oviedo y automáticamente nos filtrará el listado, dejando solamente el pico que nos interesa. Hay casos en los que puede encontrar varias opciones, como por ejemplo si se busca "Oscos" u "Onís".
3. Hacemos click/tap en el elemento del listado para ir al detalle. Vemos la información y nos parece interesante.
4. Marcamos (sólo en móviles) la opción "Conducir al inicio" y nos abrirá una aplicación de mapas con el punto inicial de la ruta puesto como destino.
5. Una vez en el inicio le damos a "Navegar" y podemos ir siguiendo el track hasta el pico.
6. Al llegar a casa, marcamos el pico como ascendido, damos a "Compartir" en el mapa de progreso y publicamos el avance de nuestro reto en nuestras redes sociales.

Como puede verse, gracias a la app nos ahorramos un importante trabajo de documentación que nos facilita mucho nuestro objetivo.

## Próximos pasos

Es difícil anunciar cuáles pueden ser los próximos pasos y ya cuando en noviembre de 2024 me puse a subir la versión de Angular del proyecto hice una especulación acerca de cuáles podrían ser para terminar haciendo algo completamente distinto, pero algunas ideas pendientes podrían ser:

- Botón para descargar el track gpx y poder importarlo en otros dipositivos
- Enlace de colaboración dirigido a [nuestra tienda online](https://www.latostadora.com/shop/quicothesiamese/) para que aquellos que se sientan agradecidos por la app puedan mostrarlo.
- Refactorizar el detalle del pico, que empieza a ser un poco grande de más y tiene una cierta repetición de código.
- Apunto una vez más la creación de una capa de abstracción intermedia entre la aplicación y el gestor del estado (Akita) que permita reducir el acoplamiento (y finalmente cambiar de librería fácilmente).
- Subida de versión de Angular, que ya ha cambiado desde que en noviembre actualicé

Como puede verse las opciones son muchas y cuando vuelva a reunir energías habrá que priorizar las que puedan tener más impacto. Mientras tanto, ¿cuál de las opciones que aparecen en la lista te gustaría más ver implementada?¿Se te ocurre alguna que yo no haya contemplado? ¡Escríbeme [un correo](mailto:guitarranalon@gmail.com) y me cuentas!
