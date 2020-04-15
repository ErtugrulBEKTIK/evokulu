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
    loading: false,
    phrase: ""
  };

  componentDidMount() {
    this.sendExamResult();
    this.calculateRate();
  }

  calculateRate = () => {
    const { trueQ, totalQ } = this.result;

    const rate = ( trueQ / totalQ ) * 100;

    let starCount, phrase;

    if(rate === 0){
      starCount = 0;
      phrase = "KONUYA BAŞTAN ÇALIŞMALISIN";

    }else if(rate > 0 && rate <= 30){
      starCount = 1;
      phrase = "BİRAZ DAHA ÇALIŞMALISIN";

    }else if(rate > 30 && rate <= 60){
      starCount = 2;
      phrase = "OLDUKÇA İYİSİN";
    }else{
      starCount = 3;
      phrase = "HARİKASIN!!";
    }

    setTimeout(() => {
      this.setState({ phrase });
    },500);


    this.playAnimation(starCount)

  };

  playAnimation = (starCount) => {
    if(starCount === 1 || starCount === 2 || starCount === 3){
      this.star1.play(20, 80);
    }

    if(starCount === 2 || starCount === 3){
      setTimeout(() => {
        this.star2.play();
      },500);
    }

    if(starCount === 3){
      setTimeout(() => {
        this.star3.play();
      },1500);
    }

  };

  sendExamResult = async () => {
    const { trueQ, falseQ } = this.result;

    const { data } = await axios.post('UserResult/InsertUserResult', {
      ExamId: this.props.navigation.getParam('exam').ExamId,
      UserId: 4,
      CorrectCount: trueQ,
      WrongCount: falseQ,
      NullCount: 0
    });

  };

  render() {
    const { loading, phrase } = this.state;
    const { trueQ, falseQ, totalQ } = this.result;

    return (
      <Container loading={loading}>
        <Box style={[s.box, s.starBox]}>
          <View style={s.starC}>
            <LottieView
              ref={star => {
                this.star1 = star;
              }}
              style={s.star}
              source={require('~/assets/animations/star.json')} loop={false} />
            <LottieView
              ref={star => {
                this.star2 = star;
              }}
              style={s.star}
              source={require('~/assets/animations/star.json')} loop={false} />
            <LottieView
              ref={star => {
                this.star3 = star;
              }}
              style={s.star}
              source={require('~/assets/animations/star.json')} loop={false} />
          </View>
          <Text style={s.starText}>{phrase}</Text>
        </Box>
        <Box style={s.box}>
          <View style={s.chartC}>
            <View style={[s.chartBar, {height: (trueQ/totalQ*100)+'%', backgroundColor: '#BAFB67'}]}/>
            <View style={[s.chartBar, {height: (falseQ/totalQ*100)+'%', backgroundColor: '#D85D5D'}]}/>
          </View>
          <View style={s.resultC}>
            <Text style={s.resultText}>Doğru: {trueQ}</Text>
            <Text style={s.resultText}>Yanlış: {falseQ}</Text>
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
  starBox: {
    paddingVertical: res(0),
  },
  starC: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  star: {
    width: res(130)
  },
  starText: {
    marginTop: -res(20),
    textAlign: 'center',
    color: '#c3312a'
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
    color: '#545757',
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
    shadowColor: 'rgba(0, 0, 0, 0.2)',
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