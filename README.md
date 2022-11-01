<p align="center">
    Trabajo Práctico - Clave Valor - Laboratorio II - UP
    <br>
    2C - 2022
    <br>
</p>

# :pencil: Table of Contents
- [Acerca De](#about)
- [Levantar Proyecto](#run_project)
- [Herramientas Utilizadas](#built_using)
- [Comentarios](#comments)
- [Autores](#authors)
- [Reconocimientos](#acknowledgement)

# :information_source: Acerca De <a name = "about"></a>
- Repositorio que contiene el trabajo práctico de clave valor de la materia Laboratorio II.

# :wrench: Levantar Proyecto <a name = "run_project"></a>

## Base de Datos
- Ir a ```C:\Program Files\Memurai``` y ejecutar el archivo **memurai-cli.exe**

## Cliente
1. Abrir una terminal
2. Dirigirse a la ruta de este proyecto
3. Correr el siguiente comando: ```node [archivo.js]```
o
Podemos correr alguno de los scripts ya creados en pacakge.json:
``` npm run [script] ```

### Scripts npm
- "start:server"
- "start:app"
- "start:cache"
- "start:publisher"
- "start:session"

# :hammer: Herramientas Utilizadas <a name = "built_using"></a>

## Herramientas
Recomendamos utilizar [chocolatey](https://chocolatey.org/install) para instalar estos paquetes:

- [memurai-developer](https://community.chocolatey.org/packages/memurai-developer/) -> v2.0.7
```
choco install memurai-developer --version 2.0.7
```
- [nodejs-lts](https://community.chocolatey.org/packages/nodejs-lts) -> v16.18.0
```
choco install nodejs-lts --version 16.18.0
```

## Paquetes npm
Recomendamos utilizar la versión de npm que viene incluído en la versión de nodejs LTS (v16.18.0) para instalar los siguientes paquetes:

- Los paquetes utilizados se encuentran en el archivo package.json y pueden ser instalados localmente al proyecto con el comando:
```
npm install
```

# :question: Comentarios <a name = "comments"></a>

## Git
- Debemos tener instalado Git para poder clonar este repositorio:
[git](https://community.chocolatey.org/packages/git/)
```
choco install git
```

## Memurai
- Default Host: 127.0.0.1
- Default Port: 6379

## Cómo interactuar con memurai-cli
Dado a que memurai es compatible con los comandos de redis-cli podemos utilizar la documentación oficial de este último:
https://redis.io/docs/manual/cli/

# :speech_balloon: Autores <a name = "authors"></a>
- Grupo 2

# :tada: Reconocimientos <a name = "acknowledgement"></a>
- https://github.com/newwuhan5/nodejs-redis-memurai -> creador del repositorio base
- https://www.sitepoint.com/using-redis-node-js/ -> creador de los ejemplos aquí expuestos
- https://github.com/github/gitignore
- https://gist.github.com/rxaviers/7360908