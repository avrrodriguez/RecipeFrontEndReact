import "./SearchForms.css";
import { SearchFormFilter } from "../../helpers/SearchFormFilter";
import { SearchFormRecs } from "./SearchFormRecs";
import { useState } from "react";
import { RecipeSearchForm } from "./RecipeSearchForm";
import { CookingStyleSearchForm } from "./CookingStyleSearchForm";
import { IngredientSearchForm } from "./IngredientSearchForm";

export function SearchForms(props) {

  const handleSearchSuggestionClick = (event) => {
    event.preventDefault();
    console.log("click");
    // window.location.href = "http://localhost:5173/search?searchItem=" + event.target.value;
  };

  function searchFormsSwitch() {
    switch (props.activeForm) {
      case "Recipe Name":
        return (
          <RecipeSearchForm searchValue={props.searchValue}/>
        );
      case "Ingredients":
        return (
          <IngredientSearchForm searchValue={props.searchValue} />
        );
      case "Cooking Style":
        return (
          <CookingStyleSearchForm searchValue={props.searchValue} />
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
