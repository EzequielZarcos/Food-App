const { Router } = require("express");
const {
  filterRecipeName,
  filterRecipeId,
  createRecipe,
} = require("../controllers/getRecipe.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const getRecipeId = router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await filterRecipeId(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

const getRecipeName = router.get("/", async (req, res, next) => {
  try {
    const { name } = req.query;
    const response = await filterRecipeName(name);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});

const postRecipe = router.post("/", async (req, res, next) => {
  try {
    const { name, resume, healthScore, steps, diets } = req.body;
    const response = await createRecipe({
      name,
      resume,
      healthScore,
      steps,
      diets,
    });
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});

module.exports = { getRecipeName, getRecipeId, postRecipe };
