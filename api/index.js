const server = require("./src/app.js");
const uuidv1 = require("uuid");

console.log(uuidv1.v1());
const { conn } = require("./src/db.js");
const { preCharge } = require("./src/controllers/getDiet");
const { getApiInfo } = require("./src/controllers/apiInfo.js");
const { Recipe, Diet } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  // await preCharge();

  // const estaOno = Recipe.findAll();
  // if (!estaOno.length) {
  //   getApiInfo();
  // }

  const PORT = process.env.PORT || 5000;

  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
