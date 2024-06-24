import { SearchFormRecs } from "./SearchFormRecs";
import { useState } from "react";

export function RecipeSearchForm(props) {
  const [formInput, setFormInput] = useState("");

  return(
    <div className="recipe-search-form">
      <form action="/search">
        <input
          name="searchFormValue"
          placeholder="Recipe Name Search"
          onChange={(event) => setFormInput(formInput => [...formInput, event.target.value] )}
          value={props.searchValue ? props.searchValue : ""}
        />
        <input type="hidden" name="searchFormCategory" value="Recipe Name" />
      </form>
      <SearchFormRecs category="Recipe Name" searchInput={formInput} />
    </div>
  );
}
