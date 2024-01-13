import React, { useState, useRef } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const SearchCourseByPrice = () => {
  const [courses, setCourses] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const lastCourseRef = useRef(null);

  const handleSearchByPrice = () => {
    // Send a request to the server to search for courses based on price range
    fetch(`${process.env.REACT_APP_API_URL}/products/searchByPrice`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        minPrice: parseFloat(minPrice),
        maxPrice: parseFloat(maxPrice),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.courses.length > 0) {
          Swal.fire({
            title: "Courses Found",
            icon: "success",
            text: `${data.courses.length} courses match the specified price range.`,
          });
          setCourses(data.courses);

          // Scroll to the last course in the list
          lastCourseRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
          setCourses([]);
          Swal.fire({
            title: "No courses found",
            icon: "info",
            text: "No courses match the specified price range.",
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        Swal.fire({
          title: "Error",
          icon: "error",
          text: "An error occurred while fetching courses. Please try again.",
        });
      });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>Search Courses by Price Range</Card.Title>
              <Form.Group>
                <Form.Label>Minimum Price</Form.Label>
                <Form.Control
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="Enter minimum price"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Maximum Price</Form.Label>
                <Form.Control
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="Enter maximum price"
                />
              </Form.Group>
              <Button variant="primary" block onClick={handleSearchByPrice}>
                Search
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        {courses.map((course, index) => (
          <Col
            key={course.id}
            lg={4}
            className="mb-3"
            ref={index === courses.length - 1 ? lastCourseRef : null}>
            <Card>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{course.description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>PhP {course.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchCourseByPrice;
