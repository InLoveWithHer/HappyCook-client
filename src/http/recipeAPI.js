import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const deleteType = async (id) => {
    const {data} = await $authHost.delete('api/type/' + id)
}

export const createUnderType = async (under_type) => {
    const {data} = await $authHost.post('api/under-type', under_type)
    return data
}

export const fetchUnderTypes = async () => {
    const {data} = await $host.get('api/under-type')
    return data
}

export const deleteUnderType = async (id) => {
    const {data} = await $authHost.delete('api/under-type/' + id)
}

export const createRecipe = async (recipe) => {
    const {data} = await $authHost.post('api/recipe', recipe)
    return data
}

export const fetchRecipe = async () => {
    const {data} = await $host.get('api/recipe')
    return data
}

export const fetchOneRecipe = async (id) => {
    const {data} = await $host.get('api/recipe/' + id)
    return data
}

export const deleteRecipe = async (id) => {
    const {data} = await $authHost.delete('api/recipe/' + id)
}

export const addOne = async (recipeId, bookId) => {
    const {data} = await $host.post('api/book-recipe/' + recipeId, {bookId})
    return data
}

