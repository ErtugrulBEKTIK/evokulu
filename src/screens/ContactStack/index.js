import React from "react";
import {createStackNavigator} from "react-navigation";

import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import DrawerButton from "../../components/DrawerButton";
import {res} from "../../helpers";

const ContactStack = createStackNavigator({
  List: {
    screen: ContactList,
    navigationOptions: ({ navigation }) => ({
      title: 'Rehber',
      headerStyle: {
        backgroundColor: '#48aec4',
      },
      headerTitleStyle: {
        fontSize: res(16)
      },
      headerTintColor: '#fff',
      headerLeft: ({ tintColor }) => (
        <DrawerButton navigation={navigation} color={tintColor} />
      )
    })
  },
  Detail: {
    screen: ContactDetail,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        elevation: 0
      },
      headerTitleStyle: {
        fontSize: res(16)
      },
      headerTintColor: '#fff',
    }
  }
});

export default ContactStack;