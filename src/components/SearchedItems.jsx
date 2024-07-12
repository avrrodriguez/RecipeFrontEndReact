import { SearchFormFilter } from "../helpers/SearchFormFilter";

export function SearchedItems(props) {
    
    let { searchedValue, searchItemsCategory } = props; 
    

    function searchItemsListDisplay() {
        let searchedList = SearchFormFilter(searchItemsCategory, searchedValue);
        console.log(searchedList);

        switch (searchItemsCategory) {
            case "Recipe Name":
                return (
                    <div>
                        {searchedList.map((listItem) => {
                            return (
                                <div key={listItem.name} className={listItem.name}>
                                    <h3>Recipe Name: {listItem.name}</h3>
                                    <p>Cooking Time: {listItem.cookingTime}</p>
                                    <p>Cooking Steps: {listItem.steps}</p>
                                </div> 
                            )
                        })}
                    </div>
                )
            case "Ingredients":
                return (
                    <div>
                        {searchedList.map((listItem) => {
                            return (
                                <div key={listItem.name} className={listItem.name}>
                                    <h3>Ingredient Name: {listItem.name}</h3>
                                    <p>Acquired Date: {listItem.acquiredDate}</p>
                                    <p>Expiration Date: {listItem.expirationDate}</p>
                                    <p>Amount (tablespoons): {listItem.volumeTablespoons}</p>
                                    <p>Weight (Ounce): {listItem.weightOunce}</p>
                                </div> 
                            )
                        })}
                    </div>
                )
            case "Cooking Style":
                return (
                    <div>
                        {searchedList.map((listItem) => {
                            return (
                                <div key={listItem.name} className={listItem.name}>
                                    <h3>Cooking Style Name: {listItem.name}</h3>
                                    <p>Cooking Style Description: {listItem.description}</p>
                                </div> 
                            )
                        })}
                    </div>
                )
          }
    }
    
    //useEffect(searchItemsListDisplay, [searchedValue]);

    return (
        <div className="searched-items-display">
            {searchItemsListDisplay()}
        </div>
    )
}