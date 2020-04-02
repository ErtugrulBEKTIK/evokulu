import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {res} from "~/helpers";
import LinearGradient from "react-native-linear-gradient";


export default class _Button extends Component {
  render() {
    const colors = {
      success: [ '#a6fb64', '#75ea6b'],
      error: ['#bc3433', '#D85D5D']
    };

    const { small, children, style, type } = this.props;

    const color = type ? type : 'success';

    return (
      <TouchableOpacity {...this.props}  style={[{width: small ? 'auto' : '100%'}, style]} >
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 10}} style={s.button}
                        colors={colors[color]} locations={[0.01, 0.15]}>
          { children }
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const s = StyleSheet.create({
  button: {
    borderRadius: res(7),
    padding: res(15),
  }
});