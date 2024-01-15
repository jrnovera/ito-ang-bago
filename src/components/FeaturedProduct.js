import { useState, useEffect } from "react";
import { CardGroup } from "react-bootstrap";
import PreviewProduct from "./PreviewProduct";
import { useNavigate } from "react-router-dom";

export default function FeaturedProduct() {
  const navigate = useNavigate();
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    console.log("Fetching featured products...");
    fetch(`http://localhost:4000/products/`)
      .then((res) => res.json())
      .then((data) => {
        const numbers = [];
        const featured = [];

        const generateRandomNums = () => {
          let randomNum = Math.floor(Math.random() * data.length);

          if (numbers.indexOf(randomNum) === -1) {
            numbers.push(randomNum);
          } else {
            generateRandomNums();
          }
        };

        for (let i = 0; i < 5; i++) {
          generateRandomNums();

          featured.push(
            <PreviewProduct
              key={data[numbers[i]]._id}
              data={data[numbers[i]]}
              breakPoint={2}
              onBuy={() => {
                // Use the navigate function to redirect to ProductView
                navigate(`/product/${data[numbers[i]]._id}`);
              }}
            />
          );
        }

        setPreviews(featured);
        console.log("Featured products fetched:", featured);
      });
  }, [navigate]);

  return (
    <>
      <h2 className="text-center">Featured Product</h2>
      <CardGroup className="justify-content-center">{previews}</CardGroup>
    </>
  );
}
