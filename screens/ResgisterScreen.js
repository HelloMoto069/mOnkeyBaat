import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, TouchableOpacity, ToastAndroid } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Image, Input, Icon } from "@rneui/themed";
import { Button } from "@rneui/base";
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState, useContext } from 'react';
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from '../firebase';
import { AuthContext } from '../src/navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';






const Separator = () => (
  <View style={styles.separator} />
);


const ResgisterScreen = ({ navigation }) => {

  //   const router = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');



  const register = async () => {

    auth()
      .createUserWithEmailAndPassword(name, email, password,)
      .then((authUser) => {

        authUser.user.updateProfile({
          displayName: name,
          photoURL: imageUrl || 'https://raw.githubusercontent.com/HelloMoto069/Clayfin_Project/main/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',

        });

        console.log(authUser.user)

        navigation.navigate("Login")
        console.log('User account created & signed in!');
      })
      .catch(error => {
        alert(error.message);
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });

  }

  //For navigation Effect same as like useEffect only for IOS
  // useLayoutEffect(()=>{
  //   navigation.setOptions({
  //     headerBackTitle: 'Back to Login'
  //   });
  // }, [navigation])


  return (
    <>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>

        <View style={styles.container}>
          <StatusBar style="light" />
          {/* <Text style={{ marginBottom: 29, fontWeight: 'bold', fontSize: 21, }}>
            Create mOnkeyBaat Account
          </Text> */}
          <Image source={{
            uri: 'https://thumbs.dreamstime.com/b/cartoon-chimpanzee-talking-illustration-47478718.jpg',
          }}
            style={{
              width: 70, height: 78,
            }} />
          <Separator />
          <Text style={styles.text}>Welcome to mOnkeyBaat</Text>
          <Separator />

          <View style={styles.inputContainer}>
            <Input
              placeholder='Enter Your Full Name'
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              autoFocus
              type='email'
              value={email}
              onChangeText={(e) => setEmail(e)}
            />

            <Input
              placeholder='Enter Your E-Mail'
              leftIcon={{ type: 'entypo', name: 'email' }}
              type='text'
              value={name}
              onChangeText={(e) => setName(e)}
            />

            <Input
              placeholder='Create Password'
              leftIcon={{ type: 'entypo', name: 'lock' }}
              secureTextEntry
              type='password'
              value={password}
              onChangeText={(e) => setPassword(e)}
            />

            <Input
              placeholder='Profile Picture Url (Optional)'
              leftIcon={{ type: 'font-awesome', name: 'image' }}
              type='text'
              value={imageUrl}
              onChangeText={(e) => setImageUrl(e)}
              onSubmitEditing={register}
            />

            <Text>{message}</Text>

          </View>


          <Button containerStyle={styles.butts} color="#2C6BED" title='Register' onPress={register} />
          <Separator />
          {/* <Button onPress={() => navigation.navigate('Home')} containerStyle={styles.butts} type="outline" title='Home' /> */}
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.navButtonText}>Already Account? Login Here</Text>
          </TouchableOpacity>
        </View>


      </KeyboardAvoidingView>

    </>
  )
}

export default ResgisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
  },
  butts: {
    width: 150,
    marginTop: 10,

  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  navButton: {
    marginTop: 15
  },
  navButtonText: {
    fontSize: 17,
    color: '#2C6BED'
  },
  text: {
    fontSize: 17,
    marginBottom: 10
  },
})



