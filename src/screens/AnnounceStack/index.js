import React from "react";
import {createStackNavigator} from "react-navigation";

import Header from '~/components/Header'

import List from './List';
import Detail from './Detail';

const AdviceStack = createStackNavigator({
  List: {
    screen: List,
    navigationOptions: {
      header: <Header title="Duyurular" renderBackButton={false} icon="announce" />
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      header: <Header title="Duyurular" renderBackButton={true} icon="announce" />
    }
  }
});

export default AdviceStack;