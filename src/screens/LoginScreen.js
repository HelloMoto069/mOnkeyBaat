import React, { useState, useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
import { StatusBar } from 'expo-status-bar';
import { Image, Input } from "@rneui/themed";
import { Button } from "@rneui/base";



const Separator = () => (
    <View style={styles.separator} />
);




export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <Image source={{
                uri: 'https://thumbs.dreamstime.com/b/cartoon-chimpanzee-talking-illustration-47478718.jpg',
            }}
                style={{
                    width: 70, height: 78,
                }} />

            <Text style={styles.text}>Welcome to mOnkeyBaat</Text>
            <Separator />

            {/* <FormInput
                value={email}
                placeholderText='Email'
                onChangeText={userEmail => setEmail(userEmail)}
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}
            />
            
            <FormInput
                value={password}
                placeholderText='Password'
                onChangeText={userPassword => setPassword(userPassword)}
                secureTextEntry
            /> */}
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
                    onSubmitEditing={login}
                />
            </View>
            {/* <FormButton buttonTitle='Login' onPress={() => login(email, password)} />
            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.navButtonText}>New user? Join here</Text>
            </TouchableOpacity> */}
            <Separator />

            <Button containerStyle={styles.butts} onPress={() => login(email, password)} color="#2C6BED" title='Log-In' />
            {/* <Separator /> */}
            {/* <Button onPress={() => navigation.navigate('Signup')} containerStyle={styles.butts} type="outline" title='Register' /> */}
            <Separator />
            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.navButtonText}>New user? Register here</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        marginBottom: 10
    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 17,
        color: '#2C6BED'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    inputContainer: {
        width: 300,
    },
    butts: {
        width: 150,

    },
});