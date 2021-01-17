import React, {useState} from 'react';
import Animated, {Easing} from 'react-native-reanimated';
import SGV, {Image, Circle, ClipPath} from 'react-native-svg';
import {Dimensions, Keyboard} from 'react-native';
import {NavigationContainerRef} from '@react-navigation/native';

import ButtonLogin from '../../shared/Button';
import bg from './assets/bg.jpg';
import FormLogin from './components/FormLogin';
import {
  Container,
  styles,
  CreateAccountButton,
  CreateAccountText,
  ButtonClose,
  Content,
} from './styles';

const windowWitdh = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface LoginProps {
  navigation: NavigationContainerRef;
}

const Login: React.FC<LoginProps> = ({navigation}) => {
  const [heightImage] = useState(new Animated.Value(0));

  const stratAnimation = () => {
    Animated.timing(heightImage, {
      toValue: 300,
      duration: 500,
      easing: Easing.linear,
    }).start();
  };

  const onClickCloseButton = () => {
    Keyboard.dismiss();
    Animated.timing(heightImage, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
    }).start();
  };

  const hideToShow = heightImage.interpolate({
    inputRange: [0, 300],
    outputRange: [0, 1],
  });

  const showToHide = heightImage.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0],
  });

  return (
    <Container>
      <Animated.View
        style={[
          styles.ViewBackgroundImage,
          {
            bottom: heightImage,
          },
        ]}>
        <SGV
          style={styles.Svg}
          height={windowHeight + 50}
          width={windowWitdh + 2}>
          <ClipPath id="clip">
            <Circle r={windowHeight + 50} cx={windowWitdh / 2} />
          </ClipPath>
          <Image
            href={bg}
            height={windowHeight + 50}
            width={windowWitdh}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clip)"
          />
        </SGV>
      </Animated.View>
      <Content>
        <Animated.View
          style={[
            styles.ButtonClose,
            {
              opacity: hideToShow,
            },
          ]}>
          <ButtonClose onPress={() => onClickCloseButton()}>
            <Animated.Text
              style={{
                fontSize: 15,
              }}>
              X
            </Animated.Text>
          </ButtonClose>
        </Animated.View>

        <Animated.View
          style={[
            {
              opacity: showToHide,
              top: heightImage,
            },
          ]}>
          <ButtonLogin onClick={() => stratAnimation()}>LOGIN</ButtonLogin>
          <CreateAccountButton onPress={() => navigation.navigate('Register')}>
            <CreateAccountText>Criar nova conta</CreateAccountText>
          </CreateAccountButton>
        </Animated.View>
        <Animated.View
          style={[
            styles.FormContent,
            {
              opacity: hideToShow,
            },
          ]}>
          <FormLogin />
        </Animated.View>
      </Content>
    </Container>
  );
};

export default Login;
