import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../components/Contact/Contact";
import About from "../Pages/About/About";
import NotFound from "../Pages/NotFound/NotFound";
import AllProductCard from "../components/ProductCard/AllProductCard";
import SingleProductWithDetails from "../components/ProductCard/SingleProductWithDetails";
import Cart from "../Pages/Cart/Cart";

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
        loader: () => fetch("/product.json"),
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
        element: <Cart></Cart>
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
