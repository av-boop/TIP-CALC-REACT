import React from 'react'

function Field(props) {
  return (
    
    <div className='fieldWrapper'>

        <div className='textDiv'>{props.inputText}</div>
        <div className='inputDiv'>{props.inputEle}</div>

    </div>
  )
}

export default Field