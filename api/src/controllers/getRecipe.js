const { Recipe, Diet } = require("../db.js");

const filterRecipeName = async (name) => {
  const info = await Recipe.findAll({ include: Diet });
  if (name) {
    const result = await info.filter((e) => {
      return e.name.toLowerCase().includes(name.toLowerCase());
    });
    if (result.length) {
      return result;
    }
  } else {
    return info;
  }
};

const filterRecipeId = async (id) => {
  const info = await Recipe.findAll({ include: Diet });
  if (id) {
    const result = await info.filter((e) => e.id == id);
    if (result.length) {
      return result;
    } else return "No existe esa receta, pero podes crearla";
  } else {
    return info;
  }
};

const createRecipe = async ({ name, resume, healthScore, diets, steps }) => {
  const newRecipe = await Recipe.create({
    name,
    resume,
    healthScore,
    steps,
    createdInDB: true,
  });

  const dietDb = await Diet.findAll({
    where: {
      diets: diets,
    },
  });

  newRecipe.addDiet(dietDb);
  return "Receta creada";
};

module.exports = { filterRecipeId, filterRecipeName, createRecipe };
