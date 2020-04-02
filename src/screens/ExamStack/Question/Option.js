import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from '~/components/my-base';
import { res } from "~/helpers";
import { Star, Cloud, Moon, Tag } from "~/assets/images/vectors";

export default class Option extends Component {
  state = {
    answerState: 'unanswered'
  };

  render() {
    const { no, answerState } = this.props;

    const bgColors = {
      unanswered : ['#ffffff', '#ffffff'],
      true : ['#BAFB67', '#75ea6b'],
      false : ['#BC1B1B', '#D85D5D'],
    };

    return (
      <TouchableOpacity {...this.props} style={[s.option, this.props.style]} >
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 4}}
          colors={bgColors[answerState]} locations={[0.9, 0.1]}
          style={[
            {
              borderTopRightRadius: no === 1 ? res(7) : 0,
              borderTopLeftRadius: no === 1 ? res(7) : 0,
              borderBottomLeftRadius: no === 4 ? res(7) : 0,
              borderBottomRightRadius: no === 4 ? res(7) : 0
            },
            s.background
          ]}>
          <View style={[s.shapeC, { backgroundColor: answerState === 'unanswered' ? '#A298FD' : 'rgba(255,255,255,0.5)' }]}>
            {
              no === 1 && <Star width={res(20)} height={res(20)} />
            }
            {
              no === 2 && <Cloud width={res(20)} height={res(20)} />
            }
            {
              no === 3 && <Moon width={res(20)} height={res(20)} />
            }
            {
              no === 4 && <Tag width={res(20)} height={res(20)} />
            }
          </View>
          <Text style={[s.text, {color: answerState === 'unanswered' ? '#384F7D' : 'white' }]}>
            { this.props.text }
          </Text>
        </LinearGradient>

      </TouchableOpacity>
    );
  }
}

const s = StyleSheet.create({
  option: {
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
  background: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  shapeC: {
    height: res(40),
    width: res(40),
    margin: res(8),
    marginRight: res(15),
    backgroundColor: '#A298FD',
    borderRadius: res(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  shape: {

  },
  text: {
    color: '#384F7D'
  }
});