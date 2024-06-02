import "./Search.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFormCategory, setSearchFormCategory] = useState(searchParams.get("searchFormCategory"));
  const [searchFormValue, setSearchFormValue] = useState(searchParams.get("searchFormValue"));

  function setSearchFormSelectDefault() {
    var selectElement = document.getElementsByName("categories");
    var searchFormCategoryNumber;

    if (searchFormCategory == "Recipe Name") {
      searchFormCategoryNumber = 0;
    } else if (searchFormCategory == "Ingredients") {
      searchFormCategoryNumber = 1;
    } else {
      searchFormCategoryNumber = 2;
    }

    selectElement[0].options[searchFormCategoryNumber].selected = true;
    selectElement[0].options[searchFormCategoryNumber].defaultSelected = true;

    var inputElement = document.getElementsByName("");
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
              value={searchFormCategory === "Recipe Name" ? searchFormValue : ""}
            />
          </form>
        );
      case "Ingredients":
        return (
          <form>
            <input
              name="ingredientsInput"
              placeholder="Ingredients Search"
              value={searchFormCategory === "Ingredients" ? searchFormValue : ""}
            />
          </form>
        );
      case "Cooking Time":
        return (
          <form>
            <input
              name="cookingTimeInput"
              placeholder="Cooking Time Search"
              value={searchFormCategory === "Cooking Time" ? searchFormValue : ""}
            />
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
            <option value="Recipe Name">Search Recipe Name</option>
            <option value="Ingredients">Search Ingredient</option>
            <option value="Cooking Time">Search Cooking Time</option>
          </select>
        </div>
      </div>
      <div className="search-results-list"></div>
    </div>
  );
}
