# Node-Chat-API

Chat API con NodeJS

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)

## Requisitos

Requisitos previos para ejecutar el proyecto:

- Node.js (v14 o superior)
- MySQL

## Instalación

1. Clona el repositorio desde GitHub:

  ```bash
  git clone https://github.com/Dieguidev/node-chat-api.git
  ```

2. Cambia al directorio del proyecto clonado utilizando el siguiente comando en la terminal:

  ```bash
  cd node-chat-api
  ```

3. Instalar Dependencias:

  ```bash
  npm install
  ```
## Configuración

Crea un archivo .env en el directorio raíz del proyecto y agrega las siguientes variables de entorno:

  ```bash
  DB_NAME=
  DB_USER=
  DB_HOST=
  DB_PASSWORD= 
  DB_PORT= 
  ```
  
## Ejecución

Iniciar el Servidor: Utiliza el siguiente comando para iniciar el servidor:

  ```bash
  npm run start
  ```

Si deseas iniciar en modo desarrollador:

  ```bash
  npm run dev
  ```
