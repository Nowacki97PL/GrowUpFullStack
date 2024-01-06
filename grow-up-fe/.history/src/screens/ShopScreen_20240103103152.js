import React from 'react'
import { Row, Col} from 'react-bootstrap'
import products from '../products'

function ShopScreen() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => )}
      </Row>
    </div>
  )
}

export default ShopScreen
