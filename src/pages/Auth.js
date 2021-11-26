import React, {useContext, useState} from 'react';
import {useLocation, useHistory} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {logins, registration} from "../http/userAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                const data = await logins(login, password);
            } else {
                const data = await registration(email, login, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(HOME_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className="globalAuth"
             style={{height: window.innerHeight - 54}}>
            <div className="CardAuth">
                <h2 className="authText">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <div className="authForm">
                    {isLogin ?
                        <form className="inputForm">
                            <input className="inputForm" type="hidden"/>
                        </form>

                        :
                        <form>
                            <input type="email" placeholder="Введите ваш email..." value={email}
                                   onChange={e => setEmail(e.target.value)} maxLength="50"/>
                        </form>
                    }
                    <form>
                        <input type="text" placeholder="Введите ваш логин..." value={login}
                               onChange={e => setLogin(e.target.value)} maxLength="20"/>
                        <input type="password" placeholder="Введите ваш пароль..." value={password}
                               onChange={e => setPassword(e.target.value)} maxLength="20"/>
                    </form>
                </div>
                <div className="linkAndButton">
                    <div className="row2">
                        {isLogin ?
                            <div className="d-flex">
                                <p className="authText2">Нет аккаунта?</p>
                                <a className="authText3" onClick={() => history.push(REGISTRATION_ROUTE)}>Зарегистрируйтесь!</a>
                            </div>
                            :
                            <div className="d-flex">
                                <p className="authText2">Есть аккаунт?</p>
                                <a className="authText3" onClick={() => history.push(LOGIN_ROUTE)}>Войдите!</a>
                            </div>
                        }
                    </div>
                    <a className="authButton" onClick={click}>{isLogin ? 'Вход' : 'Регистрация'}</a>
                </div>
            </div>
        </div>
    );
});

export default Auth;