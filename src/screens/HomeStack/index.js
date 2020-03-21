import React from "react";
import {createStackNavigator} from "react-navigation";

import Home from './Home';

import {res} from "~/helpers";
import Header from '../../components/Header'

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: (<Header title="Anasayfa" />)
    })
  }
});

export default HomeStack;