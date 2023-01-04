import React, { Component } from "react";
import { getRecipeById } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./RecipeDetail.module.css";

export default function RecipeDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipeDetail = useSelector((state) => state.recipeDetail);

  useEffect(() => {
    dispatch(getRecipeById(id));
  }, []);

  return (
    <div className={style.divPrincipal}>
      <p style={{ color: "azure" }} className={style.link}>
        <Link className={style.link} to="/home">
          Home
        </Link>
        /Detail
      </p>

      <div className={style.divTitle}>
        <h1>{recipeDetail.length && recipeDetail[0].name}</h1>
      </div>

      <div className={style.divInfo}>
        <div className={style.divLeft}>
          <div className={style.divImage}>
            <img
              className={style.image}
              src={recipeDetail.length && recipeDetail[0].image}
            />
          </div>

          <h3>
            Health Score: {recipeDetail.length && recipeDetail[0].healthScore}
          </h3>

          <div className={style.divDiets}>
            <h3>
              Diets Types:{" "}
              {recipeDetail.length &&
                (recipeDetail[0].diets.length
                  ? recipeDetail[0].diets.map((e) => e.diets + ", ")
                  : recipeDetail[0].dietsApi.map((e) => e + ", "))}
            </h3>
          </div>
        </div>

        <div className={style.divRight}>
          <h2>Dish Summary</h2>
          <p>{recipeDetail.length && recipeDetail[0].resume}</p>

          <h2>Recipe Steps</h2>
          <ul>
            {recipeDetail.length &&
              recipeDetail[0].steps?.map((e, i) => {
                return <li key={e}>{e}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

// export class RecipeDetail extends Component {
//   state = {
//     id: this.props.match.params.id
//   }

//   componentDidMount() { this.props.getRecipeById(this.props.match.params.id) }

//   render() {
//     return (
//       <div>
//       <h1>XD{this.props.recipeDetail.id}</h1>
//       <h1>AAAAAAAAA {this.state.id}</h1>
//       <h1>AAAAAAAAAA</h1>
//       </div>
//     )
//   }
// }

// function mapStateToProps(state) {
//   return {
//     recipeDetail: state.recipeDetail
//   }
// };

// function mapDispatchToProps(dispatch) {
//   return {
//     getRecipeById: () => dispatch(getRecipeById())
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
