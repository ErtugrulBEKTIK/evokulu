import React, {Component} from 'react';
import { Container, SettingsItem} from '~/components/my-base'
import NavigationService from '~/NavigationService';

import {StyleSheet, View} from "react-native";
import {res} from "~/helpers";
import {inject, observer} from "mobx-react";

@inject('AuthStore')
@observer
export default class Profile extends Component {

  render() {
    return (
      <Container noPadding>
        <View style={s.container}>
          <SettingsItem text="Hesabım" first />
          <SettingsItem text="Bildirimler" />
          <SettingsItem text="Gizlilik" />
          <SettingsItem text="Yardım" />
          <SettingsItem text="Genel" />
          <SettingsItem text="Çıkış" onPress={this.props.AuthStore.removeUser} />
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