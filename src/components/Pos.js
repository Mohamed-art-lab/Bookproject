import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import OrderLine from "./OrderLine";

// const customer_id = document.querySelector("#customer_id").value

function Orders(){

    const [customers, setCustomers] = useState([])
    

    useEffect(()=> {
        fetch(' https://tomashi.loca.lt/customers')
        .then((response)=> response.json())
        .then( data => setCustomers(data))
        
    }, [])

    const [orders, setOrders] = useState([{
        item_id: 0,
        price: 0,
        QTY: 1,
        line_total: 0
    }])


const addOrder = (event) => {
    event.preventDefault()
    let newOrder = { 
        item_id: 0,
        price: 0,
        QTY: 1,
        line_total: 0
     }

     const lastOrderItem = orders[orders.length - 1]
     if(lastOrderItem.item_id === null){
        alert("All order inputs are required before adding a new one!")
       return
     }

     setOrders([
        ...orders,
        newOrder
     ])

}

const submitOrders = async(event) => {
    event.preventDefault()
    const customer_id = parseInt(document.querySelector("#customer_id").value)
    if(!customer_id){
        alert("The customer name is required")
        return false
    }
    const finalOrders = {
        orders: orders.map((order)=>{
            order["customer_id"] = customer_id
            delete order['price'];
            return order;
        })
    }
 fetch('https://tomashi.loca.lt/orders',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(finalOrders)
    })
    alert(`${finalOrders.orders.length} items added successfully to your order!`)
    

}

const total = orders.reduce((acc, currentValue)=> acc + currentValue.line_total, 0);


return (
    <div className="container">
        <form className="border w-75 mx-auto" onSubmit={submitOrders}>
            <img className="mx-auto d-block w-25" src="./images/supermarket.png" alt="logo"/>
            <div className="col-sm-3 m-auto">
                <small className="form-label text-muted">Customer Name</small>
                <select id="customer_id" name="customer_id"  className="form-select form-select-sm">
                    <option>--Select Customer--</option>
                    {customers.map((customer, index)=> <option value={customer.id} key={index}>{customer.customer_name}</option>)}
                </select>
            </div>
            {
                orders.map((order, index)=> {
                    return <OrderLine order={order} orders={orders} setOrders={setOrders} index={index} key={index}/>
                })
            }
            <div className="d-flex justify-content-between p-4">
                <button className="btn btn-sm btn-dark" onClick={addOrder}>
                    <FontAwesomeIcon className="" icon="plus"/>
                </button>
                <button className="btn btn-sm btn-outline-dark  text-uppercase">Submit Order</button>
            </div>
            <div className="d-flex justify-content-end p-4">
                <b>Total: Ksh{total}</b>
            </div>
        </form>
    </div>
)
}

export default Orders