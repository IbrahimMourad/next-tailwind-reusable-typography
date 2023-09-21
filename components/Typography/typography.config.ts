import { cva } from 'class-variance-authority'

const config = cva(['font-bold', 'text-black'], {
  variants: {
    variant: {
      heading1: ['text-[64px]'],
      heading2: ['text-[52px]'],
      heading3: ['text-[40px]'],
      heading4: ['text-[36px]'],
      heading5: ['text-[28px]'],
      heading6: ['text-[22px]'],
      'body-large': ['text-[20px]'],
      'body-medium': ['text-[18px]'],
      'body-small': ['text-[16px]'],
    },
    font: {
      oswald: ['font-oswald'],
      opensans: ['font-opensans'],
    },
    letterSpacing: {
      '2': ['tracking-[0.32px]'],
      '4': ['tracking-[0.64px]'],
    },
  },
  defaultVariants: {
    variant: 'heading1',
    font: 'oswald',
  },
})

export default config
