import React from 'react';
import {Text, View} from 'react-native';

import {Container, TextInput} from './styles';

interface InputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({placeholder}) => {
  return <TextInput placeholder={placeholder} />;
};

export default Input;
