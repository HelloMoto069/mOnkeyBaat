// import React, { useState, useContext } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import FormButton from '../components/FormButton';
// import { AuthContext } from '../navigation/AuthProvider';



// export default function HomeScreen({navigation}) {

//     const { logout } = useContext(AuthContext);


//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Home Screen</Text>
//       <FormButton buttonTitle='Logout' onPress={() => logout()} />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f1'
//   },
//   text: {
//     fontSize: 20,
//     color: '#333333'
//   }
// });




import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useLayoutEffect, useEffect, useContext } from 'react';
import CustomListItem from '../components/CustomListItem';
import { Avatar } from '@rneui/themed';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { AuthContext } from '../navigation/AuthProvider';
import { Button } from "@rneui/base";
import {firebase} from '@react-native-firebase/auth';







const HomeScreen = ( { navigation } ) => {

  const { logout } = useContext(AuthContext);

  // const signOutUser = async () => {
  //   // await firebase
  //     auth()
  //     .signOut()
  //     .then(() => {
  //       navigation.navigate("Login")
  //     })
  //     .catch((error) => {
  //       alert(error)
  //     })

  // }



  //For navigation Effect same as like useEffect only for IOS
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'mOnkeyBaat',
      headerStyle: {
        backgroundColor : '#2C6BED'
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerLeft: () => (
        <View style={{marginLeft: 21}}>
          <TouchableOpacity activeOpacity={0.7}>
          <Avatar rounded source={{uri: auth?.currentUser?.photoURL}}/>
          </TouchableOpacity>

        </View>
      ),
    }) 
  }, [])


  return (
    <>
    <SafeAreaView>
    <ScrollView>
      <CustomListItem/>
      <Button 
      onPress={() => logout()} 
      // onPress={signOutUser}
      containerStyle={styles.butts} 
      type="outline" title='Logout' />
    </ScrollView>
    </SafeAreaView>
    </>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})