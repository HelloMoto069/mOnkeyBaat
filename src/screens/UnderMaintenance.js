import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieFiles from '../components/LottieFiles';


const UnderMaintenance = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{color: 'red', fontWeight: '400', fontSize: 40, marginBottom: 40}}>🚧 Oops.!! ⚠️</Text>
            <LottieFiles style={{ height: 170, alignSelf: 'center' }} source={require('../lottie/36572-under-maintenance.json')} />
            <Text style={{color: 'orange', fontWeight: '400', fontSize: 40, marginTop: 40}}>We're Sorry.!!</Text>
            <Text style={{color: 'black', fontWeight: '700', fontSize: 17}}>This Page is down for Maintenance.</Text>
            <Text style={{color: 'black'}}>We are working to get it back up and running as soon as possible.</Text>
            <Text style={{color: 'black', fontWeight: '700', }}>Please Check Back..!!</Text>
        </View>
    )
}

export default UnderMaintenance;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})