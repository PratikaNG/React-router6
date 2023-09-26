import React from 'react'
import { Link,NavLink, Outlet } from 'react-router-dom'
import { getInvoices } from './data'

const Invoice = () => {
  let invoices = getInvoices()
  let activeClassName = "text-red-500 bg-gray-200"
  return (
    // **************nested routes********
    // <div className='text-center'>
    //   <h1>Invoice</h1>
    //   <Outlet></Outlet>
    // </div>

    <main className='text-center'>
      <div className='flex flex-col gap-3'>
      {invoices.map(invoice=>(
        <NavLink
        //  style={({isActive})=>{
        //   return {
        //     color: isActive ? "red":""
        //   }
        // }}
        className={({isActive})=>isActive ? activeClassName:''}
        // className='bg-gray-200'
        to={`/invoice/${invoice.info.resId}`}
        key={invoice.info.resId}
        target='_blank'
        >{invoice.info.name}
        
        </NavLink>
      ))}
      </div>
      <Outlet></Outlet>
    </main>
  )
}

export default Invoice
