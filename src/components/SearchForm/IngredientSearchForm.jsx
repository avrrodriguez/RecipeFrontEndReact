import { SearchFormRecs } from "./SearchFormRecs";
import { useState } from "react";

export function IngredientSearchForm(props) {
  const [formInput, setFormInput] = useState("");

  return (
    <div className="ingredients-search-form">
      <form action="/search ">
        <input
          name="searchFormValue"
          placeholder="Ingredients Search"
          onChange={(event) => setFormInput(formInput => [...formInput, event.target.value] )}
          value={props.searchValue ? props.searchValue : ""}
        />
        <input type="hidden" name="searchFormCategory" value="Ingredients" />
      </form>
      <SearchFormRecs category="Ingredients" searchInput={formInput} />
    </div>
  );
}
