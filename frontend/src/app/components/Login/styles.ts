import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import {Animated, Dimensions} from 'react-native';

// const windowWitdh = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  /* background: red; */
`;

// export const BackgroundImage = styled(Animated.Image)`
//   width: 100%;
//   height: 100%;
//   position: absolute;
// `;

export const styles = StyleSheet.create({
  AnimatedImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'red',
  },
});

export const BackgroundImage = styled.Image`
  height: 100%;
  width: 100%;
`;
