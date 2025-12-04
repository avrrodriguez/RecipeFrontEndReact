import { recipeSearchFormSampleList } from "/public/SearchFormSampleLists/RecipeSearchFormSampleList";
import { cookingStyleFormSampleList } from "/public/SearchFormSampleLists/CookingStyleFormSampleList";
import { ingredientsSampleList } from "/public/SearchFormSampleLists/IngredientsSampleList";

export function SearchFormFilter(category, searchInput) {
  var filteredList;

  switch (category) {
    case "Recipe Name":
      filteredList = recipeSearchFormSampleList.filter((sample) => sample.name.includes(searchInput));
      break;
    case "Ingredients":
      filteredList = ingredientsSampleList.filter((sample) => sample.name.includes(searchInput));
      break;
    case "Cooking Style":
      filteredList = cookingStyleFormSampleList.filter((sample) => sample.name.includes(searchInput));
      break;
  }

  return filteredList;
}
