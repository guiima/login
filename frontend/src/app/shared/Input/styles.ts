import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

interface TextInputProps {
  marginBottom?: number;
}

export const TextInput = styled.TextInput`
  margin-bottom: 10px;
  border: 1px solid;
  border-color: ${theme.colors.textInput.borderColor};
  border-radius: 40px;
  width: 90%;
  align-self: center;
  padding-left: 20px;
  background: ${theme.colors.backgroundColor};
  elevation: 2;
  margin-bottom: ${(props: TextInputProps) =>
    props.marginBottom ? props.marginBottom : 10}px;
  font-size: 18px;
`;
