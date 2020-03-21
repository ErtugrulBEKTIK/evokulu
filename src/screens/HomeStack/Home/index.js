import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from "react-native-linear-gradient";

export default class SignIn extends Component {

  render() {
    return (
      <SafeAreaView style={s.container}>
        <LinearGradient style={s.container}
                        start={{x: 0, y: 0}} end={{x: 1, y: 0.9}}
                        colors={['#EEECFF', '#ffffff']}
        >


          <LottieView  source={require('~/assets/animations/2837-trophy-animation')} autoPlay  />
        </LinearGradient>
      </SafeAreaView>
    );
  }
}


const s = StyleSheet.create({
  container: {
    flex: 1,
  }
});