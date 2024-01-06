import React from 'react'
import {Card, } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded' id='card-border-color'>
        <Link to={`/product/${product._id}`}>
            <Card.Img className='rounded-3' src={product.image}></Card.Img>
        </Link>

        <Card.Body>
            <Link to={`/product/${product._id}`} id='card-title'>
                <Card.Title as="div" className='card-title'>
                    <>{product.name}</>
                </Card.Title>
            </Link>

            <Card.Text as="div">
                <div className='my-3'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
            </Card.Text>

            <Card.Text as="h3">
                {product.price} PLN.
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
