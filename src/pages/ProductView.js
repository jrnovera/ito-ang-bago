import { useState, useEffect, useContext } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";

import UserContext from "../UserContext";

export default function ProductView() {
  const { productId } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const getProduct = (productId) => {
    console.log("Fetching product details for productId:", productId);
    fetch(`http://localhost:4000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Product details fetched:", data);
        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
      });
  };

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body className="text-center">
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle>Description:</Card.Subtitle>
              <Card.Text>{description}</Card.Text>
              <Card.Subtitle>Price:</Card.Subtitle>
              <Card.Text>PhP {price}</Card.Text>
              {user.id !== null ? (
                <Button
                  variant="primary"
                  block="true"
                  onClick={() => {
                    getProduct(productId);
                    navigate(`/products`);
                  }}
                >
                  Buy
                </Button>
              ) : (
                <Link className="btn btn-danger btn-block" to="/product">
                  Buy Item
                </Link>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
