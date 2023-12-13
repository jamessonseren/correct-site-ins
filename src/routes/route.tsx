import { createBrowserRouter } from "react-router-dom"
import App from "../App"

import Home from "../pages/Home"
import For_you from "../pages/For_you";
import Company from "../pages/Company";
import Commerce from "../pages/Commerce";
import Club from "../pages/Club";
import Shop from "../pages/Shop";
import Shopping_network from "../pages/Shopping_network";
import Contact from "../pages/Contact";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/voce',
                element: <For_you/>
            },
            {
                path: '/empresa',
                element: <Company/>
            },
            {
                path: '/comercio',
                element: <Commerce/>
            },
            {
                path: '/correct_club',
                element: <Club/>
            },
            {
                path: '/correct_shop',
                element: <Shop/>
            },
            {
                path: '/rede_de_compras',
                element: <Shopping_network/>
            },
            {
                path: '/contato',
                element: <Contact/>
            },
        ]
    }
]);