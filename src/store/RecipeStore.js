import {makeAutoObservable} from "mobx";

export default class RecipeStore {
    constructor() {
        this._types = []
        this._underTypes = []
        this._recipes = []
        this._steps = []
        this._ingredients = []
        this.__selectedType = {}
        this.__selectedUnderType = {}
        this.__selectedStep = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setUnderTypes(underTypes) {
        this._underTypes = underTypes
    }

    setRecipes(recipes) {
        this._recipes = recipes
    }

    setSteps(steps) {
        this._steps = steps
    }

    setIngredients(ingredients) {
        this._ingredients = ingredients
    }

    setSelectedType(type) {
        this.__selectedType = type
    }

    setSelectedStep(step) {
        this.__selectedStep = step
    }

    setSelectedUnderType(underType) {
        this.__selectedUnderType = underType
    }

    get types() {
        return this._types
    }

    get underTypes() {
        return this._underTypes
    }

    get recipes() {
        return this._recipes
    }

    get steps() {
        return this._steps
    }

    get ingredients() {
        return this._ingredients
    }

    get selectedType() {
        return this.__selectedType
    }

    get selectedUnderType() {
        return this.__selectedUnderType
    }

    get selectedStep() {
        return this.__selectedStep
    }
}