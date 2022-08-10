import React from 'react'

function Heading(props) {
  return (
    
    <div className={props.headClass}>{props.headText}</div>
  )
}

export default Heading