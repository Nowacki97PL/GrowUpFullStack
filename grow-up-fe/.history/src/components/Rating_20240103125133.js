import React from 'react'

function Rating({value, text, color}) {
  return (
    <div className='rating'>
        <span>
            <i style={{color}} className={
                value >= 1 }>

            </i>
        </span>
    </div>
  )
}

export default Rating
