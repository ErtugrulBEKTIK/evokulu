import React from 'react';
import {View} from "react-native";
import {Icon} from "native-base";
import { res } from './helpers';

import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import TabBarIcon from '~/components/TabBarIcon';

// Stacks & Screens
import Redirector from './screens/AuthStack/Redirector';
import AuthStack from './screens/AuthStack';
import ProfileStack from './screens/ProfileStack';
import HomeStack from './screens/HomeStack';
import ExamStack from './screens/ExamStack';
import QuestionStack from './screens/QuestionStack';
import AnnounceStack from './screens/AnnounceStack';



const App = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: 'Anasayfa',
      tabBarIcon: ({ tintColor }) => <TabBarIcon icon="home" tintColor={tintColor} />
    }
  },
  Exam: {
    screen: ExamStack,
    navigationOptions: {
      title: 'Yarışma',
      tabBarIcon: ({ tintColor }) => <TabBarIcon icon="compass" tintColor={tintColor} />
    }
  },
  Question: {
    screen: QuestionStack,
    navigationOptions: {
      title: 'Yarışma',
      tabBarIcon: ({ tintColor }) => <TabBarIcon icon="question" tintColor={tintColor} />
    }
  },
  Announce: {
    screen: AnnounceStack,
    navigationOptions: {
      title: 'Tavsiyeler',
      tabBarIcon: ({ tintColor }) => <TabBarIcon icon="announce" tintColor={tintColor} />
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      title: 'Profil',
      tabBarIcon: ({ tintColor }) => <TabBarIcon icon="user" tintColor={tintColor} />
    }
  }
}, {
  initialRouteName: "Home",
  tabBarOptions: {
    activeTintColor: '#DC6929',
    showIcon: true,
    showLabel: false,
    inactiveTintColor: '#E8DAD1',
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
    Redirector,
    App,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Redirector',
  }
);

export default createAppContainer(SwitchNavigator);