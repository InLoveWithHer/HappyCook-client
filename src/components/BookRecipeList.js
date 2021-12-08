import React, {useContext} from 'react';
import {Context} from "../index";
import RecipeItem from "./RecipeItem";
import {observer} from "mobx-react-lite";

const BookRecipeList = observer(() => {
    const {recipe} = useContext(Context)

    return (
        <div className="cont">
            {recipe.recipes.map(recipe =>
                <RecipeItem key={recipe.id} recipe={recipe}/>
            )}
        </div>
    );
});

export default BookRecipeList;