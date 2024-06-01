import "./Search.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFormCategory, setSearchFormCategory] = useState(searchParams.get("searchFormCategory"));
  const [searchFormValue, setSearchFormValue] = useState(searchParams.get("searchFormValue"));

  console.log(searchFormCategory, searchFormValue);

  function setSearchFormSelectDefault() {
    var selectElement = document.getElementsByName("categories");
    console.log("Select Element", selectElement[0].options[1]);
    selectElement[0].options[1].selected = true;
    selectElement[0].options[1].defaultSelected = true;
  }

  function searchFormsSwitch() {
    switch (searchFormCategory) {
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
      case "Ingredient":
        return (
          <form>
            <input name="ingredientsInput" placeholder="Ingredients Search" />
          </form>
        );
      case "Cooking Time":
        return (
          <form>
            <input name="cookingTimeInput" placeholder="Cooking Time Search" />
          </form>
        );
    }
  }

  useEffect(setSearchFormSelectDefault, []);

  return (
    <div>
      <div className="search-form-container">
        <div className="search-page-form">{searchFormsSwitch()}</div>
        <div className="search-page-categories">
          <select
            name="categories"
            id="category-select"
            onChange={(event) => setSearchFormCategory(event.target.value)}
          >
            <option value="Recipe Name">Recipe Name</option>
            <option value="Ingredient">Ingredient</option>
            <option value="Cooking Time">Cooking Time</option>
          </select>
        </div>
      </div>
      <div className="search-results-list"></div>
    </div>
  );
}
