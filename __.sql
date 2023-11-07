npx create-nx-workspace@latest
-------------- remove the project
nx generate remove
npm install -D @nrwl/nest
nx generate @nrwl/nest:application admin-backend
npm install @prisma/client
npm install -D @prisma
npx prisma init
npm install typescript ts-node @types/node --save-dev

-------------- docker file
nano docker-compose.yml
docker-compose up -d
docker ps

--start the app
nx serve admin-backend
nx serve admin
 npx nx run-many --target=build --all
----------- create tables on db
npx prisma migrate dev --name init
npx prisma studio

--------- backend generates stuff
 nest generate module prisma
 nest generate service prisma
 nest g mo auth

 ------ frontend generate stuff
 nx g c sidenav --skip-import
 nx g @nx/angular:component my-component
 nx g @nrwl/angular:component mapping --project=admin



------precommits and linting===================
npx husky-init && pnpm install 

-----------run app-------------------------------
nx run admin:serve