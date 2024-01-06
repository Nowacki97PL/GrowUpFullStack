import React from 'react'
import { Row, Col} from 'react-bootstrap'
import products from '../products'

function ShopScreen() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4} xL={3}>
            <h3>
            {product.name}
            </h3>
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default ShopScreen
