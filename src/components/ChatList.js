import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { ListItem, Avatar } from '@rneui/themed';
import { Icon } from "@rneui/themed";
import { Button } from "@rneui/base";
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigation/AuthProvider';



const ChatList = ({ id, chatName, enterChat, route }) => {

  const [chatMessages, setChatMessages] = useState([]);

  const { groupDelete } = useContext(AuthContext);


  useEffect(() => {
    const unsubscribe = firestore().collection('chats').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => setChatMessages(
      snapshot.docs.map(doc => ({
        data: doc.data(),
      }))
    ));
      //  console.log(chatMessages)
    return unsubscribe;
  },[])

  
  return (
    <>
      <ListItem.Swipeable
        onPress={() => enterChat(id, chatName)}
        key={id}
        bottomDivider
        rightContent={() => (
          <Button
            title="Delete for Everyone"
            onPress={() => groupDelete(id)}
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
          />
        )}
      >
        <Avatar
          size={47}
          rounded
          source={{
            uri: 'https://png.pngtree.com/element_our/png_detail/20181229/vector-chat-icon-png_302635.jpg',
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: '700', fontSize: 21 }}>
            {chatName}
          </ListItem.Title>
          {chatMessages.length>0?( <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
            {chatMessages?.[0]?.data.email.split('@')[0]} : {chatMessages?.[0]?.data.message}
            {/* <Text>Text will be here</Text> */}
          </ListItem.Subtitle> ):( <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
            <Text>Let's Chat..!!!</Text>
          </ListItem.Subtitle> )}
          {/* <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
            {chatMessages?.[0]?.data.email.split('@')[0]} : {chatMessages?.[0]?.data.message}
            <Text>Text will be here</Text>
          </ListItem.Subtitle> */}
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    </>
  )
}

export default ChatList;