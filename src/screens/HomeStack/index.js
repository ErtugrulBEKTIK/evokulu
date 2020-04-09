import React from "react";
import {createStackNavigator} from "react-navigation";

import Header from '~/components/Header'
import Home from './Home';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: <Header title="Anasayfa" renderBackButton={false} icon="home" />
    }
  },

});

export default HomeStack;