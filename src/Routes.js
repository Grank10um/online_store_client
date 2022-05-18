import {
    ADMIN_ROUTE, AMOUNT_ROUTE,
    APARTMENT_ROUTE, CUSTOMER_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE, STORE_ROUTE,
    TRADES_ROUTE
} from "./utils/consts"
import Auth from './pages/Auth';
import Apartment from "./pages/Apartment";
import Shop from "./pages/Shop";
import Trades from "./pages/Trades";
import ApartmentPage from "./pages/ApartmentPage";
import Admin from "./pages/Admin";
import Valuation from "./pages/Valuation";
import Store from "./pages/Store";
import Customers from "./pages/Customers";

export const authRoutes = [  //страницы, к которым только авторизованный пользователь имеет доступ
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }

]

export const publicRoutes = [
    {
        path: APARTMENT_ROUTE,
        Component: Apartment
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
        path: SHOP_ROUTE,
        Component: Shop

    },
    {
        path: AMOUNT_ROUTE,
        Component: Valuation

    },
    {
        path: STORE_ROUTE,
        Component: Store

    },
    {
        path: TRADES_ROUTE,
        Component: Trades

    },
    {
        path: CUSTOMER_ROUTE,
        Component: Customers

    },
    {
        path: APARTMENT_ROUTE + '/:id',
        Component: ApartmentPage
    }

]