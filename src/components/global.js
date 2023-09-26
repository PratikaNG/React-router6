import { Link,NavLink, Outlet } from 'react-router-dom'
import { getInvoices } from './data'
import { useParams } from "react-router-dom"
import { getInvoice } from "./data"

export const Home = ()=>{
    return (
        <main>
            <h1 className='text-center my-3 bg-yellow-400 text-gray-700 w-40 mx-auto rounded'>Authentication</h1>
            <Nav/>
            <div className='flex justify-center text-center py-3'>
            <Outlet></Outlet>
            </div>
        </main>
    )
}


export const Nav = ()=>{
    return (
        <nav className='flex bg-indigo-600 text-black-50 gap-4 justify-center'>


<Link to="/login">login</Link>

<Link to="/invoice">Invoice</Link>
<Link to="/expenses">expenses</Link>

        </nav>
    )
}

export const Login = () =>{
    return (
        <main>
            <div>Login component</div>
        </main>
    )
}

export const Invoice = () => {
  let invoices = getInvoices()
//   let activeClassName = "text-red-500 bg-gray-200"

    return(<main className='text-center my-3'>
    <div className='flex flex-col gap-3  text-gray-700 w-40 mx-auto'>
    {invoices.map(invoice=>(
      <NavLink
      //  style={({isActive})=>{
      //   return {
      //     color: isActive ? "red":""
      //   }
      // }}
    //   className={({isActive})=>isActive ? activeClassName:''}
      className='bg-gray-200'
      to={`/invoice/${invoice.info.resId}`}
      key={invoice.info.resId}
      target='_blank'
      >{invoice.info.name}
      
      </NavLink>
    ))}
    </div>
    
    <Outlet></Outlet>
  </main>)
}

export const Expenses=()=>{
    return(<div className='text-center'>
    <h1>Expenses</h1>
  </div>)

}

export function Bills() {
    let params = useParams()
    let invoice = getInvoice(parseInt(params.invoiceid))
    console.log(invoice)
   
    return (
        <main className="flex flex-col py-5 border my-4 w-1/3 mx-auto ">
            <h2>Total Due: {invoice.info.cft.text}</h2>
            <p>Rating: {invoice.info.rating.aggregate_rating}</p>
            <p>{invoice.info.name}:{invoice.info.resId} </p>
            <p>Timings: {invoice.info.timing.text}</p>
        </main>
    )
};