import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <Spinner
        animation='grow'
        role='status'
        style={{
            height:'100px',
            width:'100px',
            margin

        }}>
      
    </Spinner>
  )
}

export default Loader
