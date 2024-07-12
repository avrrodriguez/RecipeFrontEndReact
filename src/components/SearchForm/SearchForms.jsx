import "./SearchForms.css";
import { RecipeSearchForm } from "./RecipeSearchForm";
import { CookingStyleSearchForm } from "./CookingStyleSearchForm";
import { IngredientSearchForm } from "./IngredientSearchForm";
import { useState } from "react";

export function SearchForms(props) {
  const [currActiveForm, setCurrActiveForm] = useState("");

  function searchFormsSwitch() {
    let value;
    if (currActiveForm == "") {
      setCurrActiveForm(props.activeForm);
      value = props.searchValue;
    } else {
      if (currActiveForm != props.activeForm) {
        value = "";
      } else {
        value = props.searchValue;
      }
    }

    switch (props.activeForm) {
      case "Recipe Name":
        return (
          <RecipeSearchForm searchValue={value}/>
        );
      case "Ingredients":
        return (
          <IngredientSearchForm searchValue={value} />
        );
      case "Cooking Style":
        return (
          <CookingStyleSearchForm searchValue={value} />
        );
    }
  }

  // list item attribute name is different depending on category
  return (
    <div className="search-forms">
      {searchFormsSwitch()}
    </div>
  );
}