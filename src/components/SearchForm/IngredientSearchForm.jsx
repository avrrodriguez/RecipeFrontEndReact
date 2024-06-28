import { SearchFormRecs } from "./SearchFormRecs";
import { useState, useEffect } from "react";

export function IngredientSearchForm(props) {
  const [formInput, setFormInput] = useState("");

  function SetDefaultFormInput() {
    if (props.searchValue) {
      document.getElementsByName("searchFormValue")[0].value = props.searchValue;
    }
  }

  useEffect(()=>{SetDefaultFormInput()}, []);

  return (
    <div className="ingredients-search-form">
      <form action="/search ">
        <input
          name="searchFormValue"
          placeholder="Ingredients Search"
          onChange={(event) => setFormInput(event.target.value)}
        />
        <input type="hidden" name="searchFormCategory" value="Ingredients" />
      </form>
      <SearchFormRecs category="Ingredients" searchInput={formInput} />
    </div>
  );
}
