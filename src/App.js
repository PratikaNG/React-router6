import { Link, Outlet } from 'react-router-dom';
import './App.css';
import React from "react";
// import {Routes,Route, Navigate} from "react-router-dom"
// import About from "./About";
// import Contact from "./Contact";
// import Companies from "./Companies";

function App() {
  return (
    <div className='container mx-auto'>
      <nav className='bg-gray-100 flex gap-4'>
        <Link to="/invoice">Invoice</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
