import React, {forwardRef} from 'react'
import classes from './input.module.css'

const CustomInput = forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>((props, ref) => {
  return (
    <input ref={ref} className={classes.customIpt} {...props}/>
  )
})

export default CustomInput
