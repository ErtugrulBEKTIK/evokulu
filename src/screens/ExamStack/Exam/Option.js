import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from '~/components/my-base';
import { res } from "~/helpers";

export default class Option extends Component {
  state = {
    answerState: 'unanswered'
  };

  render() {
    const { no, answerState, text, style } = this.props;

    const bgColors = {
      unanswered : '#ffffff',
      true : '#75ea6b',
      false : '#BC1B1B',
    };
    const letters = ['A', 'B', 'C', 'D'];

    return (
      <TouchableOpacity {...this.props} style={[s.option, { backgroundColor: bgColors[answerState]},  style]} >
        <View style={[s.shapeC, { backgroundColor: answerState === 'unanswered' ? '#DC6929' : 'rgba(255,255,255,0.5)' }]}>
          <Text style={s.letter}>{letters[no-1]}</Text>
        </View>
        <Text style={[s.text, {color: answerState === 'unanswered' ? '#545757' : 'white' }]}>
          { text }
        </Text>

      </TouchableOpacity>
    );
  }
}

const s = StyleSheet.create({
  option: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: res(42),
    borderRadius: res(21),
    marginBottom: res(5),
    shadowColor: 'rgba(71, 55, 255, 0.1)',
    shadowOpacity: 1,
    shadowRadius: res(7),
    shadowOffset: {
      width:0,
      height: res(10)
    },
    elevation: 4
  },
  shapeC: {
    position: 'absolute',

    left: 0,
    height: res(30),
    width: res(30),
    margin: res(8),
    backgroundColor: '#DC6929',
    borderRadius: res(15),
    alignItems: 'center',
    justifyContent: 'center'
  },
  letter: {
    marginTop: -res(2),
    color: 'white'
  },
  text: {

    color: '#384F7D'
  }
});