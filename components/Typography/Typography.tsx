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
  return <h2 className={classes}>{children}</h2>
}

export default Typography
