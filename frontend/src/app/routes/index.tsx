import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/Login';
import Register from '../components/Register';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

export default Routes;
