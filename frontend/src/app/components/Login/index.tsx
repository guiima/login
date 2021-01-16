import React, {useState} from 'react';
import bg from './assets/bg.jpg';
import ButtonLogin from '../../shared/Button';

import {Container, styles, BackgroundImage} from './styles';
import Animated, {Easing} from 'react-native-reanimated';
// import {Image, View} from 'react-native';
import SGV, {Image, Circle, ClipPath} from 'react-native-svg';
import {Dimensions} from 'react-native';

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

  return (
    <>
      <Animated.View
        style={[
          {
            position: 'absolute',
            bottom: heightImage,
          },
        ]}>
        <SGV
          style={{marginBottom: -30}}
          height={windowHeight + 50}
          width={windowWitdh + 5}>
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
        {/* <BackgroundImage source={bg} /> */}
      </Animated.View>
      <Container>
        <ButtonLogin onClick={() => stratAnimation()}>Login</ButtonLogin>
      </Container>
    </>
  );
};
export default Login;
