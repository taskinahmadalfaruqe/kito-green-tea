import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../components/Contact/Contact";
import About from "../Pages/About/About";
import NotFound from "../Pages/NotFound/NotFound";
import AllProductCard from "../components/ProductCard/AllProductCard";

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <MainLayout/>,
      children:[
        
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/products',
          element: <AllProductCard></AllProductCard>,
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/about',
          element: <About/>
        }
        
      ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
  ]);

 
export default router;