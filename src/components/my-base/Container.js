import React, { Component } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import {res} from "~/helpers";
import LinearGradient from "react-native-linear-gradient";
import { Spinner } from "~/components/my-base/index";
import { Bg } from "~/assets/images/vectors";

export default class Container extends Component {

  render() {
    const containerStyle = [{paddingHorizontal: this.props.noPadding ? 0 : res(15)}, s.container];

    return (
      <SafeAreaView {...this.props} style={[{flex: 1}, this.props.style]} >
        <Bg style={s.background}/>
        {
          this.props.loading
            ? <Spinner/>
            : <ScrollView style={containerStyle} scrollEnabled={!!this.props.scroll}>
                { this.props.children }
              </ScrollView>
        }
      </SafeAreaView>
    );
  }
}

const s = StyleSheet.create({
  background: {
    position: 'absolute',
    width: Math.round(Dimensions.get('window').width),
    height: Math.round(Dimensions.get('window').width * 16/9),
  },
  container: {
    paddingTop: res(30),
  }
});