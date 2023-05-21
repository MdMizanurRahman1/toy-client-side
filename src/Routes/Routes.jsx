import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../User/Login";
import Register from "../User/Register";
import Blog from "../Pages/Blog";
import AllToys from "../Pages/AllToys";
import ToyDetails from "../Pages/ToyDetails";


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
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/toys')
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
                element: <ToyDetails></ToyDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            }
        ],
    },
]);

export default router;