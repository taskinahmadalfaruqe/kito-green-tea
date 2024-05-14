import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layoute/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../components/Contact/Contact";
import About from "../Pages/About/About";
import NotFound from "../Pages/NotFound/NotFound";
import AllProductCard from "../components/ProductCard/AllProductCard";
import SingleProductWithDetails from "../components/ProductCard/SingleProductWithDetails";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import OrderList from "../Pages/Dashboard/OrderList/OrderList";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import UpdateProduct from "./../Pages/Dashboard/UpdateProduct/UpdateProduct";
import ContactInformattion from "../Pages/Dashboard/ContactInformation/ContactInformattion";
import DashboardLayout from "../Layoute/DashboardLayout/DashboardLayout";
import DashboardStatus from "../Pages/Dashboard/DashboardStatus/DashboardStatus";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProductCard></AllProductCard>,
      },
      {
        path: "/products/:id",
        element: <SingleProductWithDetails></SingleProductWithDetails>,
        loader: () => fetch("https://e-shopbd-server.vercel.app/products"),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/admin/adminLogin",
        element: <Login></Login>,
      },
      {
        path: "/admin/adminRegister",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>,
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardStatus></DashboardStatus>,
      },
      {
        path: "/dashboard/AdminHome",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/orderList",
        element: <OrderList />,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/updateproduct",
        element: <UpdateProduct />,
      },
      {
        path: "/dashboard/contact",
        element: <ContactInformattion />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
