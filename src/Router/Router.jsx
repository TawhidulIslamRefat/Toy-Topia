import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";




export const router = createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        errorElement:<h1>Error</h1>
    }
])