import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ListItem, Avatar } from '@rneui/themed';
import { Icon } from "@rneui/themed";
import firestore from '@react-native-firebase/firestore';


const ChatList = ({ id, chatName, enterChat }) => {

  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore().collection('chats').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => setChatMessages(
      snapshot.docs.map(doc => ({
        data: doc.data(),
      }))
    ));

    return unsubscribe;
  })

  return (
    <>
      <ListItem
        onPress={() => enterChat(id, chatName)}
        key={id}
        bottomDivider
      >
        <Avatar
          size={47}
          rounded
          source={{
            uri: 'https://raw.githubusercontent.com/HelloMoto069/Clayfin_Project/main/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: '700', fontSize: 21 }}>
            {chatName}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
            {/* {chatMessages?.[0]?.email} : {chatMessages?.[0]?.message} */}
            <Text>Text will be here</Text>
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </>
  )
}

export default ChatList;