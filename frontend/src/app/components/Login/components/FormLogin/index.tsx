import React, {useEffect} from 'react';
import {View} from 'react-native';

import Input from '../../../../shared/Input';
import Button from '../../../../shared/Button';

import {Container} from './styles';
import {auth} from '../../../../services/requests/auth';

const FormLogin: React.FC = () => {
  const authentication = async () => {
    auth('guima', '123456');
  };

  return (
    <Container>
      <Input placeholder="login" />
      <Input placeholder="senha" />
      <Button type="secondary" onClick={() => authentication()}>
        ENTRAR
      </Button>
    </Container>
  );
};

export default FormLogin;
