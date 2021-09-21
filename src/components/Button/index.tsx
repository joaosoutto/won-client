import {
  forwardRef,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: React.ReactNode
  as?: React.ElementType
  minimal?: boolean
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  minimal = false,
  ...props
}, ref) => (
  <S.Wrapper fullWidth={fullWidth} size={size} minimal={minimal} hasIcon={!!icon} ref={ref} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
