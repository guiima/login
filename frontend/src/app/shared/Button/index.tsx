import React from 'react';
import {Text, View} from 'react-native';

import {Button, TextButton} from './styles';

interface ButtonComponentProps {
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onClick,
  children,
}) => {
  return (
    <Button onPress={() => onClick()}>
      <TextButton>{children}</TextButton>
    </Button>
  );
};

export default ButtonComponent;
