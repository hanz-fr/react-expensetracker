import React from 'react'

const Button = (props) => {

  let classes;
  if (props.isTextButton == true) {
    classes = 'text-button'
  } else {
    classes = 'normal-button'
  }

  return (
    <button className={classes}>
        {props.text}
    </button>
  )
}

export default Button;
