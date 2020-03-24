import React from "react";
import {createStackNavigator} from "react-navigation";

import Question from './Question';

import Header from '~/components/Header'
import Classes from "./Classes";
import Categories from "./Categories";
import Exams from "./Exams";

const ExamStack = createStackNavigator({
  Classes: {
    screen: Classes,
    navigationOptions: ({ navigation }) => ({
      header: (<Header title="Sınıflar" />)
    })
  },
  Categories: {
    screen: Categories,
    navigationOptions: ({ navigation }) => ({
      header: (<Header title="Kategoriler" renderBackButton={true} />)
    })
  },
  Exams: {
    screen: Exams,
    navigationOptions: ({ navigation }) => ({
      header: (<Header title="Konu Seç" renderBackButton={true} />)
    })
  },
  Question: {
    screen: Question,
    navigationOptions: ({ navigation }) => ({
      header: (<Header title="Sınav" renderBackButton={false} />)
    })
  },
});

export default ExamStack;