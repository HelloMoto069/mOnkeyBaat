import { StyleSheet, Text, View } from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import { Image, Input } from "@rneui/themed";
import { Button } from "@rneui/base";
import { db } from '../firebase';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';



const AddChatScreen = ({navigation}) => {

    const [input, setInput] = useState('');


    const createChat = async () => {
        // await db.collection('chats').add({
        //     chatName : input
        // }).then(() => {
        //     navigation.goBack();
        // }).catch((error) => alert(error))

       
        await firestore().collection('chats').add({
            chatName : input
        }).then(() => {navigation.goBack();}).catch((error) => alert(error))

    }

    useLayoutEffect(() => {
     navigation.setOptions({
        title: 'Add A New Chat',
        headerBackTitle: 'Chats',
     });
    }, [navigation])


  return (
    <View style={styles.container}>
      <LottieView
        style={{height: 100, alignSelf: 'center'}}
        source={require('../lottie/106068-chat.json')}
        autoPlay
        speed={1}
        loop={true}
      />
      <Input 
      placeholder='Enter a Chat Name'
      value={input}
      onChangeText={text => setInput(text)}
      leftIcon={{ type: 'antdesign', name: 'wechat' }}
      
      onSubmitEditing={createChat}
      />
      
      <Button
      onPress={createChat}
      title='Create New Chat' />
      
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 40,
      height : '100%',
    },

})