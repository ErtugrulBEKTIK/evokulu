import React from "react";
import {createStackNavigator} from "react-navigation";

import Header from '~/components/Header'
import Results from './Results';

const HomeStack = createStackNavigator({
  Results: {
    screen: Results,
    navigationOptions: {
      header: <Header title="Sonuçlarım" renderBackButton={false} icon="document" />
    }
  },

});

export default HomeStack;