import React, {useState} from 'react';
import Animated, {Easing} from 'react-native-reanimated';
import SGV, {Image, Circle, ClipPath} from 'react-native-svg';
import {Dimensions} from 'react-native';

import ButtonLogin from '../../shared/Button';
import bg from './assets/bg.jpg';
import {
  Container,
  styles,
  CreateAccountButton,
  CreateAccountText,
  TesteButton,
} from './styles';
import {TapGestureHandler} from 'react-native-gesture-handler';

const windowWitdh = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login: React.FC = () => {
  const [heightImage] = useState(new Animated.Value(0));

  const stratAnimation = () => {
    Animated.timing(heightImage, {
      toValue: 300,
      duration: 500,
      easing: Easing.linear,
    }).start();
  };

  const onClickCloseButton = () => {
    Animated.timing(heightImage, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
    }).start();
  };

  return (
    <>
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
      <Container>
        <Animated.View
          style={[
            styles.ButtonClose,
            {
              opacity: heightImage.interpolate({
                inputRange: [0, 300],
                outputRange: [0, 1],
              }),
            },
          ]}>
          <TesteButton onPress={() => onClickCloseButton()}>
            <Animated.Text
              style={{
                fontSize: 15,
              }}>
              X
            </Animated.Text>
          </TesteButton>
        </Animated.View>
        <ButtonLogin onClick={() => stratAnimation()}>Login</ButtonLogin>
        <CreateAccountButton onPress={() => console.log('criar conta')}>
          <CreateAccountText>Ainda não possui uma conta?</CreateAccountText>
        </CreateAccountButton>
      </Container>
    </>
  );
};
export default Login;
