import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.backgroundColor};
  justify-content: center;
`;

export const Error = styled.Text`
  color: ${theme.colors.textError};
  margin-left: 40px;
  font-size: 16px;
`;

interface ContentInputProps {
  marginBottom: number;
}

export const ContentInput = styled.View`
  margin-bottom: ${(props: ContentInputProps) => props.marginBottom}%;
`;
