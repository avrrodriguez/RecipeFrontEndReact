import { useState } from "react"

export function SearchForms(props) {

    function searchFormsSwitch() {
        switch (props.activeForm) {
            case "Recipe Name":
                return(
                    <form>
                        <input placeholder="Recipe Name Search"/>
                    </form>
                )
            case "Ingredients":
                return(
                    <form>
                        <input placeholder="Ingredients Search"/>
                    </form>
                )
            case "Cooking Time":
                return(
                    <form>
                        <input placeholder="Cooking Time Search"/>
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