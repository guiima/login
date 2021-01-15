import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';

// import { Container } from './styles';

interface HomeProps {
  navigation: NavigationContainerRef;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go teste" onPress={() => navigation.navigate('Teste')} />
    </View>
  );
};

export default Home;
