import { SearchFormRecs } from "./SearchFormRecs";
import { useState } from "react";

export function RecipeSearchForm() {
  const [formInput, setFormInput] = useState("")

  return(
    <div class="recipe-search-form">
      <form action="/search">
        <input
          name="searchFormValue"
          placeholder="Recipe Name Search"
          onChange={(event) => setFormInput(formInput => [...formInput, event.target.value] )}
        />
        <input type="hidden" name="searchFormCategory" value="Recipe Name" />
      </form>
      {SearchFormRecs(category="Recipe Name", searchInput=formInput)}
    </div>
  );
}
