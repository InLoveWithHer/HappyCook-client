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
        this._page = 1
        this._totalCount = 0
        this._limit = 3
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

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    setIngredients(ingredients) {
        this._ingredients = ingredients
    }

    setSelectedType(type) {
        this.setPage(1)
        this.__selectedType = type
    }

    setSelectedStep(step) {
        this.__selectedStep = step
    }

    setSelectedUnderType(underType) {
        this.setPage(1)
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

    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
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