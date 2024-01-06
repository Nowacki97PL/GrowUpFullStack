import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products'; 

function ProductScreen() {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Link to='/home' className='btn btn-primary my-3'>
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color={"#f8e825"} />
            </ListGroup.Item>

            <ListGroup.Item>
              Price: {product.price} PLN.
            </ListGroup.Item>

            <ListGroup.Item>
             {product.description}.
            </ListGroup.Item>

          </ListGroup>
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
          <ListGroup.Item>
            <Row>
              <Col>Price:</Col>
              <Col>
              <strong>${product.price}</strong>
              </Col>
            </Row>
            </ListGroup.Item>

            <ListGroup.Item>
            <Row>
              <Col>Status:</Col>
              <Col>
              <strong>${product.price}</strong>
              </Col>
            </Row>
            </ListGroup.Item>

          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
