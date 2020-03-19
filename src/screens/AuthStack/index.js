import {createStackNavigator} from "react-navigation";

import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null,
      }
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    initialRouteName: 'SignIn'
  }
);

export default AuthStack;