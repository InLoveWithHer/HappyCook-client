import React, {useContext, useEffect} from 'react';
import TypeBar from "../components/TypeBar";
import RecipeList from "../components/RecipeList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchRecipe, fetchTypes, fetchUnderTypes} from "../http/recipeAPI";

const Home = observer(() => {
    const {recipe} = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => recipe.setTypes(data))
        fetchUnderTypes().then(data => recipe.setUnderTypes(data))
        fetchRecipe().then(data => recipe.setRecipes(data.rows))
    }, [])

    return (
        <main>
            <div>
                <TypeBar/>
            </div>
            <div>
                <RecipeList/>
            </div>
        </main>
    );
});

export default Home;