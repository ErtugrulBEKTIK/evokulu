import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { res } from '../helpers';

import {View, Text} from "react-native";

export default class Header extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <View style={s.headerC}>
        <View style={s.backgroundC}>
          <LinearGradient style={s.background}
                          start={{x: 0, y: 1}} end={{x: 1, y: 0}}
                          locations={[0.1, 0.55]}
                          colors={['#A098F3', '#776CE7']}/>
        </View>
        <Text style={s.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  headerC: {
    height: res(120),
    flex: 1,
    justifyContent: 'center'
  },
  backgroundC: {
    height: res(200),
    width: res(200),
    borderRadius: res(200),
    alignSelf: 'center',
    transform: [
      {scaleX: 4}
    ],
    overflow: 'hidden'
  },
  background: {
    flex: 1
  },
  title: {
    position: 'absolute',
    alignSelf: 'center',
    top: res(75),
    color: 'white',
    fontSize: res(19),
    fontFamily: 'ComicSansMS'
  },

});