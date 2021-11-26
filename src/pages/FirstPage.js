import React from 'react';
import '../assets/css/FirstPage.css'
import {HOME_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import {Image} from "react-bootstrap";
import eats from "../assets/Картинка с едой.svg";

const FirstPage = () => {
    const history = useHistory()
    return (
        <main>
            <div className="block">
                <div>
                    <h3 className="textVer2">Разнообразные рецепты блюд, десертов и напитков.</h3>
                </div>
                <div>
                    <h3 className="textVer1">Смотри рецепт, готовь, ешь, всё просто!</h3>
                </div>
                <div>
                    <a className="firstButton" onClick={() => history.push(HOME_ROUTE)}>Посмотреть рецепты</a>
                </div>
            </div>
            <div>
                <Image className="imgEat" src={eats}/>
            </div>
        </main>
    );
};

export default FirstPage;