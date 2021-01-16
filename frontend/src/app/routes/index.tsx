import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home';
import Teste from '../components/Teste';
import Login from '../components/Login';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Teste" component={Teste} />
  </Stack.Navigator>
);

export default Routes;
