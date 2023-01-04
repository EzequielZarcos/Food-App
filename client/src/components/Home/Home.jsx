import React from "react";
import { Recipe } from "../Recipe/Recipe.jsx";
import { getAllRecipes } from "../../redux/actions";
// import { connect } from 'react-redux';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../Pagination/Pagination.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Home.module.css";
// import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const [loaded, setLoaded] = useState(true);
  const [currentPage, setCurrentePage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const lastRecipe = currentPage * recipesPerPage;
  const firstRecipe = lastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(firstRecipe, lastRecipe);

  const paginado = (pageNumber) => {
    setCurrentePage(pageNumber);
  };

  useEffect(() => {
    if (allRecipes.length) {
      setLoaded(false);
      return;
    }
    dispatch(getAllRecipes());
  }, [allRecipes]);

  return (
    <div className={style.divHome}>
      <SearchBar paginado={paginado} />

      {loaded ? (
        <div className={style.divLoading}>
          <div className={style.loading}>
            <p>Loading...</p>
            <div
              className={`spinner-border`}
              style={{ width: "4rem", height: "4rem" }}
              role="status"
            >
              <span className="visually-hidden"></span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className={style.divRecipes}>
            {typeof currentRecipes === "string" ? (
              <h4>No existe esa receta, pero podes crearla.</h4>
            ) : (
              currentRecipes.map((e) => {
                return (
                  <Recipe
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    image={e.image}
                    diets={e.diets}
                    dietsApi={e.dietsApi}
                    createdInDB={e.createdInDB}
                  />
                );
              })
            )}
          </div>

          <div className={style.divPagination}>
            <Pagination
              allRecipes={allRecipes.length}
              recipesPerPage={recipesPerPage}
              paginado={paginado}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// class Home extends Component {

//   componentDidMount() {this.props.getAllRecipes()}

//   render() {
//     return (
//       <div>
//         <h1>Recetitas</h1>
//         {this.props.recipes && this.props.recipes.map(e => {
//           return (
//             <Recipe
//               key={e.id}
//               id={e.id}
//               name={e.name}
//               image={e.image}
//               diets={e.diets} />
//           )}
//         )}
//       </div>
//     )
//   }
// }

// function mapStateToProps (state) {
//   return {
//     recipes: state.recipes
//   }
// };

// function mapDispatchToProps (dispatch) {
//   return {
//     getAllRecipes: () => dispatch(getAllRecipes())
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
