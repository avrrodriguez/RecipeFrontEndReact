import { useState, useEffect } from "react";
import { SearchFormFilter } from "../../helpers/SearchFormFilter";

export function SearchFormRecs(props) {
  const [recArray, setRecArray] = useState([]);

  const handleSearchSuggestionClick = (event) => {
    event.preventDefault();
    console.log("click");
    // window.location.href = "http://localhost:5173/search?searchItem=" + event.target.value;
  };

  function handleSearchInputChange() {
    console.log("change", recArray, props.category, props.searchInput);
    setRecArray([]);
    if (props.searchInput.length === 0) {
      return;
    }

    var filteredList = SearchFormFilter(props.category, props.searchInput);

    for (let i = 0; i < filteredList.length; i++) {
      setRecArray((recArray) => [...recArray, filteredList[i]]);
    }
  }
  
  useEffect(() => {handleSearchInputChange()} , [props.searchInput])

  return (
    <div className="search-form-list-container">
      {props.searchInput.length != 0 && document.getElementsByName("searchFormValue")[0]?.value.length > 0 ? (
        <div className="search-form-list">
          {recArray.map((item) => {
            return (
              <p key={item} onClick={(event)=>handleSearchSuggestionClick(event)}>
                {item}
              </p>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
