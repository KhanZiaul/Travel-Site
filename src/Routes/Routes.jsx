import { createBrowserRouter } from "react-router-dom";
import Login from "../LoginRegister/Login/Login";
import App from "../App";
import Home from "../pages/Home/Home";
import SpotDetails from "../pages/SpotDetails/SpotDetails";
import Booking from "../pages/Booking/Booking";
import SharedLayout from "../Layouts/SharedLayout";
import Register from "../LoginRegister/Register/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: ':id',
        element: <SpotDetails></SpotDetails>,
        loader: ({ params }) => fetch(`https://datas-jet.vercel.app/spots/${params.id}`)
      }
    ]
  },
  {
    path: 'layout',
    element: <SharedLayout></SharedLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path: 'booking/:id',
        element: <PrivateRouter><Booking></Booking></PrivateRouter>,
        loader:({params}) => fetch(`https://datas-jet.vercel.app/hotels/${params.id}`)
      }
    ]
  }
]);

export default router;