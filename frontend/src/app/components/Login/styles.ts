import {Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

const windowWitdh = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const TesteButton = styled.TouchableOpacity`
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const CreateAccountText = styled.Text`
  color: ${theme.colors.PrimaryTextColor};
  text-align: center;
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
});
