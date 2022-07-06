import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage'



export default function SignupScreen({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');



    const { register } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <Text style={styles.text}>🙏 Welcome to mOnkeyBaat 🙏</Text>
            <FormInput
                value={name}
                placeholderText='Name'
                onChangeText={userName => setName(userName)}
                autoCorrect={false}
            />
            <FormInput
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
                secureTextEntry={true}
            />
            <FormInput
                value={imageUrl}
                placeholder='Profile Picture Url (Optional)'
                onChangeText={userProfile => setImageUrl(userProfile)}
                
            />

            <FormButton disable={!email || password.length < 6}
                buttonTitle='Register'
                onPress={() => register(name.trim(), email.trim(), password, imageUrl)}
            />
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
    }
});