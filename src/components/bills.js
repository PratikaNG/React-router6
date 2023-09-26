import { useParams } from "react-router-dom"
import { getInvoice } from "./data"

export default function Bills() {
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