import React, { useState, useContext, useLayoutEffect, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Icon, Input } from '@rneui/themed';
import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
import LottieFiles from '../components/LottieFiles';




const AddChat = ({ navigation }) => {

    const [input, setInput] = useState('');


    const { createChat } = useContext(AuthContext);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View >
                    <TouchableOpacity style={{
                        marginLeft: 11, flexDirection: 'row',
                        justifyContent: 'space-between', marginTop: 7,
                    }}
                        activeOpacity={0.4}
                        onPress={() => { navigation.goBack(); }}
                    >
                        <Icon
                            name='chevron-left'
                            type='font-awesome'
                            color='white'
                        />
                        <Text style={{ color: 'white', marginLeft: 7, fontWeight: '700' }}>Chats</Text>
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [navigation])


    return (
        <>
            <View style={styles.container} >
                <LottieFiles source={require('../lottie/106068-chat.json')} />
                <Input
                    placeholder='Enter a Chat Name'
                    value={input}
                    onChangeText={text => setInput(text)}
                    leftIcon={{ type: 'antdesign', name: 'wechat' }}
                    onSubmitEditing={() => createChat(input, navigation)}
                />

                <FormButton buttonTitle='Create' onPress={() => createChat(input, navigation)} />

            </View>
        </>
    )
}

export default AddChat

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: '100%',
        padding: 40,

    },
})