import React from 'react';
import {Icon} from "native-base";
import { res } from './helpers';

import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';


// Stacks & Screens
import AuthStack from './screens/AuthStack';
import ProfileStack from './screens/ProfileStack';
import HomeStack from './screens/HomeStack';
import ExamStack from './screens/ExamStack';
import AskStack from './screens/AskStack';
import AdviceStack from './screens/AdviceStack';



const App = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Anasayfa',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor, fontSize: res(25)}} name='home' />
      ),
    })
  },
  Exam: {
    screen: ExamStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Yarışma',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor, fontSize: res(25)}} name='book' />
      ),
    })
  },
  Ask: {
    screen: AskStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Yarışma',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor, fontSize: res(25)}} name='book' />
      ),
    })
  },
  Advice: {
    screen: AdviceStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Tavsiyeler',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor, fontSize: res(25)}} name='star' />
      ),
    })
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Profil',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor, fontSize: res(25)}} name='person' />
      ),
    })
  }
}, {
  initialRouteName: "Ask",
  tabBarOptions: {
    activeTintColor: '#384F7D',
    showIcon: true,
    inactiveTintColor: 'rgba(56, 79, 125, 0.45);',
    labelStyle: {
      fontFamily: 'ComicSansMS'
    },
    style: {
      paddingVertical: res(5),
      height: res(50),
      borderTopWidth: 0,
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowRadius: res(3),
      shadowOffset: {
        width:0,
        height: res(2)
      },
      elevation: 4
    }
  }
});

const SwitchNavigator = createSwitchNavigator(
  {
    App,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
  }
);

export default createAppContainer(SwitchNavigator);