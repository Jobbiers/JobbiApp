import { GetProps, Button as TamaguiButton, styled } from 'tamagui';

const Button = styled(TamaguiButton, {
  name: 'Button',
  my: '$2',
  variants: {
    dimensions: {
      s: {
        h: '$4',
        w: '$10',
      },
      m: {
        h: '$5',
        w: '$10',
      },
      l: {
        h: '$7',
        w: '$10',
      },
    },
    fullWidth: {
      true: {
        w: '100%',
      },
    },
    rounded: {
      true: {
        br: '$10',
      },
    },
  } as const,

  defaultVariants: {
    dimensions: 'm',
    fullWidth: false,
    rounded: false,
  },
});

export type ButtonProps = GetProps<typeof Button>;
export default Button;
