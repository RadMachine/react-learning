import {FC} from 'react'
import classes from './select.module.css'

interface IOption {
  value: string,
  text: string
}

interface ICustomSelectProps {
  options: IOption[]
}

export const CustomSelect: FC<JSX.IntrinsicElements['select'] & ICustomSelectProps> = ({
  defaultValue,
  options,
  ...props
}) => <>
  <select {...props} defaultValue="" className={classes.select}>
    {!!defaultValue && <option value="" disabled hidden>{defaultValue}</option>}
    {options.map(({text, value}) => <option value={value} key={value}>{text}</option>)}
  </select>
</>
