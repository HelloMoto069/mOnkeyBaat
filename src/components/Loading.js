import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import LottieFiles from './LottieFiles';


export default function Loading() {
  return (
    <View style={styles.loadingContainer}>

      <LottieFiles loop={false} source={require('../lottie/86577-meditating-monkey.json')}
      style={{ height: 200, alignSelf: 'center', }} />

      <ActivityIndicator size='large' color='#6646ee' />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});