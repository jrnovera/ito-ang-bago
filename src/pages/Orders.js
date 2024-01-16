import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders when the component mounts
    fetch("http://localhost:4000/orders/my-orders", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.map((order) => (
        <Card key={order._id}>
          <Card.Body>
            <h5>Order ID: {order._id}</h5>
            <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
            <p>Status: {order.status}</p>
            {/* Add more details as needed */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Orders;
