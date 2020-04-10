import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import {inject} from 'mobx-react';
import {Bg} from "~/assets/images/vectors";


@inject('AuthStore')
export default class Redirector extends Component {
  async componentDidMount() {
    this.props.AuthStore.setupAuth();
  }

  render() {
    return (
      <Bg style={s.background}/>
    );
  }
}


const s = StyleSheet.create({
  background: {
    position: 'absolute',
    width: Math.round((Dimensions.get('window').height+100) * 9/16),
    height: Math.round(Dimensions.get('window').height+100),
  }
});