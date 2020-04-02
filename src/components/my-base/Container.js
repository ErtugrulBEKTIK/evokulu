import React, { Component } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {res} from "~/helpers";
import LinearGradient from "react-native-linear-gradient";
import { Spinner } from "~/components/my-base/index";

export default class Container extends Component {
  render() {
    return (
      <SafeAreaView {...this.props} style={[{flex: 1}, this.props.style]} >
        <LinearGradient style={s.background } start={{x: 0, y: 0}} end={{x: 1, y: 0.9}} colors={['#EEECFF', '#ffffff']}>
          {
            this.props.loading
              ? <Spinner/>
              :  <ScrollView style={{paddingHorizontal: this.props.noPadding ? 0 : res(25)}}>
                    { this.props.children }
                  </ScrollView>
          }
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const s = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: res(80)
  },
});