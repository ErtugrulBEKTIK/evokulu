import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';

export default class SignIn extends Component {

  render() {
    return (
      <SafeAreaView style={s.container}>
        <Text style={s.text}>Denemeee</Text>
        <LottieView source={require('~/assets/animations/b')} autoPlay loop={false} />
      </SafeAreaView>
    );
  }
}


const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontFamily: 'ComicSansMS',
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});