import React, { Component } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import {res} from "~/helpers";
import LinearGradient from "react-native-linear-gradient";
import { Spinner } from "~/components/my-base/index";
import { Bg } from "~/assets/images/vectors";

export default class Container extends Component {

  render() {
    const { noPadding, style, loading, scrolViewRef} = this.props;

    const containerStyle = [{paddingHorizontal: noPadding ? 0 : res(15)}, s.container];

    return (
      <SafeAreaView {...this.props} style={[{flex: 1}, style]} >
        <Bg style={s.background}/>
        {
          loading
            ? <Spinner/>
            : <ScrollView style={containerStyle} ref={ scrolViewRef ? (ref) => { scrolViewRef(ref) } : null } scrollEnabled={!!this.props.scroll}>
                { this.props.children }
                <View style={s.placeholder}/>
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
    flex: 1,
    paddingTop: res(30),
  },
  placeholder: {
    height: res(50)
  }
});