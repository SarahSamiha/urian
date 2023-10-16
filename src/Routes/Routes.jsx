import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ContactUs from "../pages/ContactUs/ContactUs";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";
import PrivateRoutes from "./PrivateRoutes";


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
                element: <PrivateRoutes><ServiceDetail></ServiceDetail></PrivateRoutes>,
                loader:() => fetch('/services.json'),
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>,
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