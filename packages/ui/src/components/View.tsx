import { GetProps, View as TamaguiView, styled } from 'tamagui';

export const View = styled(TamaguiView, {
  name: 'View',
  p: '$4',
  m: '$4',
  theme: 'primary',
  variants: {
    type: {
      card: {
        bg: '$background',
        elevationAndroid: 5,
        br: '$4',
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

export type ViewProps = GetProps<typeof View>;
export default View;
