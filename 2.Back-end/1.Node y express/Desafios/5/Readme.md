# Proyecto de Creación de API Avanzada con Node.js, PostgreSQL y Express

Este proyecto se centra en la creación de APIs avanzadas utilizando Node.js, PostgreSQL y Express. El objetivo principal es establecer un servidor remoto que se conecta a una base de datos remota, implementar middlewares para la lectura de consultas y respuestas del servidor, y aplicar medidas de protección contra SQL injection.

## Tecnologías Utilizadas

- **Node.js:** Entorno de ejecución de JavaScript del lado del servidor.
- **Express:** Marco de aplicación web para Node.js.
- **PostgreSQL:** Sistema de gestión de bases de datos relacional.
- **pg y pg-format:** Paquetes de npm para la conexión y manipulación de datos en PostgreSQL.

## Funcionalidades Principales

1. **Creación de Servidor y Conexión a la Base de Datos:**
   - Configuración del servidor Express.
   - Conexión a una base de datos PostgreSQL remota utilizando pg.

2. **Middlewares Personalizados:**
   - Implementación de middlewares para la lectura y manipulación de consultas y respuestas del servidor.

3. **Protección contra SQL Injection:**
   - Uso de pg-format para formatear dinámicamente las consultas SQL, evitando así posibles inyecciones SQL.

## Instrucciones de Uso

1. **Instalación de Dependencias:**
   npm i pg
   npm i pg-format
   npm i express

## Configuración de la Base de Datos:
    Asegurate de tener instalado postgresql con un usuario remoto configurado, luego abre la terminal e inicias sesion en el usuario desde esa terminal.

    luego copia y pega todo el contenido del archivo INS.sql para crear la base de datos

## Ejecución del Proyecto:
    En el archivo consultas.js dirigete a la const con nombre pool y cambia donde dice password y user tu contraseña y nombre de usuario de postgre.

    Ahora solo ejecuta el server.js escribiendo en una terminal que este en el mismo directorio:
    "Node server.js" (Obviamente con Node ya instalado)

    y listo ya puedes hacer una consulta get, recomiendo utilizar la extension Thunder Client para comodidad

    La API estará disponible en http://localhost:3000 (o el puerto que hayas configurado).
