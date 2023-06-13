import React from 'react'

const Button = (props) => {

  /* check if textbutton or not */
  let classes;
  if (props.isTextButton === true) {
    classes = 'text-button ' + props.className;
  } else {
    classes = 'normal-button ' + props.className;
  }

  /* check button type */
  let btn_type;
  if (props.type === 'submit') {
    btn_type = 'submit'
  } else if (props.type === 'button') {
    btn_type = 'button'
  } else if (props.type === 'reset') {
    btn_type = 'reset'
  } else {
    btn_type = 'button'
  }

  return (
    <button className={classes} type={btn_type}>
        {props.text}
    </button>
  )
}

export default Button;
