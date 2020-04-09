import React, { Component } from 'react';
import {View} from "react-native";
import { StyleSheet } from 'react-native';
import { res } from '~/helpers';



export default class TabBarIcon extends Component {

  render() {
    const { children, tintColor } = this.props;
    return (
      <>
        <View style={[s.hat, {display: tintColor === '#DC6929' ? 'flex' : 'none' }]} />
        <View style={[s.iconC, {backgroundColor: tintColor}]}>
          {children}
        </View>
      </>
    );
  }
}

const s = StyleSheet.create({
  iconC: {
    width: res(40),
    height: res(40),
    borderRadius: res(20),
    padding: res(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8DAD1'
  },
  hat: {
    position: 'absolute',
    width: res(40),
    height: res(40),
    borderRadius: res(20),
    backgroundColor: 'white',
    top: -res(13)
  }
});