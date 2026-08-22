import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../component/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

export const router = createBrowserRouter([ 
    { 
        path: "/",
        element: <RootLayout />,
        children: [ 
            {
                index: true,
                element: <Home />,
            }
        ]
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [ 
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    }
])