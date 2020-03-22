import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {res} from "~/helpers";

export default class Box extends Component {
  render() {
    return (
      <View {...this.props} style={[s.box, this.props.style]} >
        { this.props.children }
      </View>
    );
  }
}

const s = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    padding: res(13),
    borderRadius: res(7),
    shadowColor: 'rgba(71, 55, 255, 0.08)',
    shadowOpacity: 1,
    shadowRadius: res(7),
    shadowOffset: {
      width:0,
      height: res(10)
    },
    elevation: 4
  }
});