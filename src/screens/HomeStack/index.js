import React from "react";
import {createStackNavigator} from "react-navigation";

import Home from './Home';
import DrawerButton from "../../components/DrawerButton";
import LogoutButton from "../../components/LogoutButton";
import {res} from "~/helpers";

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'TÜGVA PORTAL',
      tabBarLabel: 'Anasayfa',
      headerStyle: {
        backgroundColor: '#48aec4',
      },
      headerTitleStyle: {
        fontSize: res(20),
        flex: 1,
        textAlign: "center",
      },
      headerTintColor: '#fff',
      headerLeft: ({ tintColor }) => (
        <DrawerButton navigation={navigation} color={tintColor} />
      ),
      headerRight: <LogoutButton navigation={navigation} />
    })
  }
});

export default HomeStack;