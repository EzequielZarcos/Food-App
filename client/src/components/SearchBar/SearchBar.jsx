import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  filterByDiet,
  sortByScore,
  sortByName,
  getRecipeByName,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import lupa from "./lupa.svg";
import style from "./SearchBar.module.css";

export default function SearchBar({ paginado }) {
  const dispatch = useDispatch();
  const [recipeName, setRecipeName] = useState();

  function handleFilterDiet(e) {
    dispatch(filterByDiet(e.target.value));
    paginado(1);
  }

  function handleOrderAlf(e) {
    dispatch(sortByName(e.target.value));
    paginado(1);
  }

  function handleSortScore(e) {
    dispatch(sortByScore(e.target.value));
    paginado(1);
  }

  function handleOnClick() {
    recipeName
      ? dispatch(getRecipeByName(recipeName))
      : alert("No escribiste nada");
    paginado(1);
  }

  return (
    <div className={style.container}>
      <div className={style.divLink}>
        <Link className={style.link} to="/create">
          Create Recipe
        </Link>
      </div>

      <div className={style.divPrincipal}>
        <div className={style.divSearch}>
          <input
            type="text"
            placeholder="Search..."
            className={style.input}
            onChange={(e) => setRecipeName(e.target.value)}
          />
          <button className={style.btnSearch} onClick={handleOnClick}>
            <img src={lupa} alt="" />
          </button>
        </div>

        <div className={style.divSelects}>
          <div className={style.select}>
            <p>Alphabet</p>
            <select
              onChange={(e) => handleOrderAlf(e)}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="Default">Default</option>
              <option value="Asc">Order Asc</option>
              <option value="Desc">Order Desc</option>
            </select>
          </div>

          <div className={style.select}>
            <p>Health Score</p>
            <select
              onChange={(e) => handleSortScore(e)}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="Default">Default</option>
              <option value="Asc">Score Asc</option>
              <option value="Desc">Score Desc</option>
            </select>
          </div>

          <div className={style.select}>
            <p>Diet</p>
            <select
              onChange={(e) => handleFilterDiet(e)}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="All">All</option>
              <option value="gluten free">Gluten Free</option>
              <option value="ketogenic">Ketogenic</option>
              <option value="lacto ovo vegetarian">Lacto-Ovo-Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="pescatarian">Pescatarian</option>
              <option value="paleolithic">Paleo</option>
              <option value="primal">Primal</option>
              <option value="fodmap friendly">Fodmap FRIENDLY</option>
              <option value="whole 30">Whole30</option>
              <option value="dairy free">Dairy Free</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

// export class SearchBar extends Component {

//   render() {

//     function handleFilterDiet(e) {
//       this.props.filterByDiet(e.target.value)
//     }

//     return (
//       <div>
//         <Link to="/recipe/create">Crear Receta</Link>
//         <input type="text" />

//         <select>
//           <option value="Asd">Asc</option>
//           <option value="Desc">Desc</option>
//         </select>

//         <select onChange={e => handleFilterDiet(e)}>
//           <option value="All" >All</option>
//           <option value="Gluten Free" >Gluten Free</option>
//           <option value="Ketogenic" >Ketogenic</option>
//           <option value="Vegetarian" >Vegetarian</option>
//           <option value="Lacto-Vegetarian" >Lacto-Vegetarian</option>
//           <option value="Ovo-Vegetarian" >Ovo-Vegetarian</option>
//           <option value="Vegan" >Vegan</option>
//           <option value="Pescetarian" >Pescetarian</option>
//           <option value="Paleo" >Paleo</option>
//           <option value="Primal" >Primal</option>
//           <option value="Low FODMAP" >Low FODMAP</option>
//           <option value="Whole30" >Whole30</option>
//         </select>
//       </div>
//     )
//   }
// };

// function mapDispatchToProps (dispatch) {
//     return {
//       filterByDiet: () => dispatch(filterByDiet()),
//       // filterByDiet: () => dispatch(filterByDiet()),
//       // filterByDiet: () => dispatch(filterByDiet()),
//     }
//   };

//   export default connect(null, mapDispatchToProps)(SearchBar);
