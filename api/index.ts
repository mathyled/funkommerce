const { conn } = require("./src/db.ts");
const { PORT } = process.env;
import server from "./src/app";
const {
  productCreate,
  loadCategory,
  loadBrand,
  loadLicense,
} = require("./src/init");

console.log('conectandose a la base de datos puerto: ',PORT)
conn.sync({ force: true }).then(async () => {
  console.log('waits indexs')
  await loadBrand();
  await loadLicense();
  await loadCategory();
  await productCreate();
  console.log('despues de los waits indexs')
  server.listen(PORT, () => {
    console.log(`server listenning ${PORT}`);
  });
});
