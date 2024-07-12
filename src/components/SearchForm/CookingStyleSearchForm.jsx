import { SearchFormRecs } from "./SearchFormRecs";
import { useState, useEffect } from "react";

export function CookingStyleSearchForm(props) {
  const [formInput, setFormInput] = useState("");

  function SetDefaultFormInput() {
    if (props.searchValue) {
      document.getElementsByName("searchFormValue")[0].value = props.searchValue;
    }
  }

  useEffect(()=>{SetDefaultFormInput()}, []);

  return (
    <div className="cooking-style-search-form">
      <form id="searchForm" action="/search">
        <input
          name="searchFormValue"
          placeholder="Cooking Style Search"
          onChange={(event) => setFormInput(event.target.value)}
        />
        <input type="hidden" name="searchFormCategory" value="Cooking Style" />
      </form>
      <SearchFormRecs category="Cooking Style" searchInput={formInput} />
    </div>
  );
}
