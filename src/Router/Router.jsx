import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import MyProfile from "../Pages/MyProfile/MyProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Loading from "../Components/Loading/Loading";
import AuthLayout from "../Layout/AuthLayout";
import PrivetRoute from "../Provider/Private/PrivateRoute";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import MyOrder from "../Pages/MyOrder/MyOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/product.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/my-profile",
        element: (
          <PrivetRoute>
            <MyProfile></MyProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "/my-order",
        element:<MyOrder></MyOrder>, 
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/forget-password",
        Component: ForgetPassword,
      },
    ],
  },
  {
    path: "/product-details/:id",
    element: (
      <PrivetRoute>
        <ProductDetails></ProductDetails>
      </PrivetRoute>
    ),
    loader: () => fetch("/product.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/*",
    element:<ErrorPage></ErrorPage>,
  },
]);
