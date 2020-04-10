import React from "react";
import {createStackNavigator} from "react-navigation";

import Header from '~/components/Header'
import Ask from './Ask';
import Switch from './Switch';

const QuestionStack = createStackNavigator({
  Switch: {
    screen: Switch,
    navigationOptions: {
      header: <Header title="Soru sor" renderBackButton={false} />
    }
  },
  Ask: {
    screen: Ask,
    navigationOptions: {
      header: <Header title="Soru sor" renderBackButton={true} />
    }
  }
},{
  initialRouteName: 'Switch'
});

export default QuestionStack;