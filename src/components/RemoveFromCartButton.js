// RemoveFromCartButton.js
import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const RemoveFromCartButton = ({ productId, fetchData }) => {
  const handleRemoveFromCart = () => {
    // Send a request to remove the product from the cart
    fetch(`http://localhost:4000/cart/${productId}/remove-from-cart`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message) {
          Swal.fire({
            icon: "success",
            title: data.message,
          });

          // Fetch updated cart data
          fetchData();
        } else {
          Swal.fire({
            icon: "error",
            title: "Something went wrong",
          });
        }
      })
      .catch((error) => {
        console.error("Error removing from cart:", error);
      });
  };

  return (
    <Button variant="danger" onClick={handleRemoveFromCart}>
      Remove from Cart
    </Button>
  );
};

export default RemoveFromCartButton;
