import "./SearchForms.css";
import { SearchFormFilter } from "./SearchFormFilter";
import { useState } from "react";

export function SearchForms(props) {
  const [recArray, setRecArray] = useState([]);

  const handleRecipeNameSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    // window.location.href = "http://localhost:5173/search?searchItem=" + event.target.value;
  };

  const handleIngredientsSubmit = (event) => {
    console.log(event);
  };

  const handleCookingTimeSubmit = (event) => {
    console.log(event);
  };

  const handleRecipeNameChange = (event) => {
    setRecArray([]);
    if (event.target.value.length === 0) {
      return;
    }

    var filteredList = SearchFormFilter(props.activeForm, event.target.value);

    for (let i = 0; i < filteredList.length; i++) {
      setRecArray((recArray) => [...recArray, filteredList[i]]);
    }
  };

  function searchFormsSwitch() {
    switch (props.activeForm) {
      case "Recipe Name":
        return (
          <form action="/search">
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

  // list item attribute name is different depending on category
  return (
    <div className="search-forms">
      {searchFormsSwitch()}
      {recArray.length != 0 ? (
        <div className="search-form-list-container">
          <div className="search-form-list">
            {recArray.map((item) => {
              return (
                <p key={item.recipeName} onClick={handleRecipeNameSubmit}>
                  {item.recipeName}
                </p>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
