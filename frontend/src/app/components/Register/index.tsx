import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainerRef} from '@react-navigation/native';
import Header from '../../shared/Header';
import Input from '../../shared/Input';
import Button from '../../shared/Button';

import {Container} from './styles';

interface RegisterProps {
  navigation: NavigationContainerRef;
}

const Register: React.FC<RegisterProps> = ({navigation}) => {
  return (
    <>
      <Header screenName="NOVA CONTA" navigation={navigation} />
      <Container>
        <Input marginBottom={30} placeholder="Insert login" />
        <Input marginBottom={30} placeholder="Insert password" />
        <Input marginBottom={80} placeholder="confirm password" />
        <Button type="secondary" onClick={() => console.log('criado')}>
          SALVAR
        </Button>
      </Container>
    </>
  );
};

export default Register;
