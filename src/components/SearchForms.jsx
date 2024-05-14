import { cookingTimeFormSampleList } from "../../public/SearchFormSampleLists/CookingTimeFormSampleList";
import { ingredientsSampleList } from "../../public/SearchFormSampleLists/IngredientsSampleList";
import { recipeSearchFormSampleList } from "../../public/SearchFormSampleLists/RecipeSearchFormSampleList";

export function SearchForms(props) {

    const handleRecipeNameSubmit = (event) => {
        console.log(event);
    }

    const handleIngredientsSubmit = (event) => {
        console.log(event);
    }

    const handleCookingTimeSubmit = (event) => {
        console.log(event);
    }

    function searchFormsSwitch() {
        switch (props.activeForm) {
            case "Recipe Name":
                return(
                    <form onSubmit={handleRecipeNameSubmit}>
                        <input name="recipeNameInput" placeholder="Recipe Name Search"/>
                    </form>
                )
            case "Ingredients":
                return(
                    <form onSubmit={handleIngredientsSubmit}>
                        <input name="ingredientsInput" placeholder="Ingredients Search"/>
                    </form>
                )
            case "Cooking Time":
                return(
                    <form onSubmit={handleCookingTimeSubmit}>
                        <input name="cookingTimeInput" placeholder="Cooking Time Search"/>
                    </form>
                )
        }
    }

    return (
        <div className="search-forms">
            {searchFormsSwitch()}
        </div>
    )
}