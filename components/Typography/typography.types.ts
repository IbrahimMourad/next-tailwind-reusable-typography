export type TypographyProps = {
  variant?:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'body-large'
    | 'body-medium'
    | 'body-small'
  font?: 'oswald' | 'opensans'
  letterSpacing?: '2' | '4'
  className?: string
  children: React.ReactNode | string
}
