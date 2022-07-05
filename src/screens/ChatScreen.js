import React, { useState, useLayoutEffect, useContext } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View, ScrollView, TextInput } from 'react-native';
import { Avatar, Icon } from '@rneui/themed';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../navigation/AuthProvider';



const ChatScreen = ({ navigation, route }) => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const { sendMessage } = useContext(AuthContext);
    const { launchImageLibrary } = useContext(AuthContext);

    // const gallsend = async () => {
    //     await launchImageLibrary().then(() => sendMessage())
    // }
    const gallsend = () => {
        launchImageLibrary();
        sendMessage();
    }

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
        });

        const unsubscribe = firestore().collection('chats').doc(route.params.id).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => setMessages(
            snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            }))
        ));
        console.log(messages);
        return unsubscribe;

    }, [navigation, route]);




    return (
        <>
            <ScrollView>
                {messages.map(({ id, data }) => (
                    data.email === auth().currentUser.email ? (
                        <View key={id} style={styles.reciever}>
                            <Avatar rounded position='absolute' bottom={-15} size={27} left={-5} source={{
                                uri: 'https://raw.githubusercontent.com/HelloMoto069/Clayfin_Project/main/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
                            }} />

                            {data.Photos.length > 0 ? (<Image resizeMode='contain' style={{ width: 200, height: 200 }} source={{ uri: data.Photos }} />) : (<Text style={styles.recieverText}>{data.message}</Text>)}

                            {/* <Text style={styles.recieverText}>{data.message}</Text>
                            <Image style ={{width:200,height:200}} source={{uri : data.Photos}}/> */}
                        </View>
                    ) : (
                        <View style={styles.sender}>
                            <Avatar position='absolute' bottom={-15} size={27} left={-5} rounded source={{
                                uri: 'https://raw.githubusercontent.com/HelloMoto069/Clayfin_Project/main/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
                            }} />
                            <Text style={styles.senderText}>{data.message}</Text>
                            <Text style={styles.senderName}>{data.email.split('@')[0]}</Text>
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
                    onChangeText={(text) => setInput(text)} />
                <TouchableOpacity onPress={() => gallsend()} style={{ marginRight: 17 }}>
                    <Icon name='camera' type='font-awesome' color='black' size={27} />
                </TouchableOpacity>


                {input.length > 0 ? (<TouchableOpacity
                    onPress={() => sendMessage(input, setInput, route)}
                // onPress={sendMessage}
                >
                    <Icon name='send' type='font-awesome' color='#2C6BED' size={27} />
                </TouchableOpacity>) : (<TouchableOpacity>
                    <Icon name='send' type='font-awesome' color='#2C6BED' size={27} />
                </TouchableOpacity>)}

            </View>
        </>
    )
}

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