import React from "react";
import {createStackNavigator} from "react-navigation";

import Home from './Home';
import Categories from './Categories';
import Topics from './Topics';

import {res} from "~/helpers";
import Header from '~/components/Header'

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: (<Header title="Anasayfa" renderBackButton={false} />)
    })
  },
  Categories: {
    screen: Categories,
    navigationOptions: ({ navigation }) => ({
      header: (<Header title="Kategoriler" renderBackButton={true} />)
    })
  },
  Topics: {
    screen: Topics,
    navigationOptions: ({ navigation }) => ({
      header: (<Header title="Konu Seç" renderBackButton={true} />)
    })
  }
});

export default HomeStack;