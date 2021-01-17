import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {NavigationContainerRef} from '@react-navigation/native';

import {Container, Text, ContentIcon} from './styles';

interface HeaderProps {
  navigation: NavigationContainerRef;
  screenName: string;
}

const Header: React.FC<HeaderProps> = ({screenName, navigation}) => {
  return (
    <Container>
      <ContentIcon onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={25} color="#a5b1c2" />
      </ContentIcon>
      <Text>{screenName}</Text>
    </Container>
  );
};

export default Header;
