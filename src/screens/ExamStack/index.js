import React from "react";
import {createStackNavigator} from "react-navigation";

import Question from './Question';


import {res} from "~/helpers";
import Header from '~/components/Header'

const ExamStack = createStackNavigator({
  Question: {
    screen: Question,
    navigationOptions: ({ navigation }) => ({
      header: (<Header title="Sınav" renderBackButton={false} />)
    })
  }
});

export default ExamStack;