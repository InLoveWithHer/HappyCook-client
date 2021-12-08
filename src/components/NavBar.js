import React, {useContext} from 'react';
import {Context} from "../index";
import {useHistory} from "react-router-dom";
import {
    ADMIN_ROUTE,
    CREATE_RECIPE_ROUTE,
    FIRST_PAGE_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    RECIPE_BOOK_ROUTE
} from "../utils/consts";
import {observer} from "mobx-react-lite";
import logo from "../assets/logo.svg";
import "../assets/css/NavBar.css"
import jwt_decode from "jwt-decode";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({user})
        user.setIsAuth(false)
        history.push(LOGIN_ROUTE)
    }

    const global = () => {
        history.push(HOME_ROUTE)
        window.location.reload()
    }

    let jwt = localStorage['token'];
    let decode = jwt_decode(jwt);
    let role = decode['role']

    return (
        <div className="nav">
            <div className="nav2">
                <img src={logo} className="imgLogo" onClick={() => history.push(FIRST_PAGE_ROUTE)} alt="ss"/>
                <div className="textDivLogo">
                    <h1 className="textLogo" onClick={() => history.push(FIRST_PAGE_ROUTE)}>HAPPY<br/>COOK</h1>
                </div>
                <a className="textA" onClick={() => global()}>Главная</a>
                {user.isAuth ?
                    <div className="navButton">
                        {role === 'ADMIN' ?
                            <a onClick={() => history.push(ADMIN_ROUTE)} className="floating-button">Админ панель</a>
                            :
                            <p> </p>
                        }
                        <a onClick={() => history.push(CREATE_RECIPE_ROUTE)} className="floating-button">Создать
                            рецепт</a>
                        <a className="floating-button" onClick={() => history.push(RECIPE_BOOK_ROUTE)}>Книга
                            рецептов</a>
                        <a className="floating-button" onClick={() => logOut()}>Выйти</a>
                    </div>
                    :
                    <div className="nav2Button">
                        <a className="floating-button otstup2" onClick={() => history.push(LOGIN_ROUTE)}>Войти</a>
                    </div>
                }
            </div>
        </div>
    );
});

export default NavBar;