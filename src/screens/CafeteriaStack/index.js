import React from "react";
import {createStackNavigator} from "react-navigation";
import { res } from '../../helpers';

import Cafeteria from './Cafeteria';
import {Platform} from "react-native";
import ReturnButton from "../../components/ReturnButton";
import DrawerButton from "../../components/DrawerButton";

const CafeteriaStack = createStackNavigator({

  Cafeteria: {
    screen: Cafeteria,
    navigationOptions: ({ navigation }) => ({
      title: 'Yemekhane',
      headerStyle: {
        backgroundColor: '#48aec4',
      },
      headerTitleStyle: {
        fontSize: res(16)
      },
      headerTintColor: '#fff',
      headerLeft: ({ tintColor }) => (
        Platform.OS === 'ios' ? <ReturnButton/> :
          <DrawerButton navigation={navigation} color={tintColor} />
      )

    })
  },
});

export default CafeteriaStack;