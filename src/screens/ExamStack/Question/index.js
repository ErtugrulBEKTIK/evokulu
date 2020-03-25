import React, {Component} from 'react';
import {StyleSheet } from 'react-native';
import {res, T} from '~/helpers';
import { Text, Container, Box} from '~/components/my-base';
import Option from './Option';
import axios from "~/Api";
import NavigationService from "~/NavigationService";
export default class Question extends Component {

  state = {
    questions: [
      {}
    ],
    loading: true,
    currentNo: 0,
    options: [
      'unanswered',
      'unanswered',
      'unanswered',
      'unanswered',
    ],
    result: {
      totalQ: 0,
      trueQ: 0,
      falseQ: 0,
      blankQ: 0
    }
  };

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = async () => {
    const { data: questions } = await axios.post('Questions/GetSearchExamQuestions',{
      Tokenkey: "86805af6-739b-4765-baac-9ac1b62c2bcf",
      ExamId: this.props.navigation.getParam('exam').ExamId
    });
    this.setState({ questions, loading: false });
  };

  selected = (no) => {
    const { currentNo, questions, options, result } = this.state;
    const correct = questions[currentNo].QuestionCorrectAnswer;
    let correctNo = null;

    switch (correct) {
      case questions[currentNo].QuestionAnswer1:
        correctNo = 0;
        break;
      case questions[currentNo].QuestionAnswer2:
        correctNo = 1;
        break;
      case questions[currentNo].QuestionAnswer3:
        correctNo = 2;
        break;
      case questions[currentNo].QuestionAnswer4:
        correctNo = 3;
        break;
    }

    options[correctNo] = 'true';
    result.totalQ = questions.length;
    if(correctNo !== no){
      options[no] = 'false';
      result.falseQ = result.falseQ + 1
    }else{
      result.trueQ = result.trueQ + 1
    }

    this.setState({ options, result });

    setTimeout(() => {

      if(currentNo + 1 === questions.length) {
        const exam = this.props.navigation.getParam('exam');
        NavigationService.navigate('ExamResult', { result, exam });
      }else {
        this.setState({
          currentNo: currentNo + 1,
          options: [
            'unanswered',
            'unanswered',
            'unanswered',
            'unanswered',
          ]
        });
      }

    },1500)

  };

  render() {
    const { questions, loading, currentNo, options } = this.state;

    return (
      <Container loading={loading}>
        <Box style={s.box}>
          <Text style={s.questionText}>
            { questions[currentNo].Question }
          </Text>
        </Box>

        <Option no={1} text={questions[currentNo].QuestionAnswer1} answerState={options[0]} onPress={() => { this.selected(0) }} />
        <Option no={2} text={questions[currentNo].QuestionAnswer2} answerState={options[1]} onPress={() => { this.selected(1) }} />
        <Option no={3} text={questions[currentNo].QuestionAnswer3} answerState={options[2]} onPress={() => { this.selected(2) }} />
        <Option no={4} text={questions[currentNo].QuestionAnswer4} answerState={options[3]} onPress={() => { this.selected(3) }} />

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