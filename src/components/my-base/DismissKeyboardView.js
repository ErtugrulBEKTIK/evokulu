import React, { Component } from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

export default class DismissKeyboardView extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
        <View {...this.props}>
          { this.props.children }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
