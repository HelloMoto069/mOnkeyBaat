import React, { createContext, useState } from 'react';
import { Keyboard } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/database';
import * as ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';





export const AuthContext = createContext({});



export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [fileUri ,setFileUri] = useState('')

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,

                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                    }
                },

                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                    }
                },

                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.error(e);
                    }
                },
                createChat: async (input, navigation) => {
                    await firestore().collection('chats').add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        chatName: input
                    }).then(() => { navigation.goBack(); }).catch((error) => alert(error))
                },

                sendMessage: (input, setInput, route) => {
                    firestore().collection('chats').doc(route.params.id).collection('messages').add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        message: input,
                        Photos: fileUri,
                        // displayName: auth().currentUser.displayName,
                        email: auth().currentUser.email,
                        // photoURL: auth().currentUser.photoURL,
                    })
                    console.log(input);
                    Keyboard.dismiss();
                    setInput('');
                    setFileUri('');
                },

                groupDelete: (id) => {
                    firestore().collection('chats').doc(id).delete()
                },

                launchImageLibrary: () => {
                    console.log('called');
                    let options = {
                        storageOptions: {
                            skipBackup: true,
                            path: 'images'
                        }
                    };
                    ImagePicker.launchImageLibrary(options, response => {
                        // console.log('Response = ', response);
                        if (response.didCancel) {
                            console.log('User cancelled image picker');
                        } else if (response.error) {
                            console.log('ImagePicker Error: ', response.error);
                        }
                        else {
                            let source = response;
                            setFileUri(source.assets[0].uri);
                        }
                    });
                },

                launchCamera: () => {
                    let options = {
                        storageOptions: {
                            skipBackup: false,
                            path: 'images',
                        },
                    };
                    ImagePicker.launchCamera(options, (res) => {
                        // console.log('Response = ', res);
                        if (res.didCancel) {
                            console.log('User cancelled image picker');
                        } else if (res.error) {
                            console.log('ImagePicker Error: ', res.error);
                        } else if (res.customButton) {
                            console.log('User tapped custom button: ', res.customButton);
                            alert(res.customButton);
                        } else {
                            let source = res;
                            setFileUri(source.assets[0].uri)
                        }
                    });
                },




            }}
        >
            {children}
        </AuthContext.Provider>
    );
};