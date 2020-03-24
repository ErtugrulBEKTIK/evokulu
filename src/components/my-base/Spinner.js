import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import {res} from "~/helpers";
import LottieView from "lottie-react-native";

export default class DismissKeyboardView extends Component {
  render() {
    return (
      <View style={s.spinnerC}>
        <LottieView style={s.spinner} source={require('~/assets/animations/spinner.json')} autoPlay loop />
      </View>
    );
  }
}
const s = StyleSheet.create({
  spinner: {
    height: res(50)
  },
  spinnerC: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});