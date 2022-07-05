import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, KeyboardAvoidingView, ScrollView, TextInput, Keyboard } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { Avatar, Icon } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';






const ChatScreen = ({ navigation, route }) => {


    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);


    useLayoutEffect(() => {
        navigation.setOptions({
            // title: 'ChatScreen',
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
            headerTitle: () => (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Avatar rounded source={{
                        uri: 'https://raw.githubusercontent.com/HelloMoto069/Clayfin_Project/main/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
                    }} />
                    <Text style={{ marginLeft: 17, color: 'white', fontWeight: '700', fontSize: 17 }}>{route.params.chatName}</Text>
                </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 90,
                    marginRight: 29,
                }}>
                    <TouchableOpacity>
                        <Icon name='phone' type='font-awesome' color='white' size={27} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='videocam' type='ionicon' color='white' size={27} />
                    </TouchableOpacity>
                </View>
            ),
        });

    }, [navigation]);


    const sendMessage = () => {
        firestore().collection('chats').doc(route.params.id).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            // displayName: auth().currentUser.displayName,
            email: auth().currentUser.email,
            // photoURL: auth().currentUser.photoURL,
        })
        console.log(input);
        Keyboard.dismiss();
        setInput('');
    }


    
    useLayoutEffect(() => {
        const unsubscribe = firestore().collection('chats').doc(route.params.id).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => setMessages(
            snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            }))
        ));

        return unsubscribe;

    }, [route]);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <StatusBar style="light" />
            <KeyboardAvoidingView style={styles.container}
                keyboardVerticalOffset={90} >

                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                <>
                    <ScrollView>
                        {messages.map(({ id, data }) => (
                            data.email === auth().currentUser.email ? (
                                <View key={id} style={styles.reciever}>
                                    <Avatar rounded position='absolute' bottom={-15} size={27} left={-5} source={{
                                        uri: 'https://raw.githubusercontent.com/HelloMoto069/Clayfin_Project/main/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
                                    }} />
                                    <Text style={styles.recieverText}>{data.message}</Text>
                                </View>
                            ) : (
                                <View style={styles.sender}>
                                    <Avatar position='absolute' bottom={-15} size={27} left={-5} rounded source={{
                                        uri: 'https://raw.githubusercontent.com/HelloMoto069/Clayfin_Project/main/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
                                    }} />
                                    <Text style={styles.senderText}>{data.message}</Text>
                                    <Text style={styles.senderName}>{data.email}</Text>
                                </View>
                            )
                        ))}
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput
                            multiline
                            style={styles.textInput}
                            placeholder='Type Your Message'
                            value={input}
                            onSubmitEditing={sendMessage}
                            onChangeText={(text) => setInput(text)} />
                        {input.length > 0 ? (<TouchableOpacity onPress={sendMessage}>
                            <Icon name='send' type='font-awesome' color='#2C6BED' size={27} />
                            {/* <Icon name='send' type='font-awesome' color='#2B68E6' size={27} /> */}
                        </TouchableOpacity>) : (<TouchableOpacity>
                            <Icon name='send' type='font-awesome' color='#2C6BED' size={27} />
                            {/* <Icon name='send' type='font-awesome' color='#2B68E6' size={27} /> */}
                        </TouchableOpacity>)}

                    </View>
                </>
                {/* </TouchableWithoutFeedback> */}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


//Need to be change in Avatar

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 17,
    },
    textInput: {
        bottom: 0,
        // height: 40,
        flex: 1,
        marginRight: 13,
        backgroundColor: '#ECECEC',
        padding: 11,
        color: 'grey',
        borderRadius: 17,
        fontSize: 17,
        overflow: 'scroll',
        maxHeight: 130,
    },
    reciever: {
        padding: 15,
        backgroundColor: '#ECECEC',
        alignSelf: 'flex-end',
        borderRadius: 20,
        marginRight: 15,
        margin: 15,
        marginBottom: 20,
        maxWidth: '70%',
        position: 'relative',
    },
    recieverText: {
        color: 'black',
        fontWeight: '500',
        marginLeft: 10,
        // marginBottom: 15,
    },
    sender: {
        padding: 15,
        backgroundColor: '#2B68E6',
        alignSelf: 'flex-start',
        borderRadius: 20,
        margin: 15,
        // marginRight: 15,
        // marginBottom: 20,
        maxWidth: '70%',
        position: 'relative',
    },
    senderText: {
        color: 'white',
        fontWeight: '500',
        marginLeft: 10,
        marginBottom: 15,
    },
    senderName: {
        left: 10,
        paddingRight: 10,
        fontSize: 10,
        color: 'white',
    }
})