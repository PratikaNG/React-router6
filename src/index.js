import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Invoice from './components/Invoice';
import Expenses from './components/Expenses';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/invoice' element={<Invoice/>}>
            <Route path='/invoice/123' element={<div>Bills</div>}/>

          </Route>
          <Route path='/expenses' element={<Expenses/>}/>
          <Route path='*' element={<main className='text-center'>
            <p className='text-3xl'>There is nothing here!</p>
          </main>}/>
        </Route>
      </Routes>
  </Router>

);


