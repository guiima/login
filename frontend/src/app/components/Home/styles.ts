import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  background: ${theme.colors.backgroundColor};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
`;
