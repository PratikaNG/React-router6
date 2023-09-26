import { Link,NavLink, Outlet,useNavigate ,useLocation,Navigate} from 'react-router-dom'
import { getInvoices } from './data'
import { useParams } from "react-router-dom"
import { getInvoice } from "./data"
import  authConsumer from '../hooks/auth';
import Route from "../routes/routes"

export const Home = ()=>{
    const [authed,dispatch] = authConsumer()
    console.log(authed)
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

    const [{auth}] = authConsumer()
    let [{children}] = Route
    function ActiveLink(props) {
        return <NavLink style={({isActive})=>{
            return {
                color:isActive ? "white":""
            };
        }}{...props}/>
        
    }
    return (
        <nav className='flex bg-indigo-600 text-black-50 gap-4 justify-center'>
            <ActiveLink to="/">Home</ActiveLink>
            {
children.map((value,i)=>(
    // console.log(value.RouteName)
    value.RouteName && value.protected === auth ?  <ActiveLink key={i} to={value.path}>{value.RouteName}</ActiveLink>:false
))
            }
            {/* <ActiveLink to="/login">login</ActiveLink> */}
            {/* {
                auth?(
<>
                    <ActiveLink to="/invoice">Invoice</ActiveLink>
                    <ActiveLink to="/expenses">expenses</ActiveLink></>
                ):<></>
            } */}

        </nav>
    )
}

export const Login = () =>{
    const [authed,dispatch] = authConsumer()
    let navigate = useNavigate()
    return (
        <main>
            <div>Login component</div>
            <button className='border px-5 bg-indigo-500 text-gray-50 rounded' 
            onClick={()=>{
                dispatch({type:"login"})
                navigate("/invoice",{replace:true})
            }}
            >Login</button>
        </main>
    )
}

export const Invoice = () => {
    let auth = authConsumer()

  let invoices = getInvoices()
//   let activeClassName = "text-red-500 bg-gray-200"
const [,dispatch] = authConsumer()
let navigate = useNavigate()

   

    return(<main className='text-center my-3'>
    <div className='flex flex-col gap-3  text-gray-700 w-40 mx-auto my-5'>
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
    <button className='border px-5 bg-indigo-500 text-gray-50 rounded' 
            onClick={()=>{
                dispatch({type:"logout"})
                navigate("/login",{replace:false})

            }}
            >Logout</button>
    <Outlet></Outlet>
  </main>)
}

export const Expenses=()=>{
const [,dispatch] = authConsumer()

let navigate = useNavigate()

    return(<div className='text-center'>
    <h1>Expenses</h1>
    <button className='border px-5 bg-indigo-500 text-gray-50 rounded' 
            onClick={()=>{
                dispatch({type:"logout"})
                navigate("/login",{replace:false})

            }}
            >Logout</button>
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
}

export function RequireAuth({children}){
const [authed] = authConsumer() 
const location = useLocation()
    
    return authed.auth === true ?(children) :(
<Navigate to={"/login"} replace state={{path:location.pathname}}/>)
   

}