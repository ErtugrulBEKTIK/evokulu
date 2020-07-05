import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {res} from '~/helpers';
import {Text, Container, TouchableBar} from '~/components/my-base'
import NavigationService from "~/NavigationService";
import axios from "~/Api";

import {inject, observer} from 'mobx-react';

@inject('AuthStore')
@observer
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
      <Container loading={loading} scroll>
        {
          exams.length === 0
            ? <Text style={s.emptyInfo}>Henüz bu derste sınav bulunmamaktadır, çok yakında eklenecek!</Text>
            : null
        }
        { exams.map((exam) => (
          <TouchableBar
            onPress={() => { NavigationService.navigate('Exam', { exam }); }}
            style={s.box}
            key={exam.$id}
          >
            <Text style={s.boxText}> {exam.ExamName} </Text>
          </TouchableBar>
        )) }
      </Container>
    );
  }
}


const s = StyleSheet.create({
  box: {
    marginBottom: res(15),
    width: res(250),
    alignSelf: 'center'
  },
  boxText: {
    color: '#C0292B',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: res(15),
  },
  emptyInfo: {
    color: 'white',
    textAlign: 'center',
    marginTop: res(50)
  }
});
