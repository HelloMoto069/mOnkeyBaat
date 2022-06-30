import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';



export default function SignupScreen({navigation}) {

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
                placeholderText='Profile Picture Url (Optional)'
                onChangeText={userProfile => setImageUrl(userProfile)}
            />
            <FormButton disabled={!email || !password}
        buttonTitle='Register'
        onPress={() => register(email, password)}
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