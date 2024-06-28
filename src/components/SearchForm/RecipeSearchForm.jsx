import { SearchFormRecs } from "./SearchFormRecs";
import { useState, useEffect } from "react";

export function RecipeSearchForm(props) {
  const [formInput, setFormInput] = useState("");

  function SetDefaultFormInput() {
    if (props.searchValue) {
      document.getElementsByName("searchFormValue")[0].value = props.searchValue;
    }
  }

  useEffect(()=>{SetDefaultFormInput()}, []);

  return(
    <div className="recipe-search-form">
      <form action="/search">
        <input
          name="searchFormValue"
          placeholder="Recipe Name Search"
          onChange={(event) => setFormInput(event.target.value)}
        />
        <input type="hidden" name="searchFormCategory" value="Recipe Name" />
      </form>
      <SearchFormRecs category="Recipe Name" searchInput={formInput} />
    </div>
  );
}