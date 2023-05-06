# Hotel Booking
Final project to Make it Real, API to make bookings at the diferents Hotels.

##

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

- .env Add environment variables
- .gitignore Update this file to ignore the node modules.
- prisma/schema.prisma // modificar archivo

2. Install prisma extension and configure format .vscode/settings.json

3. npx prisma migrate dev
4. npx prisma studio

## Authors

- Michael Saenz
- Andres Velez
- Oscar Nuñez