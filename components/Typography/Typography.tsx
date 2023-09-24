import { useMemo } from 'react'
import { TypographyProps } from './typography.types'
import tailwindConfig from './typography.config'
import { classNames } from '@/utils'

const Typography = ({
  variant,
  className,
  font,
  letterSpacing,
  children,
}: TypographyProps) => {
  const variantsMapping = {
    heading1: 'h1',
    heading2: 'h2',
    heading3: 'h6',
    heading4: 'h6',
    heading5: 'h6',
    heading6: 'h6',
    'body-large': 'p',
    'body-medium': 'p',
    'body-small': 'p',
  }

  const Component: keyof JSX.IntrinsicElements = variant
    ? variantsMapping[variant]
    : variantsMapping['p']

  const classes = useMemo(() => {
    return classNames(
      tailwindConfig({
        variant,
        font,
        letterSpacing,
      }),

      className
    )
  }, [variant, className])
  return <Component className={classes}>{children}</Component>
}

export default Typography
