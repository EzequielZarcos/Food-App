import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiets } from "../../redux/actions";
import { useForm } from "./useForm.js";
import { Link } from "react-router-dom";
import "./RecipeCreate.css";

const initialForm = {
  name: "",
  resume: "",
  healthScore: 50,
  diets: [],
  steps: [],
  listSteps: "",
};

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexResume = /^.{1,300}$/;

  if (!form.name.trim()) {
    errors.name = "El nombre de la receta es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El nombre de la receta solo acepta letras y espacios.";
  }

  if (!form.resume.trim()) {
    errors.resume = "El resumen de la receta es requerido";
  } else if (!regexResume.test(form.resume.trim())) {
    errors.resume = "El resumen de la receta excede el maximo de caracteres.";
  }

  if (form.diets.length === 0) {
    errors.diets = "Debes seleccionar minimo 1 tipo de dieta";
  }

  return errors;
};

export default function RecipeCreate() {
  const {
    form,
    errors,
    response,
    handleOnChange,
    handleChecked,
    handleBlur,
    handleSubmit,
    handleSteps,
  } = useForm(initialForm, validateForm);
  const dispatch = useDispatch();
  const allDiets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getAllDiets());
  }, []);

  return (
    <div className="div-create">
      <Link to="/home">
        <button className="btn-create">Home</button>
      </Link>
      <div className="div-create2">
        <h2 className="title-create">Create your Recipe</h2>
        <form onSubmit={handleSubmit}>
          <label className="label-name" htmlFor="name">
            Name of your Recipe:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onBlur={handleBlur}
            onChange={handleOnChange}
            placeholder="Write the name of your recipe"
            className="input-create"
          />

          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="resume">Summary of your recipe:</label>
          <textarea
            name="resume"
            id="resume"
            value={form.resume}
            onBlur={handleBlur}
            onChange={handleOnChange}
            cols="30"
            rows="10"
            placeholder="Write a summary of your recipe"
          />

          {errors.resume && <p className="error">{errors.resume}</p>}

          <label htmlFor="healthScore">Health score of your recipe</label>
          <input
            type="range"
            min="0"
            max="100"
            name="healthScore"
            id="healthScore"
            value={form.healthScore}
            onBlur={handleBlur}
            onChange={handleOnChange}
            className="inp-range"
          />

          {errors.healthScore && <p className="error">{errors.healthScore}</p>}

          <label>Select the type of diets of your recipe</label>
          {allDiets.length &&
            allDiets.map((e) => {
              return (
                <div key={e.id} className="div-checkbox">
                  <label htmlFor={e.diets} className="label-create">
                    <input
                      type="checkbox"
                      name={e.diets}
                      id={e.id}
                      value={form.diets}
                      onChange={handleChecked}
                      className="checkbox"
                    />
                    {e.diets}
                  </label>
                </div>
              );
            })}

          {errors.diets && <p className="error">{errors.diets}</p>}

          <label htmlFor="">Add steps to your recipe</label>
          <input
            type="text"
            className="input-create"
            onChange={handleOnChange}
            value={form.listSteps}
            name="listSteps"
          />
          <button className="btn-create" onClick={handleSteps} type="button">
            Add
          </button>
          <div className="list-steps">
            {form.steps.map((e) => {
              return <li key={e}>{e}</li>;
            })}
          </div>

          <button className="btn-create" type="submit" value="create">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
