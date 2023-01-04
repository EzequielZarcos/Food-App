import React from "react";
import style from "./Pagination.module.css";

export default function Pagination({ allRecipes, paginado, recipesPerPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.paginate}>
      {pageNumbers.length &&
        pageNumbers.map((number) => (
          <button
            className={style.btnPaginate}
            onClick={() => paginado(number)}
            key={number}
          >
            {number}
          </button>
        ))}
    </div>
  );
}
