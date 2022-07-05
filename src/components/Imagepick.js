import React, { Component } from 'react';
import { StyleSheet, View, Button, Image, Text, PermissionsAndroid, } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

export default class Imagepick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileUri: '',
        };
    }

    launchCamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, res => {
            console.log('Response = ', res);
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                console.log('source', source.assets[0].uri);
                this.setState({
                    fileUri: source.assets[0].uri,
                });
            }
        });
    };

    launchImageLibrary = () => {
        console.log('called');
        let options = {
            storageOptions: {
                skipBackup: false,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                let source = response;
                console.log('source', source.assets[0].uri);
                this.setState({
                    fileUri: source.assets[0].uri,
                });
            }
        });
    };

    renderFileUri() {
        console.log(this.state.fileUri ? 'empty' : 'renderFileUri');
        if (this.state.fileUri) {
            return (
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={{ uri: this.state.fileUri }} />
                    <Image style={styles.img} source={{ uri: this.state.fileUri }} />
                </View>
            );
        } else {
            return (
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
                        }}
                    />
                </View>
            );
        }
    }

    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'App Camera Permission',
                    message: 'App needs access to your camera ',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.launchCamera();
                console.log('Camera permission given');
            } else {
                console.log('Camera permission denied');
                //return granted;
            }
        } catch (err) {
            console.warn(err);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="select image"
                    onPress={() => this.launchImageLibrary()}
                />
                <Text> file: {this.renderFileUri()}</Text>
                <Button
                    title="select image"
                    // onPress={() => this.requestCameraPermission()}
                    onPress={() => this.launchCamera()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    imgContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    img: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
    },
});