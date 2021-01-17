import React from 'react';
import {Text, View} from 'react-native';

import {TextInput} from './styles';

interface InputProps {
  placeholder: string;
  marginBottom?: number;
}

const Input: React.FC<InputProps> = ({placeholder, marginBottom}) => {
  return <TextInput marginBottom={marginBottom} placeholder={placeholder} />;
};

export default Input;
