const { Router } = require("express");
const { preCharge } = require("../controllers/getDiet");
const { Diet } = require("../db.js");
const router = Router();

const getDiets = router.get("/", async (req, res, next) => {
  try {
    const response = await Diet.findAll();
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});

module.exports = { getDiets };
