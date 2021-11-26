import {
    ADMIN_ROUTE,
    CREATE_RECIPE_ROUTE, FIRST_PAGE_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    RECIPE_BOOK_ROUTE, RECIPE_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import RecipeBook from "./pages/RecipeBook";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import RecipePage from "./pages/RecipePage";
import CreateRecipe from "./pages/CreateRecipe";
import FirstPage from "./pages/FirstPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: RECIPE_BOOK_ROUTE,
        Component: RecipeBook
    },
    {
        path: CREATE_RECIPE_ROUTE,
        Component: CreateRecipe
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: RECIPE_ROUTE + '/:id',
        Component: RecipePage
    },
    {
        path: FIRST_PAGE_ROUTE,
        Component: FirstPage
    }
]