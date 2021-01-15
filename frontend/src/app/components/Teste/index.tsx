import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

// import { Container } from './styles';

interface TesteProps {
  navigation: NavigationContainerRef;
}

const Teste: React.FC<TesteProps> = ({navigation}) => {
  return (
    <View>
      <Text>Teste</Text>
      <Button title="go home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Teste;
