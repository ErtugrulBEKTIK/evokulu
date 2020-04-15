import React from "react";
import {createStackNavigator} from "react-navigation";

import Header from '~/components/Header'
import Ask from './Ask';
import Switch from './Switch';
import MyQuestions from './MyQuestions';
import Detail from './Detail';

const QuestionStack = createStackNavigator({
  Switch: {
    screen: Switch,
    navigationOptions: {
      header: <Header title="Soru sor" renderBackButton={false} icon="question" />
    }
  },
  Ask: {
    screen: Ask,
    navigationOptions: {
      header: <Header title="Soru sor" renderBackButton={true} icon="question" />
    }
  },
  MyQuestions: {
    screen: MyQuestions,
    navigationOptions: {
      header: <Header title="Sorularım" renderBackButton={true} icon="question" />
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      header: <Header title="Sorularım" renderBackButton={true} icon="question" />
    }
  }
},{
  initialRouteName: 'Switch'
});

export default QuestionStack;