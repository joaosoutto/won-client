import React, {useState} from 'react'
import { InputHTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  isChecked?: boolean
  labelColor?: 'white' | 'black'
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({onCheck, isChecked = false, label, labelFor = '', labelColor = 'white', value, ...props}: CheckboxProps) => {
  
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

   !!onCheck && onCheck(status)
  }

  return (
  <S.Wrapper>
    <S.Input checked={checked} onChange={onChange} value={value} id={labelFor} type="checkbox" {...props} />
    {!!label && <S.Label labelColor={labelColor} htmlFor={labelFor}>{label}</S.Label>}
  </S.Wrapper>
)}

export default Checkbox
