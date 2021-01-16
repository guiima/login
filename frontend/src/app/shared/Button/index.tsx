import React from 'react';
import {Text, View} from 'react-native';

import {Button, TextButton} from './styles';

interface ButtonComponentProps {
  onClick: () => void;
  type?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onClick,
  children,
  type,
}) => {
  return (
    <Button type={type} onPress={() => onClick()}>
      <TextButton type={type}>{children}</TextButton>
    </Button>
  );
};

export default ButtonComponent;
