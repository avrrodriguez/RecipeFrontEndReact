import { recipeSearchFormSampleList } from "../../public/SearchFormSampleLists/RecipeSearchFormSampleList";

export function SearchFormFilter(category, searchInput) {
  //console.log(category, searchInput);

  var filteredList = recipeSearchFormSampleList.filter((sample) => sample.recipeName.includes(searchInput));

  return filteredList;
}
