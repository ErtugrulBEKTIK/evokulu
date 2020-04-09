import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {res} from "~/helpers";

export default class TouchableBar extends Component {
  render() {
    return (
      <TouchableOpacity {...this.props} style={[s.box, this.props.style]} >
        { this.props.children }
      </TouchableOpacity>
    );
  }
}

const s = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: res(5),
    height: res(42),
    borderRadius: res(21),
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: res(7),
    shadowOffset: {
      width:0,
      height: res(10)
    },
    elevation: 4
  }
});