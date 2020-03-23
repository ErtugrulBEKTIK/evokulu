import React, {Component} from 'react';

import Router from './src/Router';
import NavigationService from './src/NavigationService';
import { initNotification } from './src/Notifications';

// Mobx
import store from './src/store';
import {Provider} from 'mobx-react';

export default class App extends Component {
  componentDidMount() {
    initNotification()
  }

  render() {
    return (
      <Provider {...store}>
        <Router
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}

