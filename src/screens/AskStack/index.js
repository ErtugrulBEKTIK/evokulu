import React from "react";
import {createStackNavigator} from "react-navigation";

import Header from '~/components/Header'
import Ask from './Ask';

const AskStack = createStackNavigator({
  Ask: {
    screen: Ask,
    navigationOptions: {
      header: <Header title="Soru sor" renderBackButton={false} />
    }
  }

});

export default AskStack;