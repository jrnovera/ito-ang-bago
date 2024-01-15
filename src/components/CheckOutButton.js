// CheckoutButton.js
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const CheckoutButton = ({ cartItems }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // Check if cartItems is defined before computing total quantity
    if (cartItems && cartItems.length > 0) {
      const newTotalQuantity = cartItems.reduce(
        (accumulator, currentItem) =>
          accumulator + (Number(currentItem.quantity) || 0),
        0
      );

      setTotalQuantity(newTotalQuantity);
    } else {
      // If cartItems is undefined or empty, reset total quantity
      setTotalQuantity(0);
    }
  }, [cartItems]);

  const handleCheckout = () => {
    // Calculate subtotal for each product in the cart
    const subtotalDetails = cartItems.map((item) => {
      const itemQuantity = Number(item.quantity) || 0;
      const itemPrice = item.productId ? Number(item.productId.price) || 0 : 0;
      const subtotal = itemQuantity * itemPrice;

      return {
        product: item.productId ? item.productId.name : "Unknown Product",
        subtotal: subtotal.toFixed(2), // Format subtotal to two decimal places
      };
    });

    // Implement your checkout logic here
    // This can include sending the order to the server, updating the database, etc.

    // For this example, we'll just show an alert with the total quantity and subtotal details
    Swal.fire({
      icon: "success",
      title: "Checkout Successful!",
      html:
        `<p>Total Quantity: ${totalQuantity}</p>` +
        `<p>Subtotal Details:</p>` +
        `<ul>${subtotalDetails
          .map((detail) => `<li>${detail.product}: $${detail.subtotal}</li>`)
          .join("")}</ul>`,
    });

    // You can clear the cart or perform any additional actions here
  };

  return (
    <Button variant="success" onClick={handleCheckout}>
      Checkout
    </Button>
  );
};

export default CheckoutButton;
