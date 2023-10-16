import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Profile from "../pages/Profile/Profile";
import MyBookings from "../pages/mybookings/MyBookings";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:() => fetch('/services.json'),
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: "/service/:id",
                element: <Home></Home>,
            },
            {
                path: "/myBookings",
                element: <MyBookings></MyBookings>,
            },
            {
                path: "/profile",
                element: <Profile></Profile>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
]);

export default router;