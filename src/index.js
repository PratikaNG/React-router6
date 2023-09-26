import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter as Router,Routes,Route, useRoutes} from "react-router-dom"
import Invoice from './components/Invoice';
import Expenses from './components/Expenses';
import Bills from './components/bills';
import { AuthProvider } from './hooks/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
  // type1*****************
  <Router>
    <AuthProvider>
    <App/>
    </AuthProvider>
      {/* <Routes> */}
        {/* <Route path='/' element={<App/>}> */}


           {/* <Route path='/invoice' element={<Invoice/>}> */}
            {/* index route => shares the path of the parent, its rendered in the parent route outlet.It matches when the parent route matches and none of the other children routes match */}
            {/* <Route index element={<main className='my-4 p-3'>
              <p><i>Select an invoice</i></p>
            </main>}/> */}
            {/* <Route path='/invoice/123' element={<div>Bills</div>}/> */}
          {/* </Route> */}
          {/* <Route path="/invoice/:invoiceid" element={<Bills/>} /> */}

          {/* <Route path='/expenses' element={<Expenses/>}/> */}
          {/* <Route path='*' element={<main className='text-center'>
            <p className='text-3xl'>There is nothing here!</p>
          </main>}></Route>  */}
        {/* </Route> */}
      {/* </Routes> */}
  </Router>

);


