
# Enredados comercio electrónico

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


Este proyecto consta del back-end de un comercio electrónico de juegos de mesa.

En él tendremos que crearnos nuestro usuario y una vez logueados podremos acceder al catálogo de juegos con sus categorías, pudiéndolos buscar por nombre, precio, id, categoría, etc.


## Tecnologías utilizadas

- JavaScript
- Node.js
- express
- mysql
- sequelize
- bcryptjs
- jsonwebtoken

```bash
  npm init -y
  npm i express mysql2 sequelize
  npm i bcryptjs
  npm i jsonwebtoken
```


## Instalación

Para poder utilizar este proyecto debemos localizar el archivo: config.example.json

Modificar lo siguiente:

```bash
  "development": {
      "username": "root",
      "password": "Introduce aqui tu Contraseña de MySQL",
      "database": "e-commerce",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "jwt_secret":"Introduce aqui una contraseña"
    },
```
Sustituir el nombre del archivo por config.json.   


## Documentación

Este proyecto consta de:
- Usuarios
- Pedidos
- Juegos de mesa
- Categorías

Teniendo esto claro procedemos a realizar un diagrama en MySQL.

![diagrama](https://github.com/JuanjoSalas/e-commerce/assets/161235632/9a36760d-fc2d-48a1-a388-1a8396cb3461)


En este podremos observar las tablas que hemos utilizado y el tipo de relación de cada una.

En primer lugar tenemos la tabla de Usuarios la cual tiene una relación uno a muchos con la de Pedidos, debido a que un Pedido tiene un Usuario, pero un Usuario puede tener varios Pedidos.
Por ello en la tabla de Pedidos incluimos el id del Usuario.

Un Pedido puede incluir varios Juegos de Mesa, y un mismo Juego puede estar en muchos pedidos por lo que tendremos una relación muchos a muchos y por lo tanto una tabla intermedia entre ellas.

A  su vez un Juego de Mesa puede tener varias Categorías y una Categoría muchos juegos, Por lo tanto tienen una relación de muchos a muchos y por lo tanto una tabla intermedia.


## Documentación API

https://documenter.getpostman.com/view/34523681/2sA3JJA3XC


## Autor

![Banner](https://github.com/JuanjoSalas/e-commerce/assets/161235632/b18d008b-dbc5-4b10-8323-3e0a135fe97d)

- [GitHub](https://www.github.com/JuanjoSalas)
- [LinkedIn](https://www.linkedin.com/in/juanjo-salas-jiménez)
