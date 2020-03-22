import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {res} from "~/helpers";

export default class TouchableBox extends Component {
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