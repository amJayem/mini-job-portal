import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";


export const route = createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
        children: [{
            path: '/',
            element: <Home/>
        }]
    }
])