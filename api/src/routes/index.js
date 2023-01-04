const { Router } = require("express");
const { getDiets } = require("./RouteDiet.js");
const { getRecipeName, getRecipeId, postRecipe } = require("./RouteRecipe.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipes", getRecipeName);

router.use("/recipes", getRecipeId);

router.use("/recipes", postRecipe);

router.use("/diets", getDiets);

module.exports = router;
