import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import MyProfile from "../Pages/MyProfile/MyProfile";




export const router = createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        errorElement:<h1>Error</h1>,
        children:[
            {    
                index:true,
                path:'/',
                Component:Home
            },
            {
                path:'/my-profile',
                Component:MyProfile
            }
        ]
    }
])