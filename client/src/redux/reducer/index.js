import {
  GET_RECIPES,
  GET_RECIPE_BY_ID,
  GET_RECIPE_BY_NAME,
  CREATE_RECIPE,
  GET_DIETS,
  FILTER_BY_DIET,
  SORT_BY_NAME,
  SORT_BY_SCORE,
} from "../actions";

const initialState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  recipeDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      console.log(action.payload);
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };

    case GET_RECIPE_BY_NAME:
      return {
        ...state,
        recipes: action.payload,
      };

    case GET_RECIPE_BY_ID:
      console.log(action.payload);
      return {
        ...state,
        recipeDetail: action.payload,
      };

    case CREATE_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };

    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };

    case FILTER_BY_DIET:
      const allRecipes = state.allRecipes;
      console.log(allRecipes);

      if (action.payload === "All") {
        return {
          ...state,
          recipes: allRecipes,
        };
      } else {
        const filtered = allRecipes.filter(
          (e) => !e.createdInDB && e.dietsApi.includes(action.payload)
        );

        const filtered2 = allRecipes.filter((e) => e.createdInDB);
        // e.diets.map(e => e.diets.toLowerCase().includes(action.payload)));
        const filterrrr = [];
        const filtered3 = "hay que arreglar che";
        // const filtered3 = filtered2.map(e, i => e.diets[i].diets.toLowerCase().includes(action.payload) && filterrrr.push(e))

        console.log(filtered3);
        const totalInfo = filtered.concat(filtered3);

        return {
          ...state,
          recipes: totalInfo,
        };
      }

    case SORT_BY_NAME:
      console.log(action.payload);
      return {
        ...state,
        recipes: [
          ...state.recipes.sort(function (a, b) {
            if (action.payload === "Default") {
              return a.id - b.id;
            }
            if (action.payload === "Asc") {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              return 0;
            }
            if (action.payload === "Desc") {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              return 0;
            }
          }),
        ],
      };

    case SORT_BY_SCORE:
      console.log(action.payload);
      return {
        ...state,
        recipes: [
          ...state.recipes.sort(function (a, b) {
            if (action.payload === "Default") {
              return a.id - b.id;
            }
            if (action.payload === "Asc") {
              return a.healthScore - b.healthScore;
            }
            if (action.payload === "Desc") {
              return b.healthScore - a.healthScore;
            }
          }),
        ],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
