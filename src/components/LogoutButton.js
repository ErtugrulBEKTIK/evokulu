import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';
import {inject} from 'mobx-react';
import { res } from '../helpers';

@inject('AuthStore')
export default class LogoutButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.AuthStore.removeUser()}
        style={styles.buttonContainer}>
        <Icon style={styles.icon}
              type="FontAwesome"
              name="sign-out"
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginRight: res(10)
  },
  icon: {
    fontSize: res(25),
    color: '#fff'
  }
});