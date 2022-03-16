import React, {FC} from 'react'
import classes from './button.module.css'

const CustomBtn: FC<JSX.IntrinsicElements['button']> = ({children, ...props}) => {
  return (
    <button {...props} className={classes.btn}>
      {children}
    </button>
  )
}

export default CustomBtn

