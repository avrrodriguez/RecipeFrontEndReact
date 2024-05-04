import "./Home.css"
import { SearchForms } from "../components/SearchForms"

export function Home() {
    return (
        <div className="home-page">
            <div className="form-container">
                <div className="search-form-categories">
                    <div className="active-category">Recipe Name</div>
                    <div className="inactive-category">Ingredients</div>
                    <div className="inactive-category">Cooking Time</div>
                </div>
                <div className="search-forms">
                    <SearchForms />
                </div>
            </div>
        </div>
    )
}