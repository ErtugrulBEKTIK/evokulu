import React from "react";
import {createStackNavigator} from "react-navigation";


import Header from '~/components/Header'

import Profile from './Profile';

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: <Header title="Profil" renderBackButton={false} hideSearch />
    }
  },

});

export default ProfileStack;