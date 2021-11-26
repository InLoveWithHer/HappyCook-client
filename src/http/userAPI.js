import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, login, password) => {
    const {data} = await $host.post('api/user/registration', {email, login, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const logins = async (login, password) => {
    const {data} = await $host.post('api/user/login', {login, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const deleteUser = async (login) => {
    const {data} = await $authHost.delete('api/user', login)
}