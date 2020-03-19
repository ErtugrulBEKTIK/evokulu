import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';
import {inject} from 'mobx-react';
import { res } from '../helpers';
import NavigationService from "../NavigationService";

export default class LogoutButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => { NavigationService.navigate('Home')}}
        style={styles.buttonContainer}>
        <Icon style={styles.icon}
              name="arrow-round-back"
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginLeft: res(10)
  },
  icon: {
    fontSize: res(36),
    color: '#fff'
  }
});