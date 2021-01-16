import React, {useState} from 'react';
import Animated from 'react-native-reanimated';
import ButtonLogin from '../../shared/Button';
import Input from '../../shared/Input';
// import bg from './assets/bg.jpg';
import {Easing, Dimensions} from 'react-native';

const windowWitdh = Dimensions.get('window').width;

// import {Container, BackgroundImage} from './styles';

const Login: React.FC = () => {
  const [heightImage] = useState(new Animated.Value(0));
  const [radiusImage] = useState(new Animated.Value(0));
  const [widthImage] = useState(new Animated.Value(windowWitdh));

  const startAnimation = () => {
    Animated.timing(heightImage, {
      toValue: 200,
      duration: 500,
      easing: Easing.linear,
    }).start();

    Animated.timing(radiusImage, {
      toValue: 800,
      duration: 500,
      easing: Easing.linear,
    }).start();

    Animated.timing(widthImage, {
      toValue: 700,
      duration: 500,
      easing: Easing.linear,
    }).start();
  };
  return (
    <>
      {/* <BackgroundImage style={[{top: heightImage}]} source={bg} /> */}
      <Container>
        {/* <Animated.View
          style={[
            {
              // position: 'absolute',
              // borderRadius: radiusImage,
              borderBottomLeftRadius: radiusImage,
              borderBottomRightRadius: radiusImage,
              bottom: heightImage,
              height: '100%',
              width: '300%',
              backgroundColor: 'red',
              alignSelf: 'center',
            },
          ]}> */}
        <Animated.Image
          style={[
            {
              position: 'absolute',
              // borderRadius: radiusImage,

              bottom: heightImage,
              width: '80%',
              height: '30%',
              backgroundColor: 'red',
              resizeMode: 'center',
              borderBottomLeftRadius: radiusImage,
              borderBottomRightRadius: radiusImage,
            },
          ]}
          source={bg}
        />
        {/* <BackgroundImage source={bg} />
        </Animated.View> */}

        <ButtonLogin onClick={() => startAnimation()}>SIGN IN</ButtonLogin>
      </Container>
    </>
  );
};

export default Login;
