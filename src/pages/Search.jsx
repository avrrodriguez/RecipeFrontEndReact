import "./Search.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SearchForms } from "../components/SearchForm/SearchForms";
import { SearchedItems } from "../components/SearchedItems";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFormCategory, setSearchFormCategory] = useState(searchParams.get("searchFormCategory") ? searchParams.get("searchFormCategory") : "Recipe Name");
  const [searchFormValue, setSearchFormValue] = useState(searchParams.get("searchFormValue") ? searchParams.get("searchFormValue") : "");

  function handleChangeCatSelect(event) {
    event.preventDefault();
    setSearchFormCategory(event.target.value);
    setSearchParams("");
  }

  function setSearchFormSelectDefault() {
    var selectElement = document.getElementsByName("categories");
    var searchFormCategoryNumber;

    if (searchFormCategory == "Recipe Name") {
      searchFormCategoryNumber = 0;
    } else if (searchFormCategory == "Ingredients") {
      searchFormCategoryNumber = 1;
    } else {
      searchFormCategoryNumber = 2;
    }

    selectElement[0].options[searchFormCategoryNumber].selected = true;
    selectElement[0].options[searchFormCategoryNumber].defaultSelected = true;
  }

  useEffect(setSearchFormSelectDefault, []);

  return (
    <div className="search-container">
      <div className="search-form-container">
        <SearchForms activeForm={searchFormCategory} searchValue={searchFormValue}/>
        <div className="search-page-categories">
          <select
            name="categories"
            id="category-select"
            onChange={(event) => handleChangeCatSelect(event)}
          >
            <option value="Recipe Name">Search Recipe Name</option>
            <option value="Ingredients">Search Ingredient</option>
            <option value="Cooking Style">Search Cooking Style</option>
          </select>
        </div>
      </div>
      <SearchedItems searchedValue = {searchFormValue} searchItemsCategory = {searchFormCategory} />
    </div>
  );
}
