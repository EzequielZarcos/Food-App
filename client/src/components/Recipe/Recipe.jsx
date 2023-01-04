import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./Recipe.module.css";

export class Recipe extends Component {
  render() {
    return (
      <Link className={style.link} to={`/recipe/${this.props.id}`}>
        <div className={style.divRecipe}>
          <div className={style.divImage}>
            <img
              src={this.props.image}
              className={style.imageRecipe}
              alt="asdasd"
            />
          </div>
          <h3 className={style.titleRecipe}>{this.props.name}</h3>
          {/* <p className={style.dietsRecipe}>
            {this.props.createdInDB
              ? this.props.diets.map((e) => e.diets + ", ")
              : this.props.dietsApi.join(", ")}
          </p> */}
        </div>
      </Link>
    );
  }
}
