export function SearchFormRecs(props) {
  const handleSearchSuggestionClick = (event) => {
    event.preventDefault();
    console.log("click");
    // window.location.href = "http://localhost:5173/search?searchItem=" + event.target.value;
  };

  return (
    <div className="search-form-list-container">
      {props.recommendations.length != 0 && document.getElementsByName("searchFormValue")[0]?.value.length > 0 ? (
        <div className="search-form-list">
          {recArray.map((item) => {
            return (
              <p key={item} onClick={handleSearchSuggestionClick}>
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
