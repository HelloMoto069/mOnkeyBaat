import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Image, Input } from "@rneui/themed";
import { Button } from "@rneui/base";
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';
import { AuthContext } from '../src/navigation/AuthProvider';
import LottieView from 'lottie-react-native';





const Separator = () => (
  <View style={styles.separator} />
);

const LoginScreen = ({ navigation }) => {

  // const toast = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // const { login } = useContext(AuthContext);

  const signIn = async () => {
    // await firebase
    auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then((authUser) => {
        navigation.navigate("Home")
      })
      .catch((error) => {
        alert(error)
      })

  }


  // useEffect(()=>{
  //   const unsubscribe = auth.onAuthStateChanged((authUser)=>{
  //     if(authUser){
  //       navigation.replace('Home');
  //     }
  //   })
  //   return unsubscribe;
  // }, [])

  // useEffect(() => {
  //   const unsubscribe = auth().onAuthStateChanged((authUser)=>{
  //     console.log(authUser);

  //     // if(authUser){
  //     //   navigation.replace('Home');
  //     // }
  //   })
  //   return unsubscribe; // unsubscribe on unmount
  // }, []);



  return (
    <>

      <KeyboardAvoidingView behavior='padding' style={styles.container}>

        <StatusBar style="light" />
        {/* <Image source={{
          uri: 'https://thumbs.dreamstime.com/b/cartoon-chimpanzee-talking-illustration-47478718.jpg',
        }}
          style={{
            width: 70, height: 78,
          }} /> */}
        <LottieView
          style={{ height: 70, alignSelf: 'center' }}
          source={require('../lottie/75986-monkey-emoji.json')}
          autoPlay
          speed={1.7}
          loop={true}
        />
        <Separator />

        <Text style={styles.text}>Welcome to mOnkeyBaat</Text>
        <Separator />

        <View style={styles.inputContainer}>
          <Input
            placeholder='Enter your Email'
            leftIcon={{ type: 'entypo', name: 'email' }}
            autoFocus
            type='email'
            value={email}
            onChangeText={(e) => setEmail(e)}
          />

          <Input
            placeholder='Enter Password'
            leftIcon={{ type: 'entypo', name: 'lock' }}
            secureTextEntry
            type='password'
            value={password}
            onChangeText={(e) => setPassword(e)}
          // onSubmitEditing={login}
          />

          <Text>{message}</Text>

        </View>

        <Button containerStyle={styles.butts}
          // onPress={() => login(email, password)}
          onPress={signIn}
          color="#2C6BED" title='Log-In' />
        <Separator />
        {/* <Button onPress={() => navigation.navigate('Register')} containerStyle={styles.butts} type="outline" title='Register' /> */}
        {/* <Separator /> */}
        <Button onPress={() => navigation.navigate('Home')} containerStyle={styles.butts} type="outline" title='Current' />

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.navButtonText}>New user? Register here</Text>
        </TouchableOpacity>


      </KeyboardAvoidingView>

    </>
  )
}

export default LoginScreen;

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

  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 17,
    marginBottom: 10
  },
  navButton: {
    marginTop: 15
  },
  navButtonText: {
    fontSize: 17,
    color: '#2C6BED'
  },
})



