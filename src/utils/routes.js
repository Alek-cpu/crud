import {MainPage} from "../pages/MainPage/MainPage";
import FavouritePage from "../pages/FavoritePage/FavouritePage";
import NotFound from "../pages/NotFound/NotFound";

export const routes = [
    {
        id: 1,
        path: '/',
        component: MainPage,
        exact: true,
    },
    {
        id: 2,
        path: '/favourite-task',
        component: FavouritePage,
    },
    {
        id: 4,
        path: '*',
        component: NotFound,
    },

]
