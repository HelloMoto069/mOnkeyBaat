import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import firestore from '@react-native-firebase/firestore';
import { ListItem, Avatar } from '@rneui/themed';


const UsersList0 = ({ uid, name, email, dp }) => {

    // const [users0, setUsers0] = useState([])

    // useEffect(() => {
    //     const liist = firestore().collection('chats').onSnapshot(snapshot => {
    //         setUsers0(snapshot.docs.map(doc => ({
    //             data: doc.data(),
    //         })))
    //         console.log(snapshot.docs)
    //     })
    //     return liist;

    // }, [])


    return (
        <>
            <ListItem
                // onPress={() => enterChat(id, chatName)}
                key={uid}
                bottomDivider
            >
                <Avatar
                    size={47}
                    rounded
                    source={{
                        uri: dp,
                    }}
                />
                <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: '700', fontSize: 21 }}>
                        {name}
                    </ListItem.Title>
                    <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                        <Text>{email}</Text>
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            
        </>
    )
}

export default UsersList0

const styles = StyleSheet.create({})