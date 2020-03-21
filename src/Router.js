import React from 'react';
import {Icon} from "native-base";
import { res } from './helpers';

import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';


import Redirector from './screens/AuthStack/Redirector';

// Stacks & Screens
import AuthStack from './screens/AuthStack';
import HomeStack from './screens/HomeStack';



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
    screen: HomeStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Yarışma',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor, fontSize: res(25)}} name='book' />
      ),
    })
  },
  Tavsiyeler: {
    screen: HomeStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Tavsiyeler',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor, fontSize: res(25)}} name='star' />
      ),
    })
  },
  Profil: {
    screen: HomeStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Profil',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{color: tintColor, fontSize: res(25)}} name='notifications' />
      ),
    })
  }
}, {
  tabBarOptions: {
    activeTintColor: '#384F7D',
    showIcon: true,
    inactiveTintColor: 'rgba(56, 79, 125, 0.45);',
    labelStyle: {
      fontFamily: 'ComicSansMS'
    },
    style: {
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
    Redirector,
    App,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
  }
);

export default createAppContainer(SwitchNavigator);