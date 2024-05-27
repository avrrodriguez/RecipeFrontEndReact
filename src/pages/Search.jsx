import "./Search.css";
import { PageHeading } from "../components/PageHeading";
import { useSearchParams } from "react-router-dom";

export function Search(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("recipeNameInput"));

  function searchFormsSwitch() {
    switch ("Recipe Name") {
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

  return (
    <div>
      <div className="search-form-container">
        <div className="search-page-form">{searchFormsSwitch()}</div>
        <div className="search-page-categories">
          <select name="categories" id="category-select" onChange={searchFormsSwitch(this.value)}>
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
