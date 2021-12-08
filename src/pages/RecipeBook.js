import React, {useContext, useEffect} from 'react';
import BookRecipeList from "../components/RecipeList";
import {observer} from "mobx-react-lite";
import {fetchRecipe, fetchTypes, fetchUnderTypes} from "../http/recipeAPI";
import {Context} from "../index";

const RecipeBook = observer(() => {
    const {recipe} = useContext(Context)
    useEffect(() => {
        fetchRecipe().then(data => recipe.setRecipes(data.rows))
    }, [])

    return (
        <div>
            <BookRecipeList/>
        </div>
    );
});

export default RecipeBook;