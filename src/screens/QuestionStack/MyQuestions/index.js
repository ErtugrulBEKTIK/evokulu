import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import moment from 'moment';
import 'moment/locale/tr';
import {res} from '~/helpers';
import {Text, Container, TouchableBox} from '~/components/my-base'
import NavigationService from '~/NavigationService';
import axios from "~/Api";
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
          const {$id, QuestionDesc, QuestionFileUrl, QuestionCreateDate} = question;

          const date = moment(QuestionCreateDate, 'D.M.YYYY HH:mm:ss');
          return (
            <TouchableBox style={s.box} key={$id}
              onPress={() => { NavigationService.navigate('Detail', { announce }) }}
            >
              <Image style={s.image} source={{uri: QuestionFileUrl}} />
              <View style={s.info}>
                <Text style={s.title}>{QuestionDesc}</Text>
                <Text style={s.title}>{date.format('D.M.YYYY')}</Text>
              </View>
            </TouchableBox>
          );
        }) }
      </Container>
    );
  }
}


const s = StyleSheet.create({
  box: {
    marginBottom: res(15),
    marginHorizontal: res(15),
  },

  image: {
    resizeMode: 'contain',
    height: res(200),
    width: '100%'
  },

  info: {
    borderColor: '#d4d7d7',
    borderTopWidth: res(1),
    flexDirection: 'row',
    height: res(20),
    marginTop: res(10),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight:'normal',
    fontFamily: 'Helvetica',
    color: '#545757',
    fontSize: res(16),
  },

});