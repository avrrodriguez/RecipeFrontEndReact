import { recipeSearchFormSampleList } from "../../public/SearchFormSampleLists/RecipeSearchFormSampleList";
import { cookingTimeFormSampleList } from "../../public/SearchFormSampleLists/CookingTimeFormSampleList";
import { ingredientsSampleList } from "../../public/SearchFormSampleLists/IngredientsSampleList";

export function SearchFormFilter(category, searchInput) {
  var filteredList;

  switch (category) {
    case "Recipe Name":
      filteredList = recipeSearchFormSampleList.filter((sample) => sample.recipeName.includes(searchInput));
      break;
    case "Ingredients":
      filteredList = ingredientsSampleList.filter((sample) => sample.ingredientName.includes(searchInput));
      break;
    case "Cooking Time":
      filteredList = cookingTimeFormSampleList.filter((sample) => sample.cookingStyleName.includes(searchInput));
      break;
  }

  return filteredList;
}
