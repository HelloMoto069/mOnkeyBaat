import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
import { StatusBar } from 'expo-status-bar';
import { Image, Input, Icon } from "@rneui/themed";
import { Button } from "@rneui/base";


const Separator = () => (
    <View style={styles.separator} />
);


export default function SignupScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');



    const { register } = useContext(AuthContext);



    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Create an account</Text>
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
            <FormButton
                buttonTitle='Signup'
                onPress={() => register(email, password)}
            /> */}

            <StatusBar style="light" />
            <Image source={{
                uri: 'https://thumbs.dreamstime.com/b/cartoon-chimpanzee-talking-illustration-47478718.jpg',
            }}
                style={{
                    width: 70, height: 78,
                }} />

            <Text style={styles.text}>Welcome to mOnkeyBaat</Text>
            <Separator />

            <View style={styles.inputContainer}>
                <Input
                    placeholder='Enter Your Full Name'
                    leftIcon={{ type: 'font-awesome', name: 'pencil' }}
                    autoFocus
                    type='email'
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                />

                <Input
                    placeholder='Enter Your E-Mail'
                    leftIcon={{ type: 'entypo', name: 'email' }}
                    type='text'
                    value={name}
                    onChangeText={(e) => setName(e)}
                />

                <Input
                    placeholder='Create Password'
                    leftIcon={{ type: 'entypo', name: 'lock' }}
                    secureTextEntry
                    type='password'
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                />

                <Input
                    placeholder='Profile Picture Url (Optional)'
                    leftIcon={{ type: 'font-awesome', name: 'image' }}
                    type='text'
                    value={imageUrl}
                    onChangeText={(e) => setImageUrl(e)}
                // onSubmitEditing={register}
                />


            </View>


            <Button containerStyle={styles.butts} color="#2C6BED" title='Register' onPress={() => register(name, email, password, imageUrl)} />
            <Separator />
            {/* <Button onPress={() => navigation.navigate('Login')} containerStyle={styles.butts} type="outline" title='Already Account Login' /> */}
            {/* <Separator /> */}

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.navButtonText}>Already Account? Login Here</Text>
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
        marginTop: 10,

    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 17,
        color: '#2C6BED'
    },
});