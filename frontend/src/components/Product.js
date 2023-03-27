import React from 'react';
import Rating from './Rating';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { product } = props;
  return (
    <>
      <Card className="product">
        <Link to={`/product/${product.slug}`}>
          <img
            className="card-img-top"
            src={product.image}
            alt={product.name}
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <Card.Text>${product.price}</Card.Text>
          <Button>Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
