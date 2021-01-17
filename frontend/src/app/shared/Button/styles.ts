import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

interface ButtonProps {
  type?: string;
}

export const Button = styled.TouchableOpacity`
  background: ${(props: ButtonProps) =>
    props.type === 'secondary'
      ? theme.colors.secondaryButton.color
      : theme.colors.primaryButton.color};
  align-items: center;
  justify-content: center;
  width: 90%;
  align-self: center;
  height: 60px;
  border-radius: 40px;
  border: 1px solid;
  border-color: ${(props: ButtonProps) =>
    props.type === 'secondary'
      ? theme.colors.secondaryButton.borderColor
      : theme.colors.primaryButton.borderColor};
  elevation: 20;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: ${(props: ButtonProps) =>
    props.type === 'secondary'
      ? theme.colors.secondaryTextColor
      : theme.colors.primaryTextColor};
  font-weight: bold;
  letter-spacing: 1px;
`;
