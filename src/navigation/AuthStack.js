import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';


const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2C6BED' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
};


export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login'
    screenOptions={globalScreenOptions}
    >
      <Stack.Screen
        name='Login'
        component={LoginScreen}
      />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
}