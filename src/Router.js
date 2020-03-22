import React from 'react';
import {Icon} from "native-base";
import { res } from './helpers';

import {
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';


// Stacks & Screens
import AuthStack from './screens/AuthStack';
import HomeStack from './screens/HomeStack';
import ExamStack from './screens/ExamStack';
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
  Yarisma: {
    screen: ExamStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Yarışma',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor, fontSize: res(25)}} name='book' />
      ),
    })
  },
  Tavsiyeler: {
    screen: AdviceStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Tavsiyeler',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor, fontSize: res(25)}} name='star' />
      ),
    })
  },
  Profil: {
    screen: AuthStack,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
      title: 'Profil',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor, fontSize: res(25)}} name='notifications' />
      ),
    })
  }
}, {
  initialRouteName: "Profil",
  tabBarOptions: {
    activeTintColor: '#384F7D',
    showIcon: true,
    inactiveTintColor: 'rgba(56, 79, 125, 0.45);',
    labelStyle: {
      fontFamily: 'ComicSansMS'
    },
    style: {
      paddingVertical: res(5),
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


export default createAppContainer(App);