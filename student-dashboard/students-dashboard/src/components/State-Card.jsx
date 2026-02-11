import './State-Card.css'

import React from 'react'

function StateCard({value, info}) {
  return (
    <div className='state-card'>
        <p>{value}</p>
        <p>{info}</p>
    </div>
  )
}

export default StateCard