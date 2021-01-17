import React, {useRef, useState} from 'react';
import {Alert, Keyboard, View} from 'react-native';
import {NavigationContainerRef} from '@react-navigation/native';
import Header from '../../shared/Header';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {createUser} from '../../services/requests/user';
import Lottie from 'lottie-react-native';
import sucess from './assets/sucess.json';

import {Container, ContentInput, Error, styles} from './styles';
import Animated, {Easing} from 'react-native-reanimated';

const FormSchema = Yup.object().shape({
  login: Yup.string()
    .required('Insira um login')
    .min(4, 'O login deve ter ao menos 4 caracteres!'),
  password: Yup.string()
    .required('Insira um login')
    .min(6, 'A senha deve ter ao menos 6 caracteres!'),
  confirmPassword: Yup.string()
    .required('Insira um login')
    .min(6, 'A senha deve ter ao menos 6 caracteres!'),
});

interface FomrProps {
  login: string;
  password: string;
  confirmPassword: string;
}

interface RegisterProps {
  navigation: NavigationContainerRef;
}

const Register: React.FC<RegisterProps> = ({navigation}) => {
  const [animatedValue] = useState(new Animated.Value(0));
  const animationRef = useRef<Lottie>(null);
  const [initialValues] = useState({
    login: '',
    password: '',
    confirmPassword: '',
  });

  const stratAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 300,
      duration: 400,
      easing: Easing.linear,
    }).start();
  };

  const hideForm = animatedValue.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0],
  });

  const handleSubmit = async (values: FomrProps) => {
    Keyboard.dismiss();
    if (values.password === values.confirmPassword) {
      createUser(values.login, values.password)
        .then((response) => {
          console.log('foi', response);
          if (response) {
            stratAnimation();
            if (animationRef) {
              setTimeout(function () {
                animationRef.current?.play();
              }, 550);
            }
            setTimeout(function () {
              navigation.navigate('Login');
            }, 2000);
          }
        })
        .catch((err) => {
          console.log('err', err);
          Alert.alert('Erro ao criar com sucesso!');
        });
    } else {
      Alert.alert('Por favor, insira duas senhas iguais!');
    }
  };

  return (
    <>
      <Header screenName="NOVA CONTA" navigation={navigation} />
      <Container>
        <Lottie source={sucess} ref={animationRef} />
        <Animated.View
          style={[
            styles.AnimatedView,
            {
              opacity: hideForm,
            },
          ]}>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={FormSchema}>
            {({handleChange, errors, touched, handleSubmit, values}) => (
              <View>
                <ContentInput marginBottom={4}>
                  <Input
                    placeholder="insira um login"
                    onChangeText={handleChange('login')}
                    value={values.login}
                  />
                  {errors.login && touched.login ? (
                    <Error>{errors.login}</Error>
                  ) : null}
                </ContentInput>
                <ContentInput marginBottom={4}>
                  <Input
                    secureTextEntry
                    placeholder="insira uma senha"
                    onChangeText={handleChange('password')}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <Error>{errors.password}</Error>
                  ) : null}
                </ContentInput>
                <ContentInput marginBottom={6}>
                  <Input
                    secureTextEntry
                    placeholder="confirme a senha"
                    onChangeText={handleChange('confirmPassword')}
                    value={values.confirmPassword}
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <Error>{errors.confirmPassword}</Error>
                  ) : null}
                </ContentInput>
                <Button type="secondary" onClick={handleSubmit}>
                  SALVAR
                </Button>
              </View>
            )}
          </Formik>
        </Animated.View>
      </Container>
    </>
  );
};

export default Register;
