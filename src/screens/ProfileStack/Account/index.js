import React, {Component} from 'react';
import { Container, SettingsItem} from '~/components/my-base'
import NavigationService from '~/NavigationService';

import {StyleSheet, View} from "react-native";
import {res} from "~/helpers";
import {inject, observer} from "mobx-react";

@inject('AuthStore')
@observer
export default class Account extends Component {

  render() {
    return (
      <Container noPadding>
        <View style={s.container}>
          <SettingsItem text="Kullanıcı Adı" first />
          <SettingsItem text="Şifre"  />
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