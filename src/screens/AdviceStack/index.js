import React from "react";
import {createStackNavigator} from "react-navigation";

import Advice from './Advice';


import {res} from "~/helpers";
import Header from '~/components/Header'

const AdviceStack = createStackNavigator({
  Advice: {
    screen: Advice,
    navigationOptions: {
      header: <Header title="Tavsiyeler" renderBackButton={false} icon="announce" />
    }
  }
});

export default AdviceStack;