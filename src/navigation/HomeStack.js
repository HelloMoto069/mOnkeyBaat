import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddChat from '../screens/AddChat';
import ChatList from '../components/ChatList';
import ChatScreen from '../screens/ChatScreen';
import UnderMaintenance from '../screens/UnderMaintenance';
import SettingScreen from '../screens/SettingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Imagepick from '../components/Imagepick';
import UserList from '../screens/UserList';
import UsersList0 from '../components/UsersList0';




const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2C6BED' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  headerTitleAlign: 'center',
};

export default function HomeStack() {

  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>

      <Stack.Screen name='Home' component={HomeScreen}
        options={{
          headerTitle: "mOnkeyBaat",
        }}
      />
      <Stack.Screen name='AddChat' component={AddChat}
        options={{
          headerTitle: "Create New Chat",
        }}
      />
      <Stack.Screen name='ChatList' component={ChatList} />

      <Stack.Screen name='ChatScreen' component={ChatScreen} />

      <Stack.Screen name='UnderMaintenance' component={UnderMaintenance} />

      <Stack.Screen name='Settings' component={SettingScreen} />

      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />

      <Stack.Screen name='UserList' component={UserList}
      options={{
        headerTitle: "All Users",
      }} />

      <Stack.Screen name='UserList0' component={UsersList0} />


      {/* Class Based */}

      <Stack.Screen name='Imgpck' component={Imagepick} /> 
      

    </Stack.Navigator>
  );
}
