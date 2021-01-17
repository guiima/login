import React from 'react';
import {TextInputProps} from 'react-native';

import {TextInput} from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  marginBottom?: number;
}

const Input: React.FC<InputProps> = ({placeholder, marginBottom, ...rest}) => {
  return (
    <TextInput
      {...rest}
      marginBottom={marginBottom}
      placeholder={placeholder}
    />
  );
};

export default Input;
