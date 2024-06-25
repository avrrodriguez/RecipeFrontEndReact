import { SearchFormRecs } from "./SearchFormRecs";
import { useState } from "react";

export function CookingStyleSearchForm(props) {
  const [formInput, setFormInput] = useState("");

  return (
    <div className="cooking-style-search-form">
      <form action="/search">
        <input
          name="searchFormValue"
          placeholder="Cooking Style Search"
          onChange={(event) => setFormInput(formInput => [...formInput, event.target.value] )}
          value={props.searchValue ? props.searchValue : ""}
        />
        <input type="hidden" name="searchFormCategory" value="Cooking Style" />
      </form>
      <SearchFormRecs category="Cooking Style" searchInput={formInput} />
    </div>
  );
}
