import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
      console.log(response);
    });
  }, []); 

  return (
    <div className="container">
      <div className="row">
        {data.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-3">
            <Card style={{ width: "18rem", marginBottom: "20px" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Link to={`/product/${product.id}`}>
                <Button variant="primary">Go somewhere</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
