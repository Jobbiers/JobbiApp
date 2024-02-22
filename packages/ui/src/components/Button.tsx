import { GetProps, Button as TamaguiButton, styled } from 'tamagui';

const Button = styled(TamaguiButton, {
  name: 'Button',
  variants: {
    dimensions: {
      small: {
        h: '$4',
        w: '$10',
      },
      medium: {
        h: '$6',
        w: '$10',
      },
      large: {
        h: '$8',
        w: '$10',
      },
    },
    fullWidth: {
      true: {
        w: '100%',
      },
    },
  } as const,

  defaultVariants: {
    fullWidth: false,
    dimensions: 'medium',
  },
});

export type ButtonProps = GetProps<typeof Button>;
export default Button;
