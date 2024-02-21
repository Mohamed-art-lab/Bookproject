import React, { useState, useEffect } from "react";

const Items = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({
    item_id: null,
    price: 0,
  });

  useEffect(() => {
    getItems();
  }, []);

  const deleteItem = (id) => {
    fetch(`http://localhost:3001/items/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => data);
    getItems();
  };

  const handleFormChange = (event) => {
    if (event.target.name === "item_id") {
      setItem({
        ...item,
        [event.target.name]: event.target.value,
      });
    } else {
      setItem({
        ...item,
        [event.target.name]: event.target.value,
      });
    }
  };

  const itemRows = items.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.item_name}</td>
      <td>{item.price}</td>
      <td>
        <button onClick={() => deleteItem(item.id)} className="btn btn-sm btn-danger">
          x
        </button>
      </td>
    </tr>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3001/items/${item.item_id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((data) => {
        getItems();
        return data;
      });
  };

  const getItems = () => {
    fetch("http://localhost:3001/items/")
      .then((response) => response.json())
      .then((data) => setItems(data));
  };

  return (
    <div className="container">
      <form className="row p-4" onSubmit={handleSubmit}>
        <div className="col-sm-3">
          <small className="form-label text-muted">Item Name</small>
          <select
            name="item_id"
            className="form-select form-select-sm"
            onChange={(event) => handleFormChange(event)}
          >
            <option>--Select Item To Update--</option>
            {items.map((item, index) => (
              <option value={item.id} key={index}>
                {item.item_name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-2">
          <small className="form-label text-muted">Unit Price</small>
          <input
            className="form-control form-control-sm"
            type="number"
            name="price"
            value={item.price}
            onChange={(event) => handleFormChange(event)}
          />
        </div>
        <div className="col-sm-3 p-4">
          <button className="btn btn-sm btn-success btn-block">Update</button>
        </div>
      </form>
      <table className="table table-dark table-sm table-stripped">
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{itemRows}</tbody>
      </table>
    </div>
  );
};

export default Items;
