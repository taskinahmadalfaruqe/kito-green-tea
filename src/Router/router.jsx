import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <MainLayout/>,
      children:[
        
        {
          path: '/',
          element: <Home/>
        }
        
      ]
    },
    // {
    //     path: '*',
    //     element: <NotFound></NotFound>
    // }
  ]);

 
export default router;