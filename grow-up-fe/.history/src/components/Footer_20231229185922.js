import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center' id='ft-main'>
          Copyright &copy; GrowUp <br></br>
          Made by Nowacki
          </Col>
        </Row>
      </Container>
      
    </footer>
  )
}

export default Footer
