import React, {useState, useEffect} from "react"

const Orders = ()=> {

    const [orders, setOrders] = useState([])

    useEffect(()=> {
        fetch('https://tomashi.loca.lt/orders')
        .then(response => response.json())
        .then(data => setOrders(data))
    },[orders])

    const order = orders.map((item, index)=> {
        return <tr key={index}>
            <td>{item.date}</td>
            <td>{item.customer_name}</td>
            <td>{item.item_name}</td>
            <td>{item.QTY}</td>
            <td>{item.line_total}</td>
        </tr>

    })

    return(

        <table className="table table-dark tabel-sm table-stripped">
            <thead>
                <tr>
                <th>Date</th>
                <th>Customer Name</th>
                <th>Item Name</th>
                <th>QTY</th>
                <th>Line Total</th>
                </tr>
                
            </thead>
            <tbody>
                {order}
            </tbody>
        </table>
    )
}

export default Orders