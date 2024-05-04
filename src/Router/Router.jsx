import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Booking from "../Pages/Booking/Booking";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signUp',
          element:<SignUp/>
        },
        {
          path:'/checkout/:id',
          element:<PrivetRoutes><CheckOut/></PrivetRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/checkout/${params.id}`)
        },
        {
          path:'/booking',
          element:<PrivetRoutes><Booking/></PrivetRoutes>,

        }
      ]
    },
  ]);

  export default router;