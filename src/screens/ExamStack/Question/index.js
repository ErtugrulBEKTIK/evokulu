import React, {Component} from 'react';
import {StyleSheet } from 'react-native';
import {res, T} from '~/helpers';
import { Text, Container, Box} from '~/components/my-base';
import Option from './Option';
export default class Question extends Component {

  render() {
    return (
      <Container>
        <Box style={s.box}>
          <Text style={s.questionText}>
            Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?
          </Text>
        </Box>

        <Option no={1} answerState="true" />
        <Option no={2} answerState="unanswered" />
        <Option no={3} answerState="unanswered" />
        <Option no={4} answerState="false" />

      </Container>
    );
  }
}


const s = StyleSheet.create({
  box: {
    minHeight: res(150),
    padding: res(20),
    marginBottom: res(20)
  },
  questionText: {
    textAlign: 'center',
    fontSize: res(16),
    color: '#564ea7',
    fontWeight: 'bold'
  }
});