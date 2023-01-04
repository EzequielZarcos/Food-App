const { Diet } = require("../db.js");

const typesDiets = [
  "Gluten Free",
  "Ketogenic",
  "Vegetarian",
  "Lacto-Ovo-Vegetarian",
  "Vegan",
  "Pescatarian",
  "Paleolithic",
  "Primal",
  "Fodmap FRIENDLY",
  "Whole 30",
];

const preCharge = async () => {
  typesDiets.forEach((type) => {
    Diet.findOrCreate({
      where: { diets: type },
    });
  });
};

module.exports = { preCharge };
