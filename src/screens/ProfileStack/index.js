import React from "react";
import {Platform} from "react-native";
import {createStackNavigator} from "react-navigation";

import Profile from './Profile';
import DrawerButton from "../../components/DrawerButton";
import ReturnButton from "../../components/ReturnButton";
import {res} from "../../helpers";

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profil',
      headerStyle: {
        backgroundColor: 'rgba(238,238,238,0)',
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        elevation: 0
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
  }
});

export default ProfileStack;