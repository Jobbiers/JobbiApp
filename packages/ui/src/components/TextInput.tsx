import { GetProps, Input, styled } from 'tamagui';

const TextInput = styled(Input, {
  name: 'Text',
});

export type TextInputProps = GetProps<typeof TextInput>;
export default TextInput;
