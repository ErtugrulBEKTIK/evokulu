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
import {Home as HomeIcon, Compass, Question, Announce, User} from '~/assets/images/vectors';

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
      tabBarIcon: ({ tintColor }) => <TabBarIcon tintColor={tintColor}><HomeIcon/></TabBarIcon>
    })
  },
  Exam: {
    screen: ExamStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Yarışma',
      tabBarIcon: ({ tintColor }) => <TabBarIcon tintColor={tintColor}><Compass/></TabBarIcon>
    })
  },
  Ask: {
    screen: AskStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Yarışma',
      tabBarIcon: ({ tintColor }) => <TabBarIcon tintColor={tintColor}><Question/></TabBarIcon>
    })
  },
  Advice: {
    screen: AdviceStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Tavsiyeler',
      tabBarIcon: ({ tintColor }) => <TabBarIcon tintColor={tintColor}><Announce/></TabBarIcon>,
    })
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Profil',
      tabBarIcon: ({ tintColor }) => <TabBarIcon tintColor={tintColor}><User/></TabBarIcon>
    })
  }
}, {
  initialRouteName: "Exam",
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
    App,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
  }
);

export default createAppContainer(SwitchNavigator);