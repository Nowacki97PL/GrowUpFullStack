import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function Footer() {
  return (
    <footer className='Footer-main'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
          Copyright &copy; GrowUp <br></br>
          Made by Nowacki
          </Col>
        </Row>
      </Container>
      
    </footer>
  )
}

export default Footer
