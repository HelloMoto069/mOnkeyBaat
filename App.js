import React, {useState} from 'react';
import Providers from './src/navigation/Index';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LottieFiles from './src/components/LottieFiles';


export default function App() {

  const [flag, setFlag] = useState(false);

  return (

//   <>
//  {!flag ?
//   <LottieFiles duration={1700} loop={false} source={require('./src/lottie/86577-meditating-monkey.json')}
//   style={{height: 200, alignSelf: 'center',  }}
//   onAnimationFinish={() => setFlag(!flag)} 
//   /> :
//   <Providers /> }
//   </>

<Providers />

  )
}






// import 'react-native-gesture-handler';
// import { StyleSheet } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import LoginScreen from './screens/LoginScreen';
// import ResgisterScreen from './screens/ResgisterScreen';
// import { ToastProvider } from 'react-native-toast-notifications'
// import HomeScreen from './screens/HomeScreen';
// import { createStackNavigator } from '@react-navigation/stack';
// import AddChatScreen from './screens/AddChatScreen';
// import ChatScreen from './screens/ChatScreen';
// import UnderMaintenance from './screens/UnderMaintenance';




// // const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();


// const globalScreenOptions = {
//     headerStyle: { backgroundColor: '#2C6BED' },
//     headerTitleStyle: { color: 'white' },
//     headerTintColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
// };


// const App = () => {



//     return (
      
//         <>
//         <ToastProvider>
//         <NavigationContainer >
//             <Stack.Navigator screenOptions={globalScreenOptions}>
//                 <Stack.Screen name='Login' component={LoginScreen}
//                     options={{
//                         headerTitleAlign: 'center'
//                     }}
//                 />
//                 <Stack.Screen name='Register' component={ResgisterScreen}
//                     options={{
//                         headerTitleAlign: 'center',
//                     }}
//                 />
//                 <Stack.Screen name='Home' component={HomeScreen}
//                     options={{
//                         headerTitleAlign: 'center'
//                     }}
//                 />
//                 <Stack.Screen name='AddChat' component={AddChatScreen}
//                     options={{
//                         headerTitleAlign: 'center'
//                     }}
//                 />
//                 <Stack.Screen name='ChatScreen' component={ChatScreen}
//                     options={{
//                         headerTitleAlign: 'center'
//                     }}
//                 />
//                 <Stack.Screen name='UnderMaintenance' component={UnderMaintenance}
//                     options={{
//                         headerTitleAlign: 'center',
//                         headerTitle: '⚠️ Under Maintenance ⚠️'
//                     }}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//         </ToastProvider>
//         </>


//     )
// }

// export default App

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });





