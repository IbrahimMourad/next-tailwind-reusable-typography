import { cva } from 'class-variance-authority'

const config = cva(['font-bold', 'text-black'], {
  variants: {
    variant: {
      heading1: ['text-[64px] tracking-[0.32px]'],
      heading2: ['text-[52px] tracking-[0.64px]'],
      heading3: ['text-[40px] tracking-[0.64px]'],
      heading4: ['text-[36px]'],
      heading5: ['text-[28px]'],
      heading6: ['text-[22px] tracking-[0.64px] leading-[34px]'],
      'body-large': ['text-[20px] tracking-[0.64px] leading-[34px]'],
      'body-medium': ['text-[18px] tracking-[0.64px] leading-[34px]'],
      'body-small': ['text-[16px] tracking-[0.64px] leading-[34px]'],
    },
    font: {
      oswald: ['font-oswald'],
      opensans: ['font-opensans'],
    },
    letterSpacing: {
      normal: ['trcking-normal'],
      '2': ['tracking-[0.32px]'],
      '4': ['tracking-[0.64px]'],
    },
  },
  defaultVariants: {
    variant: 'heading1',
    font: 'oswald',
    letterSpacing: 'normal',
  },
})

export default config
