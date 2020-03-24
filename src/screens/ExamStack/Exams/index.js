import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {res, T} from '~/helpers';
import {Text, Container, TouchableBox} from '~/components/my-base'
import NavigationService from "~/NavigationService";
import axios from "~/Api";

export default class Topics extends Component {

  constructor(props) {
    super(props);
    this.cls = this.props.navigation.getParam('class');
    this.category = this.props.navigation.getParam('category');
  }

  state = {
    exams: [],
    loading: true
  };

  componentDidMount() {
    this.getClasses()
  }

  getClasses = async () => {

    const { data: exams } = await axios.post('Exam/GetSearchExam', {
      Tokenkey: "86805af6-739b-4765-baac-9ac1b62c2bcf",
      ClassId: this.cls.ClassId,
      CategoryId: this.category.CategoryId
    });

    if(exams){
      this.setState({ exams, loading: false });
    }

  };

  render() {
    const { exams, loading } = this.state;

    return (
      <Container loading={loading}>
        <Text style={s.infoTitle}>{T.toUpperCase(this.category.CategoryName)} KONU SEÇ</Text>

        { exams.map((exam) => (
          <TouchableBox
            onPress={() => { NavigationService.navigate('Question', { exam }); }}
            style={s.box}
            key={exam.$id}
          >
            <Text style={s.boxText}> {exam.ExamName} </Text>
          </TouchableBox>
        )) }
      </Container>
    );
  }
}


const s = StyleSheet.create({
  box: {
    marginBottom: res(15),
  },
  boxText: {
    color: '#384F7D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: res(17),
  },
  infoTitle: {
    color: 'rgba(56, 79, 125, 0.8)',
    fontSize: res(12),
    marginBottom: res(15)
  },
});