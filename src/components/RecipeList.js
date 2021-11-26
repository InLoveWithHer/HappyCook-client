import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import RecipeItem from "./RecipeItem";

const RecipeList = observer(() => {
    const {recipe} = useContext(Context)
    return (
        <div className="cont">
            {recipe.recipes.map(recipe =>
                <RecipeItem key={recipe.id} recipe={recipe}/>
            )}
        </div>
    );
});

export default RecipeList;