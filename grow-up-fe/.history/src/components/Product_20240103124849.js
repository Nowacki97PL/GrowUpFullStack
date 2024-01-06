import React from 'react'
import {Card, } from 'react-bootstrap'

function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image}></Card.Img>
        </a>

        <Card.Body>
            <a href={`/product/${product._id}`} id='card-title'>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </a>

            <Card.Text as="div">
                <div className='my-3'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={}/>
                    </div>
            </Card.Text>

            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
