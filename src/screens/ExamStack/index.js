import React from "react";
import {createStackNavigator} from "react-navigation";


import Header from '~/components/Header'
import Classes from "./Classes";
import Categories from "./Categories";
import Exams from "./Exams";
import Question from './Question';
import ExamResult from "./ExamResult";

const ExamStack = createStackNavigator({
  Classes: {
    screen: Classes,
    navigationOptions: {
      header: (<Header title="Sınıflar" />)
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions: {
      header: (<Header title="Kategoriler" renderBackButton={true} />)
    }
  },
  Exams: {
    screen: Exams,
    navigationOptions: {
      header: (<Header title="Konu Seç" renderBackButton={true} />)
    }
  },
  Question: {
    screen: Question,
    navigationOptions: {
      header: (<Header title="Sınav" renderBackButton={false} />)
    }
  },
  ExamResult: {
    screen: ExamResult,
    navigationOptions: {
      header: (<Header title="Sınav Sonucu" renderBackButton={false} />)
    }
  },
},{
  initialRouteName: 'ExamResult'
});

export default ExamStack;