import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  background: ${theme.colors.backgroundColor};
  align-items: center;
  justify-content: center;
  height: 50px;
  border: 1px solid;
  border-color: ${theme.colors.header.borderColor};
  elevation: 5;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${theme.colors.header.color};
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1px;
  flex: 1;
  text-align: center;
`;

export const ContentIcon = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  margin-left: 5px;
  z-index: 1;
`;
