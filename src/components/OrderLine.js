import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function OrderLine({order, orders, setOrders, index}){

    const [items, setItems] = useState([])
    

    useEffect(()=> {
        fetch('https://tomashi.loca.lt/items')
        .then((response)=> response.json())
        .then( data => setItems(data))
        
    }, [])


    const handleFormChange = (event)=> {
        let data = [...orders];
        data[index][event.target.name] = event.target.value;
        // console.log(data[index])

        const item_id = parseInt(data[index]['item_id']);
        const selectedItem = items.find((value)=> value.id === item_id)
        const price = parseFloat(selectedItem.price)

        data[index]['item_id'] = item_id
        data[index]['price'] = price
        data[index]['line_total'] = price * data[index]['QTY']
        setOrders(data)
        // console.log(data)
    }

    const removeOrder = (event,index)=> {
        event.preventDefault()
        if(orders.length === 1){
            alert("You can reomve the only remaining item, select an other item instead!")
            return false;
        }
        let data = [...orders];
        data.splice(index, 1)
        setOrders(data)
    }


        const lineOrder = <div className="row m-1">
            <div className="col-sm-3">
            <small className="form-label text-muted">Product Name</small>
                <select name="item_id" defaultValue={order.id} className="form-select form-select-sm" onChange={(event)=> handleFormChange(event)}>
                    <option>--Select Item--</option>
                    {items.map((item, index)=> <option value={item.id} key={index}>{item.item_name}</option>)}
                </select>
            </div>
            <div className="col-sm-2 ">
            <small className="form-label text-muted">Unit Price</small>
                <input className="form-control form-control-sm" type="text" name="price" value={order.price} onChange={(event)=> handleFormChange(event)}/>
            </div>
            <div className="col-sm-2">
            <small className="form-label text-muted">QTY</small>
                <input className="form-control form-control-sm" type="number" name="QTY" value={order.QTY} onChange={(event)=> handleFormChange(event)}/>
            </div>
            <div className="col-sm-2">
            <small className="form-label text-muted">Total</small>
                <input className="form-control form-control-sm" type="text" name="line_total" value={order.line_total} onChange={(event)=> handleFormChange(event)}/>
            </div>
            <div className="col-sm-2 pt-4">
                <button className="btn btn-sm" onClick={(event)=>{removeOrder(event,index)}}>
                    <FontAwesomeIcon icon="minus"/>
                </button>
            </div>
        </div>

    return lineOrder

}

export default OrderLine