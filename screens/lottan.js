import React from 'react';
import {Text, ScrollView} from 'react-native';

import LottieView from 'lottie-react-native';
// import { Cartcheck } from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Order() {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white', marginTop: 50}}>
      <LottieView
        style={{height: 400, alignSelf: 'center'}}
        source={require('../lottie/75986-monkey-emoji.json')}
        autoPlay
        speed={1}
        loop={true}
      />
    </ScrollView>
  );
}