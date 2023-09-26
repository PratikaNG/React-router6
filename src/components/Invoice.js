import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getInvoices } from './data'

const Invoice = () => {
  let invoices = getInvoices()

  return (
    // **************nested routes********
    // <div className='text-center'>
    //   <h1>Invoice</h1>
    //   <Outlet></Outlet>
    // </div>

    <main className='text-center'>
      <div className='flex flex-col gap-3'>
      {invoices.map(invoice=>(
        <Link
        className='bg-gray-200'
        to={`/invoices/${invoice.info.resId}`}
        key={invoice.info.resId}
        >{invoice.info.name}</Link>
      ))}
      </div>
    </main>
  )
}

export default Invoice
