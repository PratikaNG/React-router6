import { Link, Outlet } from 'react-router-dom';
import './App.css';
import React from "react";
import { useRoutes } from 'react-router-dom';
// import {Routes,Route, Navigate} from "react-router-dom"
import {Invoice,Expenses,Home,Login} from "./components/global"

function App() {
    const routes = useRoutes([

      {
        path:"/",
        element:<Home></Home>,
        children:[

          {
            path:"/invoice",
            element:<Invoice></Invoice>,
          },
          {
            path:"/expenses",
            element:<Expenses></Expenses>,
          },
          {
            path:"/login",
            element:<Login></Login>,
          },
          {
            path:"settings",
            element:<div><p>settings</p></div>,
          }
        ]
      }
     
      
    ])

  return routes
  // (
    
  //   <div className='container mx-auto'>
  //     <nav className='bg-gray-100 flex gap-4'>
  //       <Link to="/invoice">Invoice</Link>
  //       <Link to="/expenses">Expenses</Link>
  //     </nav>
  //     <Outlet></Outlet>
  //   </div>
  // );
}

export default App;
