import React, {useEffect} from 'react';
import {View} from 'react-native';

import Input from '../../../../shared/Input';
import Button from '../../../../shared/Button';

import {Container} from './styles';
import Animated from 'react-native-reanimated';

const FormLogin: React.FC = () => {
  return (
    <Container>
      <Input placeholder="login" />
      <Input placeholder="senha" />
      <Button type="secondary" onClick={() => console.log('loguei')}>
        ENTRAR
      </Button>
    </Container>
  );
};

export default FormLogin;
