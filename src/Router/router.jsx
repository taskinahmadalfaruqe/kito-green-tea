import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../components/Contact/Contact";
import About from "../Pages/About/About";
import Products from "../components/Products/Products";

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
          element: <Products/>
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
    // {
    //     path: '*',
    //     element: <NotFound></NotFound>
    // }
  ]);

 
export default router;