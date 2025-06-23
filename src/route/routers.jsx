import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Product from "../pages/product";

const Routers=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"product",
                element:<Product/>
            }
        ]
    }
])


export default Routers