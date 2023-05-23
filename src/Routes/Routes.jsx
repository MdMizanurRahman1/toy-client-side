import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../User/Login";
import Register from "../User/Register";
import Blog from "../Pages/Blog";
import AllToys from "../Pages/AllToys";
import ToyDetails from "../Pages/ToyDetails";
import ToyPage from "../Pages/ToyPage";
import MyToys from "../Pages/MyToys";
import UpdateToy from "../Pages/UpdateToy";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/alltoys',
                element: <PrivateRoute><AllToys></AllToys></PrivateRoute>,
                loader: () => fetch('https://toy-server-site-theta.vercel.app/toys')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/toyDetails/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-server-site-theta.vercel.app/toys/${params.id}`)
            },
            {
                path: '/toyPage',
                element: <PrivateRoute><ToyPage></ToyPage></PrivateRoute>
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/myToys/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`https://toy-server-site-theta.vercel.app/toys/${params.id}`)
            },
        ]
    }
]);

export default router;