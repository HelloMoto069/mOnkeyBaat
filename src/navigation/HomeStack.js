import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';



const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2C6BED' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function HomeStack({navigation}) {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  );
}
