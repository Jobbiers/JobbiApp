import { GetProps, Input, styled } from 'tamagui';

const TextInput = styled(Input, {
  name: 'TextInput',
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
  } as const,
  defaultVariants: {
    dimensions: 'm',
    fullWidth: true,
  },
});

export type TextInputProps = GetProps<typeof TextInput>;
export default TextInput;
