import React from 'react'
import {Card, } from 'react-bootstrap'

function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image}></Card.Img>
        </a>

        <Card.Body>
            <a href={`/product/${}`}
        </Card.Body>
    </Card>
  )
}

export default Product
