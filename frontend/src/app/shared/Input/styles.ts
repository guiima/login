import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View``;

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
`;
