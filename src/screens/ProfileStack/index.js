import React from "react";
import {createStackNavigator} from "react-navigation";


import Header from '~/components/Header'

import Profile from './Profile';
import Account from './Account';

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: <Header title="Profil" renderBackButton={false} icon="user" />
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      header: <Header title="Hesabım" renderBackButton={true} icon="user" />
    }
  },

});

export default ProfileStack;