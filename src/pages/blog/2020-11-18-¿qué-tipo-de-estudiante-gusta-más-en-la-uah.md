---
templateKey: blog-post
title: ¿Qué tipo de estudiante gusta más en la UAH?
date: 2020-11-18T20:49:49.757Z
description: Análisis de datos obtenidos en la cuenta TINDER de la UAH en INSTAGRAM
featuredpost: true
tags:
  - data-mining
  - python
readtime: "1"
---
En primer lugar la infografía

![Infografía UAH](/img/infografia_tinder_uah.png "Infografía UAH")

\
Allá por el segundo cuatrimestre del 2018 se creó una cuenta en Instagram [Tinder_uah](https://www.instagram.com/tinder_uah/) dónde una persona podía preguntar el instagram de una chica o chico que ha visto por la facultad. La cuenta de Instagram ha llegado a tener más de 650 mensajes publicados.

### **¿Cómo se obtienen los datos?**

Los datos se obtienen de todos los mensajes privados que diferentes estudiantes envían a la cuenta. Las personas que llevan la cuenta suben la foto para que todos los los estudiantes que siguen a la cuenta puedan ayudar. Vemos un ejemplo: [](https://zamarweb.web.app/assets/foto_tinder.jpg)

![Ejemplo Tinder](/img/foto_tinder.jpg "Ejemplo foto")

En este ejemplo se está buscando un chico, con barba, ojos azules y de la facultad de arquitectura. Para este proyecto contamos con 658 fotos. Hay que tener en cuenta que la estructura de cada mensaje es muy particular, en una foto un estudiante dice que hay una chica que le gusta en medicina y en otra foto no se dice nada de ninguna facultad, por lo que solo contamos con la información que los estudiantes usan para destacar a la persona que buscan.

### **¿Cómo se tratan?**

Para este análisis solo mostramos los resultados de las frecuencias. Cuando aparecieron las frecuencias de "RUBIO" y "RIZADO" para el pelo, parecía ser que quizá hubiera una relación entre ambos, sin embargo, con un rápido análisis de asociación descartamos esta teoría. Los gustos de pelo y color van por separado, el pelo rubio y rizado(ambos juntos) NO es el favorito.