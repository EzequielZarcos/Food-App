require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe, Diet } = require("../db.js");

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=687228e85eef476ea6713664f679b622&addRecipeInformation=true&number=100`
  );
  const apiInfo = await apiUrl.data.results.map((e) => {
    return {
      // id: e.id,
      image: e.image,
      name: e.title,
      dietsApi: e.diets ? e.diets : "Esta receta no tiene dietas asociadas",
      dishTypes: e.dishTypes.join(", "),
      healthScore: e.healthScore,
      resume: e.summary.replace(/<[^>]*>?/gm, ""),
      steps: e.analyzedInstructions[0]
        ? e.analyzedInstructions[0].steps.map((e, i) => `${i + 1}: ${e.step}`)
        : ["No existen instrucciones"],
    };
  });

  for (let i = 0; i < apiInfo.length; i++) {
    await Recipe.findOrCreate({
      where: {
        name: apiInfo[i].name,
        image: apiInfo[i].image,
        // dishTypes: apiInfo[i].dishTypes,
        healthScore: apiInfo[i].healthScore,
        resume: apiInfo[i].resume,
        steps: apiInfo[i].steps,
        dietsApi: apiInfo[i].dietsApi,
      },
    });
  }
  // }
};
module.exports = { getApiInfo };
