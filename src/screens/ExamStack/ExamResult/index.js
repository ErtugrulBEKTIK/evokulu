import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LottieView from "lottie-react-native";
import {res, T} from '~/helpers';
import { Text, Container, Box, TouchableBar} from '~/components/my-base';
import axios from "~/Api";
import LinearGradient from "react-native-linear-gradient";
import NavigationService from "~/NavigationService";


export default class Question extends Component {
  constructor(props) {
    super(props);
    this.result = this.props.navigation.getParam('result');
  }

  state = {
    loading: false
  };

  componentDidMount() {
    this.sendExamResult()
  }

  sendExamResult = async () => {
    const { trueQ, falseQ, blankQ } = this.result;

    const { data } = await axios.post('UserResult/InsertUserResult', {
      ExamId: this.props.navigation.getParam('exam').ExamId,
      UserId: 4,
      CorrectCount: trueQ,
      WrongCount: falseQ,
      NullCount: blankQ
    });

  };

  render() {
    const { loading } = this.state;
    const { trueQ, falseQ, blankQ, totalQ } = this.result;

    return (
      <Container loading={loading}>
        <Box style={s.box}>
          <LottieView source={require('~/assets/animations/trophy.json')} autoPlay loop={false} />
        </Box>
        <Box style={s.box}>
          <View style={s.chartC}>
            <View style={[s.chartBar, {height: (trueQ/totalQ*100)+'%', backgroundColor: '#BAFB67'}]}/>
            <View style={[s.chartBar, {height: (falseQ/totalQ*100)+'%', backgroundColor: '#D85D5D'}]}/>
            <View style={[s.chartBar, {height: (blankQ/totalQ*100)+'%', backgroundColor: '#A298FD'}]}/>
          </View>
          <View style={s.resultC}>
            <Text style={s.resultText}>Doğru: {trueQ}</Text>
            <Text style={s.resultText}>Yanlış: {falseQ}</Text>
            <Text style={s.resultText}>Boş: {blankQ}</Text>
          </View>
        </Box>
        <TouchableBar style={s.buttonC} onPress={() => { this.props.navigation.pop(2) }}>
          <Text style={s.buttonText}>SINAVLARA DÖN</Text>
        </TouchableBar>

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
  },
  chartC: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
  resultC: {
    height: res(25),
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
  resultText: {
    color: '#384F7D',
    textAlign: 'center'
  },
  chartBar: {
    width: res(20),
    borderTopLeftRadius: res(5),
    borderTopRightRadius: res(5),
  },
  buttonC: {
    alignSelf: 'flex-end',
    width: '100%',
    shadowColor: 'rgba(71, 55, 255, 0.1)',
    shadowOpacity: 1,
    shadowRadius: res(7),
    shadowOffset: {
      width: 0,
      height: res(10)
    },
    elevation: 4,
  },
  button: {
    borderRadius: res(7),
    padding: res(15),
  },
  buttonText: {
    textAlign: 'center',
    color: '#DC6929',
    fontSize: res(15)
  },
});