import {NavigationContainerRef} from '@react-navigation/native';
import React from 'react';
import Header from '../../shared/Header';
import {Container, Text} from './styles';

interface HomeProps {
  navigation: NavigationContainerRef;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} screenName="Home" />
      <Container>
        <Text>Home</Text>
      </Container>
    </>
  );
};

export default Home;
