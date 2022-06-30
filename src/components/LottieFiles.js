import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';


const LottieFiles = ({...rest}) => {
  return (
    <View>
       <LottieView
        style={styles.lottie}
        autoPlay
        speed={1.7}
        loop={true}
        {...rest}
      />
    </View>
  )
}

export default LottieFiles

const styles = StyleSheet.create({
  lottie: {
    height: 100,
    alignSelf: 'center',
  },
})