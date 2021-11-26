import React from 'react';
import {useHistory} from "react-router-dom";
import {RECIPE_ROUTE} from "../utils/consts";
import time from "../assets/Время.png"
import star from "../assets/звезда.svg"

const RecipeItem = ({recipe}) => {
    const history = useHistory()

    return (
        <div className="recipeList">
            <div className="recipeImgList">
                <img className="recipeImgCard" src={process.env.REACT_APP_API_URL + recipe.img}
                     onClick={() => history.push(RECIPE_ROUTE + '/' + recipe.id)} alt="recipe"/>
            </div>
            <div className="recipeZag">
                <h3 className="recipeNameList" style={{cursor: 'pointer'}}
                    onClick={() => history.push(RECIPE_ROUTE + '/' + recipe.id)}>{recipe.name}</h3>
                <div className="timeRate">
                    <div className="time">
                        <img className="timeImg" src={time} alt="*"/>
                        <h3 className="recipeNameList">{recipe.cooking_time}</h3>
                    </div>
                    <div className="rate">
                        <h3 className="recipeNameList otstup">{recipe.rating}</h3>
                        <img className="timeImg" src={star} alt="*"/>
                    </div>
                </div>
            </div>
            <div className="description">
                <h3 className="descriptionText">{recipe.description}</h3>
            </div>
        </div>
    );
};

export default RecipeItem;
