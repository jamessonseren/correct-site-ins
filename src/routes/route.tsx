import { createBrowserRouter } from "react-router-dom"
import App from "../App"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <></>
            },
            {
                path: '/voce',
                element: <></>
            },
            {
                path: '/empresa',
                element: <></>
            },
            {
                path: '/comercio',
                element: <></>
            },
            {
                path: '/correct_club',
                element: <></>
            },
            {
                path: '/correct_shop',
                element: <></>
            },
            {
                path: '/rede_de_compras',
                element: <></>

            },
            {
                path: '/contato',
                element: <></>
            },
        ]
    }
]);