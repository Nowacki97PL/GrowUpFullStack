import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <Spinner
        animation='grow'
        role='status'
        style={{
            height:'100px',
            width

        }}>
      
    </Spinner>
  )
}

export default Loader
