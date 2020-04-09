import React from "react";
import {createStackNavigator} from "react-navigation";


import Header from '~/components/Header'
import Classes from "./Classes";
import Categories from "./Categories";
import Topics from "./Topics";
import Exam from './Exam';
import ExamResult from "./ExamResult";

const ExamStack = createStackNavigator({
  Classes: {
    screen: Classes,
    navigationOptions: {
      header: <Header title="Sınıflar" icon="compass" />
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions: {
      header: <Header title="Kategoriler" renderBackButton={true} icon="compass" />
    }
  },
  Topics: {
    screen: Topics,
    navigationOptions: {
      header: <Header title="Konu Seç" renderBackButton={true} icon="compass" />
    }
  },
  Exam: {
    screen: Exam,
    navigationOptions: {
      header: <Header title="Sınav" renderBackButton={true} icon="compass" />
    }
  },
  ExamResult: {
    screen: ExamResult,
    navigationOptions: {
      header: <Header title="Sınav Sonucu" renderBackButton={false} icon="compass" />
    }
  },
},{
  initialRouteName: 'Classes'
});

export default ExamStack;