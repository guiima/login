import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import Input from '../../../../shared/Input';
import Button from '../../../../shared/Button';

import {Container} from './styles';
import {auth} from '../../../../services/requests/auth';
import {NavigationContainerRef} from '@react-navigation/native';

interface FormloginProps {
  navigation: NavigationContainerRef;
}

const FormLogin: React.FC<FormloginProps> = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const authentication = async () => {
    auth(login, password)
      .then((response) => {
        setLogin('');
        setPassword('');
        navigation.navigate('Home');
      })
      .catch((err) => {
        Alert.alert('Usuário ou senha inválida!');
      });
  };

  return (
    <Container>
      <Input
        placeholder="login"
        value={login}
        onChangeText={(value) => setLogin(value)}
      />
      <Input
        secureTextEntry
        placeholder="senha"
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <Button type="secondary" onClick={() => authentication()}>
        ENTRAR
      </Button>
    </Container>
  );
};

export default FormLogin;
