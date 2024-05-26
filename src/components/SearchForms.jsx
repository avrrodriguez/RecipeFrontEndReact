import "./SearchForms.css";
import { SearchFormFilter } from "./SearchFormFilter";
import { useState } from "react";

export function SearchForms(props) {
  const [recArray, setRecArray] = useState([]);

  const handleRecipeNameSubmit = (event) => {
    console.log(event);
  };

  const handleIngredientsSubmit = (event) => {
    console.log(event);
  };

  const handleCookingTimeSubmit = (event) => {
    console.log(event);
  };

  const handleRecipeNameChange = (event) => {
    var filteredList = SearchFormFilter(props.activeForm, event.target.value);
    console.log(filteredList, "something");
    setRecArray((recArray) => [...recArray, "something"]);
  };

  function searchFormsSwitch() {
    switch (props.activeForm) {
      case "Recipe Name":
        return (
          <form onSubmit={handleRecipeNameSubmit}>
            <input
              name="recipeNameInput"
              placeholder="Recipe Name Search"
              onChange={(event) => handleRecipeNameChange(event)}
            />
          </form>
        );
      case "Ingredients":
        return (
          <form onSubmit={handleIngredientsSubmit}>
            <input name="ingredientsInput" placeholder="Ingredients Search" />
          </form>
        );
      case "Cooking Time":
        return (
          <form onSubmit={handleCookingTimeSubmit}>
            <input name="cookingTimeInput" placeholder="Cooking Time Search" />
          </form>
        );
    }
  }

  return (
    <div className="search-forms">
      {searchFormsSwitch()}
      {recArray.length != 0 ? (
        <div className="search-form-list">
          <p>{recArray.length}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
