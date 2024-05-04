import "./Home.css";
import { SearchForms } from "../components/SearchForms";
import { useEffect, useState } from "react";

export function Home() {
    const [activeCategory, setActiveCategory] = useState("Recipe Name");

    function setCategoryActivities(event) {
        setActiveCategory(event.target.innerHTML);
        
        var searchFormDiv = document.getElementsByClassName("search-form-categories")[0].children;
        
        for (let i = 0; i < searchFormDiv.length; i++) {
            searchFormDiv[i].className = searchFormDiv[i].innerHTML === event.target.innerHTML ? "active-category" : "inactive-category"
;        }
    }


    function FormCategoriesEventListener() {
        var searchFormCategoriesDiv = document.getElementsByClassName("search-form-categories")[0].children;
        
        for (let i = 0; i < searchFormCategoriesDiv.length; i++) {
            searchFormCategoriesDiv[i].addEventListener("click", setCategoryActivities);
        }
    }

    useEffect(FormCategoriesEventListener, []);
    return (
        <div className="home-page">
            <div className="form-container">
                <div className="search-form-categories">
                    <div className="active-category">Recipe Name</div>
                    <div className="inactive-category">Ingredients</div>
                    <div className="inactive-category">Cooking Time</div>
                </div>
                <div className="search-forms">
                    <SearchForms activeForm={activeCategory}/>
                </div>
            </div>
        </div>
    )
}