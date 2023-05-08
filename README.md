# Delta Booking
Backend of Final project to Make it Real, API to make bookings at the diferents Hotels.

## Instalation

1. npm init -y
2. npm i express cors morgan @prisma/client
3. npm i -D @types/express @types/cors @types/morgan @types/node prisma typescript ts-node-dev
4. Create script in package.json
5. npx tsc --init // Crear configuración de ts tsconfig.json
6. Create src/
7. Create src/app.ts
8. Create src/config/express.ts
9. Create src/api/
10. Create enpoint healthcheck

## Prisma

1. npx prisma init
2. Install prisma extension and configure format .vscode/settings.json

- prisma/schema.prisma At this point the entities and their corresponding relationships are setted.

3. npx prisma migrate dev "to migrate the schema prisma"
4. npx prisma studio "to show the data base"

## Data Base

- To fill the database, run the seeder with the following command

```
$ npm run prisma:seed
```
- After this configure the role entity with user and admin 

## Additional Settings

- .env Add environment variables
- .gitignore Update this file to ignore the node modules.

### Local Development

```
$ npm run dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Authors

- Michael Saenz
- Andres Velez
- Oscar Nuñez