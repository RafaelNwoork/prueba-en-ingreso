# Prueba de ingreso

Hice este proyecto para aprender NEST y GraphQL de forma rapida

Es una API con un CRUD básico para administrar bandas con GraphQL.

## Requerimientos:

- PostgresSQL 16
- Node LTS (20)

## Levantar el proyecto

```shell
# Clonar el Repositorio
$ git clone https://github.com/RafaelNwoork/prueba-de-ingreso --depth=1

cd prueba-de-ingreso

# Instalar dependencias
# Quizas si no funciona, probar con `npm ci`?
npm install
```

Se requiere editar el archivo `src/infraestructure/db/sql/data-source.ts` con los datos de tu conexión a la Base de Datos.

Esto es porque me dio flojera crear un archivo `.env` nomas, no porque sea dificil. Quizas pa otro dia.

```shell
# Correr las migraciones
npm run migration:run

# Revertir las migraciones
npm run migration:rever

# Correr el proyecto
npm run start:dev
```

## Utilizar el proyecto

Este proyecto está hardcodeado para correr en el puerto 3000, así que una vez ejecutándolo, puedes dirigirte hacia `localhost:300/graphql`.
