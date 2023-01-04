import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_SCORE = "SORT_BY_SCORE";


export const getAllRecipes = () => {
  return async function (dispatch) {
    let recipes = await axios.get("/recipes")
    return dispatch({ type: GET_RECIPES, payload: recipes.data })
  }
}

export const getRecipeById = (id) => {
  return async function (dispatch) {
    let recipes = await axios.get(`/recipes/${id}`)
    return dispatch({ type: GET_RECIPE_BY_ID, payload: recipes.data })
  }
};

export const getRecipeByName = (name) => {
  console.log(name)
  return async function (dispatch) {
    let recipes = await axios.get(`/recipes?name=${name}`)
    return dispatch({ type: GET_RECIPE_BY_NAME, payload: recipes.data })
  }
};

export const createRecipe = (data) => {
  return async function () {
    let newRecipe = await axios.post(`/recipes`, data)
    return newRecipe;
  }
};

export const getAllDiets = () => {
  return async function (dispatch) {
    let diets = await axios.get("/diets")
    return dispatch({ type: GET_DIETS, payload: diets.data })
  }
};

export const filterByDiet = (payload) =>{
  return { type: FILTER_BY_DIET, payload: payload }
}

export const sortByName = (payload) =>{
  return { type: SORT_BY_NAME, payload: payload }

};

export const sortByScore = (payload) =>{
  return { type: SORT_BY_SCORE, payload: payload }
}
