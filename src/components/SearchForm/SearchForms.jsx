import "./SearchForms.css";
import { SearchFormFilter } from "../../helpers/SearchFormFilter";
import { SearchFormRecs } from "./SearchFormRecs";
import { useState } from "react";
import { RecipeSearchForm } from "./RecipeSearchForm";

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
          <RecipeSearchForm />
        );
      case "Ingredients":
        return (
          <form action="/search ">
            <input
              name="searchFormValue"
              placeholder="Ingredients Search"
              onChange={(event) => handleSearchInputChange(event.target.value)}
            />
            <input type="hidden" name="searchFormCategory" value="Ingredients" />
          </form>
        );
      case "Cooking Time":
        return (
          <form action="/search">
            <input
              name="searchFormValue"
              placeholder="Cooking Time Search"
              onChange={(event) => handleSearchInputChange(event.target.value)}
            />
            <input type="hidden" name="searchFormCategory" value="Cooking Time" />
          </form>
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
