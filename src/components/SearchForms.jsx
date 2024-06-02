import "./SearchForms.css";
import { SearchFormFilter } from "./SearchFormFilter";
import { useState } from "react";

export function SearchForms(props) {
  const [recArray, setRecArray] = useState([]);
  const [formInputNotEmpty, setFormInputNotEmpty] = useState(false);

  const handleSearchSuggestionClick = (event) => {
    event.preventDefault();
    console.log("click");
    // window.location.href = "http://localhost:5173/search?searchItem=" + event.target.value;
  };

  const handleSearchInputChange = (event) => {
    setFormInputNotEmpty(true);
    setRecArray([]);
    if (event.target.value.length === 0) {
      setFormInputNotEmpty(true);
      return;
    }

    var filteredList = SearchFormFilter(props.activeForm, event.target.value);

    for (let i = 0; i < filteredList.length; i++) {
      setRecArray((recArray) => [...recArray, filteredList[i]]);
    }
  };

  function searchFormsSwitch() {
    switch (props.activeForm) {
      case "Recipe Name":
        return (
          <form action="/search">
            <input
              name="searchForm"
              placeholder="Recipe Name Search"
              onChange={(event) => handleSearchInputChange(event)}
            />
            <input type="hidden" name="searchFormCategory" value="Recipe Name" />
          </form>
        );
      case "Ingredients":
        return (
          <form action="/search ">
            <input
              name="searchForm"
              placeholder="Ingredients Search"
              onChange={(event) => handleSearchInputChange(event)}
            />
            <input type="hidden" name="searchFormCategory" value="Ingredients" />
          </form>
        );
      case "Cooking Time":
        return (
          <form action="/search">
            <input
              name="searchForm"
              placeholder="Cooking Time Search"
              onChange={(event) => handleSearchInputChange(event)}
            />
            <input type="hidden" name="searchFormCategory" value="Cooking Time" />
          </form>
        );
    }
  }

  // list item attribute name is different depending on category
  return (
    <div className="search-forms">
      {searchFormsSwitch()}
      {recArray.length != 0 && formInputNotEmpty ? (
        <div className="search-form-list-container">
          <div className="search-form-list">
            {recArray.map((item) => {
              switch (props.activeForm) {
                case "Recipe Name":
                  return (
                    <p key={item.id} onClick={handleSearchSuggestionClick}>
                      {item.recipeName}
                    </p>
                  );
                case "Ingredients":
                  return (
                    <p key={item.id} onClick={handleSearchSuggestionClick}>
                      {item.ingredientName}
                    </p>
                  );
                case "Cooking Time":
                  return (
                    <p key={item.id} onClick={handleSearchSuggestionClick}>
                      {item.cookingStyleName}
                    </p>
                  );
              }
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
