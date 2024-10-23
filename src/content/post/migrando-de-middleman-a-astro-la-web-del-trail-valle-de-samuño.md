---
publishDate: 2024-07-23T00:00:00Z
author: Roberto
title: Migrando de Middlenman a Astro la web del Trail Valle de Samuño
excerpt: Porque cualquier momento es bueno para hacer mejoras en un proyecto
image: https://images.unsplash.com/photo-1516996087931-5ae405802f9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
category: Proyectos web
tags:
  - astro
  - middleman
  - Trail Valle de Samuño
---

En 2016 desarrollé la primera versión de la web del Trail Valle de Samuño. Era una web muy sencilla pero que aumentaba el nivel del evento en su conjunto, ya que pocas carreras cuentan con una web tan bien acabada antes de su primera edición. Desgraciadamente, al tratarse del primer año, tuve que dejarla peor de lo que me hubiera gustado para poder llegar a tiempo no sólo con la propia web sino también con el resto de cosas que había que hacer (como la imagen corporativa, pero eso es ya para otra entrada). En resumen, simplemente se sentaron unas bases para ir evolucionando a base de iteraciones (me gustan las metodologías ágiles, qué le vamos a hacer).

Dado que contábamos con un presupuesto muy reducido, decidí optar por utilizar un generador de sitios estáticos que me diese la flexibilidad de la programación, pero la gratuidad en el despliegue al no tener procesado en el servidor. De entre las muchas opciones disponibles decidí utilizar Middleman que está escrito en Ruby. Recordemos que eso no me generaba ninguna restricción a nivel de despliegue ya que lo que se desplegaría serían ficheros estáticos (HTML, CSS, Javascript e imágenes, básicamente). Puede parecer una decisión extraña para un desarrollador frontend pero quería un pequeño reto que me sacase de la zona de confort y en aquel entonces era bastante utilizado. Por dar una referencia, aún faltaba un año para que apareciese en npm la primera versión de sass.

Finalmente conseguí hacerme a Middleman, publicar el sitio a tiempo e ir mejorándolo edición tras edición, no sólo añadiendo más y mejor contenido, sino también funcionalidades. Sin embargo, me costaba sacar el trabajo y, además, tal y como había montado el proyecto resultaba muy mejorable el workflow. No es de extrañar que cada vez me diese más pereza actualizar la web y estuviese empezando a darle vueltas al tema de cambiar de generador de sitios estáticos. Pero había dos problemas: a cuál me cambiaría y cuánto tiempo me llevaría la migración.

## Astro, te elijo a ti

Llevaba tiempo oyendo hablar de Astro y su gran potencia, así como el hecho de pertenecer a un ecosistema Node/Javascript que me resulta tan familiar, por lo que decidí echar un vistazo a la documentación. Mientras leía iba dándome cuenta que, sobre el papel, la migración era sencilla y relativamente poco laboriosa, básicamente consistía en:

1. Crear el proyecto Astro
2. Copiar los archivos desde el proyecto Middleman
3. Cambiar los archivos *.html.erb por archivos *.astro
4. Cambiar los *.yml por *.json
5. Editar las plantillas y los métodos de utilidad 

Por lo general tengo por norma dejar bastantes meses de descanso entre el final de la carrera y el momento de empezar a realizar cambios para la siguiente edición. El objetivo es no quemarme por estar todo el año haciendo cambios en todos los proyectos que gestiono. Pero en este caso hice una excepción y me puse un par de meses después de terminar la carrera a hacer la migración tecnológica del sitio web.

## Me doy cuenta de que he subestimado la tarea

De cara a la edición de 2024 ya había hecho importantes mejoras en el sitio web, tanto a nivel de contenidos y estilos como en cuanto a funcionalidad y, sobre todo, optimización. La ilusión puede con todo, pero se me hizo bastante pesado por los problemas comentados anteriormente, llevándome más tiempo del que debería, que tuve que robar a otras tareas, así que me puse manos a la obra y fui siguiendo los pasos anteriores. Enseguida me di cuenta que no iba a ser tan rápido como me había imaginado. Reescribir las plantillas me llevó más tiempo del esperado y surgieron pequeños problemas por todas partes, pero tras un par de semanas tenía el nuevo sitio web (que era una copia mejorada, casi exacta, del antiguo) en producción.

Ahora tenía básicamente dos ventajas:

1. Podía incorporar cambios rápidamente gracias a mi profundo conocimiento del entorno
2. El workflow de despliegue había mejorado una barbaridad: basta un push a main para que automáticamente una action genere y despliegue el nuevo sitio

Puede parecer poca cosa, pero desde entonces y pese la reticencia a trabajar a lo largo de todo el año en el proyecto, he hecho varios cambios, algunos de los cuales llevaban en la lista de espera 3 años.

## Conclusiones

En primer lugar, no me arrepiento de la elección inicial de generador de sitios estáticos, creo que fue bastante acertada para aquel momento y circunstancias, pero el crecimiento del evento y de la web hizo más necesario que nunca poder hacer modificaciones más frecuentemente. También las tecnologías van evolucionando y al proyecto con Middleman le había llegado su hora. 

Por otro lado, la reescritura del proyecto me llevó un tiempo que tardaré en amortizar (al menos considerando solamente el propio proyecto) pero ya he comprobado desde el principio que ese momento va a llegar. Y con la motivación extra de la facilidad de cambio quizás antes de lo que me pienso.

Así pues, ahora dispongo de una base más sólida sobre la que trabajar y aunque este año no evolucione mucho más el sitio (para compensar las horas invertidas en la migración) podré realizar los cambios más rápidamente, dejándome más margen para otras tareas organizativas.