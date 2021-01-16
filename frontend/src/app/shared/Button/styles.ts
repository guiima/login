import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Button = styled.TouchableOpacity`
  background: ${theme.colors.PrimaryButton.color};
  align-items: center;
  justify-content: center;
  width: 90%;
  align-self: center;
  height: 60px;
  border-radius: 40px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
