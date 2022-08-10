import React from 'react'

function Button(props) {
  return (
    
    <div className='btnHolder'>
        <button className={props.btnClass} onClick={props. calculateBill}>{props.btnText}</button>
    </div>
  )
}

export default Button