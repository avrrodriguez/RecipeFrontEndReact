import { useState, useEffect } from "react";
import { SearchFormFilter } from "../../helpers/SearchFormFilter";

export function SearchFormRecs(props) {
  const [recArray, setRecArray] = useState([]);

  const handleSearchSuggestionClick = (event) => {
    event.preventDefault();
    const searchFormInput = document.getElementsByName("searchFormValue")[0];
    setRecArray([]);
    searchFormInput.value = event.target.innerHTML;
    document.getElementById("searchForm").submit();
  };

  function handleSearchInputChange() {
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
