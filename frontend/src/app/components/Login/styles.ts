import {Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

const windowWitdh = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  background: ${theme.colors.backgroundColor};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const CreateAccountText = styled.Text`
  color: ${theme.colors.primaryTextColor};
  text-align: center;
`;

export const ContentForm = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const styles = StyleSheet.create({
  ViewBackgroundImage: {
    position: 'absolute',
  },
  Svg: {
    marginBottom: -30,
  },
  ButtonClose: {
    height: 40,
    width: 40,
    backgroundColor: theme.colors.backgroundColor,
    borderRadius: 20,
    position: 'absolute',
    bottom: 250,
    left: windowWitdh / 2 - 20,
    shadowColor: theme.colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  FormContent: {
    height: 200,
    width: '100%',
    position: 'absolute',
    zIndex: -1,
  },
});
