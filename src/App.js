import { Link, Outlet } from 'react-router-dom';
import './App.css';
import React from "react";
import { useRoutes } from 'react-router-dom';
// import {Routes,Route, Navigate} from "react-router-dom"


function App() {
    const routes = useRoutes([

      {
        path:"/",
        element:<div><p>Home<Outlet></Outlet></p></div>,
        children:[
          {
            path:"login",
            element:<div><p>Login</p></div>,
          },
          {
            path:"settings",
            element:<div><p>settings</p></div>,
          },
          {
            path:"invoice",
            element:<div><p>Invoice</p></div>,
          },
          {
            path:"expenses",
            element:<div><p>Expenses</p></div>,
          },
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
