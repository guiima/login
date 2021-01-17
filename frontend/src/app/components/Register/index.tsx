import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {NavigationContainerRef} from '@react-navigation/native';
import Header from '../../shared/Header';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {createUser} from '../../services/requests/user';

import {Container, ContentInput, Error} from './styles';

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
  const [initialValues] = useState({
    login: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (values: FomrProps) => {
    if (values.password === values.confirmPassword) {
      createUser(values.login, values.password)
        .then((response) => {
          console.log('foi', response);
          if (response) {
            Alert.alert('Conta criada com sucesso!');
            navigation.navigate('Login');
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
      </Container>
    </>
  );
};

export default Register;
