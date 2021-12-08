import React, {useContext, useEffect} from 'react';
import TypeBar from "../components/TypeBar";
import RecipeList from "../components/RecipeList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchRecipe, fetchTypes, fetchUnderTypes} from "../http/recipeAPI";
import Pages from "../components/Pages";

const Home = observer(() => {
    const {recipe} = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => recipe.setTypes(data))
        fetchUnderTypes().then(data => recipe.setUnderTypes(data))
        fetchRecipe(null, null, 1, 2).then(data => {
            recipe.setRecipes(data.rows)
            recipe.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchRecipe(recipe.selectedType.id, recipe.selectedUnderType.id, recipe.page, 2).then(data => {
            recipe.setRecipes(data.rows)
            recipe.setTotalCount(data.count)
        })
    }, [recipe.page, recipe.selectedType, recipe.selectedUnderType,])

    return (
        <main className="d-flex">
            <div>
                <TypeBar/>
            </div>
            <div>
                <RecipeList/>
                <Pages/>
            </div>
        </main>
    );
});

export default Home;