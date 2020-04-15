import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import moment from 'moment';
import 'moment/locale/tr';
import {res} from '~/helpers';
import {Text, Container, TouchableBox} from '~/components/my-base'
import NavigationService from '~/NavigationService';
import axios from "~/Api";
import Solved from "./solved.svg";
import {inject, observer} from "mobx-react";

@inject('AuthStore')
@observer
export default class MyQuestions extends Component {

  state = {
    questions: [],
    loading: true
  };

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = async () => {
    const { data: questions } = await axios.post('AskQuestion/GetUserAskQuestion', {
      UserId: this.props.AuthStore.user.UserId
    });
    this.setState({ questions, loading: false });
  };

  render() {

    const { questions, loading } = this.state;

    return (
      <Container loading={loading} scroll>

        { questions.map((question) => {
          const {$id, IsStatus, QuestionFileUrl, QuestionCreateDate} = question;

          const date = moment(QuestionCreateDate, 'D.M.YYYY HH:mm:ss');
          return (
            <TouchableBox style={s.box} key={$id}
              onPress={() => { NavigationService.navigate('Detail', { question }) }}
            >
              <View style={s.imageC}>
                <Image style={s.image} source={{uri: QuestionFileUrl}} />
                {
                  IsStatus
                    ? <Solved style={s.solved}/>
                    : null
                }

              </View>

              <View style={s.info}>
                <Text style={s.title}>2. Sınıf / Matematik</Text>
                <Text style={s.title}>{date.format('D.M.YYYY')}</Text>
              </View>
            </TouchableBox>
          );
        }) }
      </Container>
    );
  }
}
// TODO: 58. satırda sınıf ve dersi dinamik yap

const s = StyleSheet.create({
  box: {
    padding: 0,
    marginBottom: res(15),
    marginHorizontal: res(15),
    overflow: 'hidden'
  },
  imageC: {
    height: res(170),
  },

  image: {
    height: '100%',
    width: '100%'
  },
  solved: {
    position: 'absolute',
    width: res(80),
    height: res(80),
    right: 0,
    top: 0,
  },

  info: {
    borderColor: '#d4d7d7',
    borderTopWidth: res(1),
    flexDirection: 'row',
    paddingHorizontal: res(10),
    paddingBottom: res(5),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight:'normal',
    fontFamily: 'Helvetica',
    color: '#545757',
    fontSize: res(13),
  },

});