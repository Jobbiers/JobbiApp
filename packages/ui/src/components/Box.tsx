import { GetProps, View, styled } from 'tamagui';

export const Box = styled(View, {
  name: 'Box',
  p: '$4',
  m: '$4',
  br: '$4',
  variants: {
    type: {
      card: {
        bg: '$background',
        elevationAndroid: 5,
        //TODO: add ios shadows here
      },
      flat: {
        bg: '$background',
      },
    },
  } as const,
  defaultVariants: {
    type: 'flat',
  },
});

export type BoxProps = GetProps<typeof Box>;