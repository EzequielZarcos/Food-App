import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipe, getAllRecipes } from "../../redux/actions";
import { useHistory } from "react-router-dom";

export function useForm(initialForm, validateForm) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null);

  const handleOnChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }

  const handleChecked = (ev) => {
    if(ev.target.checked) {
      setForm({
        ...form, diets: [...form.diets, ev.target.name]
      })
    }else setForm({
      ...form, diets: form.diets.filter(e => e !== ev.target.value)
    })
  }

  const handleBlur = (e) => {
    handleOnChange(e);
    setErrors(validateForm(form));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if(Object.keys(errors).length === 0 && form.name !== ""){
      dispatch(createRecipe(form))
      .then(res => res && dispatch(getAllRecipes()))
      .then(alert("Recipe Created"))
      .then(res => res && history.push("/home"))
    }else return;
  }

  const handleSteps = (ev) => {
    if(form.listSteps.length){
      setForm({
        ...form, steps: [...form.steps, form.listSteps], listSteps:""
      })
    };
  }

  return {
    form,
    errors,
    response,
    handleOnChange,
    handleChecked,
    handleBlur,
    handleSubmit,
    handleSteps
  }
}