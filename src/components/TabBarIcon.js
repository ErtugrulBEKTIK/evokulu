import React, { Component } from 'react';
import {View} from "react-native";
import { StyleSheet } from 'react-native';
import { res } from '~/helpers';
import {Announce, Compass, Document, Home, Question, User} from "~/assets/images/vectors";



export default class TabBarIcon extends Component {

  render() {

    const { icon, tintColor } = this.props;
    const icons = {
      announce: Announce,
      home: Home,
      compass: Compass,
      question: Question,
      user: User,
      document: Document,
    };
    const Icon = icons[icon ? icon : 'home'];

    return (
      <>
        <View style={[s.hat, {display: tintColor === '#DC6929' ? 'flex' : 'none' }]} />
        <View style={[s.iconC, {backgroundColor: tintColor}]}>
          <Icon />
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