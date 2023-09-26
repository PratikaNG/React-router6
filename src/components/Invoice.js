import React from 'react'
import { Outlet } from 'react-router-dom'

const Invoice = () => {
  return (
    <div className='text-center'>
      <h1>Invoice</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default Invoice
