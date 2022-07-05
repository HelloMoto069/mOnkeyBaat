import React, { useContext, useLayoutEffect, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import { Avatar } from '@rneui/themed';
import LottieFiles from '../components/LottieFiles';
import firestore from '@react-native-firebase/firestore';
import ChatList from '../components/ChatList';
import { Icon, SpeedDial } from "@rneui/themed";






export default function HomeScreen({ navigation, route }) {

  const [chats, setChats] = useState([]);

  const [open, setOpen] = useState(false);

  // const { enterChat } = useContext(AuthContext);
  
  const { logout } = useContext(AuthContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 21, }}>
          <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')}
            activeOpacity={0.7}>
            {/* <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} /> */}
            <Avatar rounded source={{ uri: 'https://raw.githubusercontent.com/HelloMoto069/Clayfin_Project/main/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png' }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{ marginRight: 21, }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            activeOpacity={0.7}>
            {/* <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} /> */}
            <Icon
              name='settings'
              type='material'
              color='white'
            />
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation])


  useEffect(() => {
    const unsubscribe =
      firestore().collection('chats').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setChats(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
        // console.log(snapshot.docs)
      });

    return unsubscribe;
  }, [])

  const enterChat = (id, chatName) => {
    // console.log("HS id Name",id, chatName)
    navigation.navigate('ChatScreen', {
      id, chatName,
    });
  };



  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrlvw}>
        {chats.map(({ id, data: { chatName } }) => (
          <ChatList
            key={id}
            id={id}
            chatName={chatName}
            enterChat={() => enterChat(id, chatName)}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddChat')}
        style={styles.newchat} >
        <LottieFiles source={require('../lottie/106068-chat.json')} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  newchat: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
    right: 40,
    alignSelf: "flex-end"
  },
  scrlvw: {
    backgroundColor: 'white',
    height: '100%',
  },
});