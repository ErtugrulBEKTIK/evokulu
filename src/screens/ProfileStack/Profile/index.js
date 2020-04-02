import React, {Component} from 'react';
import { Container, SettingsItem} from '~/components/my-base'
import NavigationService from '~/NavigationService';
import { Info, Bell, User, Support, Lock } from "~/assets/images/vectors";
import {StyleSheet, View} from "react-native";
import {res} from "~/helpers";

export default class Profile extends Component {

  render() {
    return (
      <Container noPadding>
        <View style={s.container}>
          <SettingsItem text="Hesabım" first ><User /></SettingsItem>
          <SettingsItem text="Bildirimler" ><Bell /></SettingsItem>
          <SettingsItem text="Gizlilik" ><Lock /></SettingsItem>
          <SettingsItem text="Yardım" ><Support /></SettingsItem>
          <SettingsItem text="Genel"><Info /></SettingsItem>
        </View>
      </Container>
    );
  }
}


const s = StyleSheet.create({
  container: {
    paddingTop: res(50)
  }
});