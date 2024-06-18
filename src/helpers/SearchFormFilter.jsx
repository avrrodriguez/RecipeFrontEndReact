import { recipeSearchFormSampleList } from "../../public/SearchFormSampleLists/RecipeSearchFormSampleList";
import { cookingTimeFormSampleList } from "../../public/SearchFormSampleLists/CookingTimeFormSampleList";
import { ingredientsSampleList } from "../../public/SearchFormSampleLists/IngredientsSampleList";

export function SearchFormFilter(category, searchInput) {
  var filteredList;

  switch (category) {
    case "Recipe Name":
      filteredList = recipeSearchFormSampleList
        .filter((sample) => sample.recipeName.includes(searchInput))
        .map((sample) => sample.recipeName);
      break;
    case "Ingredients":
      filteredList = ingredientsSampleList
        .filter((sample) => sample.ingredientName.includes(searchInput))
        .map((sample) => sample.ingredientName);
      break;
    case "Cooking Time":
      filteredList = cookingTimeFormSampleList
        .filter((sample) => sample.cookingStyleName.includes(searchInput))
        .map((sample) => sample.cookingStyleName);
      break;
  }

  return filteredList;
}
