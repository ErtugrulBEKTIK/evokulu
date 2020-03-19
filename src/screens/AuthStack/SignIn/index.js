import React, { Component } from 'react';
import { Text, Image, View, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import s from './styles';

import SignInForm from './SignInForm';

export default class SignIn extends Component {
  render() {
    return (
      <View style={s.container}>
        <View style={s.headBackground} />

        <KeyboardAvoidingView behavior={"position"}>
          <View style={s.logoContainer}>
            <Image style={s.logo} source={require('../../../assets/images/logo2.png')}/>
          </View>
          <ScrollView contentContainerStyle={s.scrollView}>
            <View style={s.loginArea}>
              <Text style={s.loginAreaTitle}>TÜGVA Portal Giriş</Text>
              <SignInForm/>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}