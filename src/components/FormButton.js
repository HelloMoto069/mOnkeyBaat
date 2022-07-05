import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

export default function FormButton({ buttonTitle, disable, ...rest }) {
    return (
        <TouchableOpacity style={disable ? styles.buttonContainerD : styles.buttonContainerE} {...rest}>
            <Text style={disable ? styles.buttonTextD : styles.buttonTextE}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    buttonContainerE: {
        marginTop: 10,
        width: windowWidth / 2,
        height: windowHeight / 15,
        backgroundColor: '#2C6BED',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 17
    },
    buttonTextE: {
        fontSize: 17,
        color: 'white'
    },
    buttonContainerD: {
        marginTop: 10,
        width: windowWidth / 2,
        height: windowHeight / 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 17,
        borderWidth: 1,
        borderColor: '#2C6BED'
    },
    buttonTextD: {
        fontSize: 17,
        color: '#2C6BED'
    },

});