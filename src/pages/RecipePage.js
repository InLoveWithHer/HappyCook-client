import React, {useEffect, useState} from 'react';
import time from "../assets/Время.png";
import star from "../assets/звезда.svg";
import {useHistory, useLocation, useParams} from 'react-router-dom'
import {addOne, createUnderType, deleteRecipe, fetchOneRecipe} from "../http/recipeAPI";
import jwt_decode from "jwt-decode";
import {HOME_ROUTE} from "../utils/consts";

const RecipePage = () => {
    let jwt = localStorage['token']
    let decode = jwt_decode(jwt)
    let role = decode['role']
    let userId = decode['id']
    console.log(userId)
    const [recipe, setRecipe] = useState({step: [], ingredient:[], type:[], under_type:[]})
    const {id} = useParams()
    const history = useHistory()
    console.log(id)

    useEffect(() => {
        fetchOneRecipe(id).then(data => setRecipe(data))
    }, [])

    const delRecipe = () => {
        deleteRecipe(id).then(data => null)
        history.push(HOME_ROUTE)
        window.location.reload()
    }

    const addOneRecipe = () => {
        const formData = new FormData()
        formData.append('bookId', userId)
        formData.append('recipeId', id)
        addOne(id,userId).then(data => alert('Рецепт успешно добавлен в вашу книгу рецептов'))
    }



    return (
        <div className="globalRecipe">
            <div className="infoRecipe">
                <div className="recipeImg">
                    <img className="recipeImgCard2" src={process.env.REACT_APP_API_URL + recipe.img} alt="img"/>
                </div>
                <div className="recipeZag">
                    <h3 className="recipeNameList">{recipe.name}</h3>
                    <h3 className="recipeNameList1">Тип: {recipe.type.name}</h3>
                    <h3 className="recipeNameList1">Подтип: {recipe.under_type.name}</h3>
                    <div className="timeRate">
                        <div className="time">
                            <img className="timeImg" src={time} alt="*"/>
                            <h3 className="timeRateText">{recipe.cooking_time}</h3>
                        </div>
                        <div className="rate">
                            <h3 className="timeRateText otstup">{recipe.rating}</h3>
                            <img className="timeImg" src={star} alt="*"/>
                        </div>
                    </div>
                    <a className="addRecipeBookButton" onClick={() => addOneRecipe()}>В книгу рецептов</a>
                </div>
                <div className="description2">
                    <h3 className="descriptionText">{recipe.description}</h3>
                </div>
            </div>
            <div className="ingredients">
                <h3 className="recipeNameList">Ингредиенты:</h3>
                {recipe.ingredient.map(ingredient =>
                    <h3 className="timeRateText" key={ingredient.id}>
                        {ingredient.name} - {ingredient.description}
                    </h3>
                )}
            </div>
            <div className="steps">
                <h3 className="instructionText">Инструкция приготовления:</h3>
                {recipe.step.map(step =>
                    <h3 className="timeRateText" key={step.id}>
                        {step.step_number}. {step.depiction}
                    </h3>
                )}
                {role === 'ADMIN' ?
                    <a className="authButton2" onClick={() => delRecipe()}>Удалить рецепт</a>
                    :
                    <p> </p>
                }
            </div>
        </div>
    );
};

export default RecipePage;