import React from "react";
import {createStackNavigator} from "react-navigation";

import Home from './Home';
import Categories from '../ExamStack/Categories';
import Topics from '../ExamStack/Exams';

import {res} from "~/helpers";
import Header from '~/components/Header'

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: (<Header title="Anasayfa" renderBackButton={false} />)
    })
  },

});

export default HomeStack;