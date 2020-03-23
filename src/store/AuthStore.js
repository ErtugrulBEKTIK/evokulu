import {observable, action} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import axios from '../Api';

// navigation service
import NavigationService from '~/NavigationService';

const defaultUser = {
  UserId: '',
  UserName: ''
};

class AuthStore{
  @observable Tokenkey = '';
  @observable deviceToken = '';
  @observable user = defaultUser;

  @action async saveUser(user, deviceToken){
    try{
      await AsyncStorage.setItem('token', user.TokenKey);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      await AsyncStorage.setItem('deviceToken', deviceToken);
      await this.setupAuth();
      NavigationService.navigate('Home');
    }catch (e) {
      console.log(e);
    }
  }

  @action async removeUser(){
    try{
      await axios.post('DeviceToken/DeleteDeviceToken',
        {
          DeviceToken: this.deviceToken,
        }
      );

      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('deviceToken');

      this.token = '';
      this.deviceToken = '';
      this.user = defaultUser;

      NavigationService.navigate('Profil');

    }catch (e) {
      console.log(e);
    }
  }

  @action async setupAuth(){
    await this.setToken();
    await this.setDeviceToken();
    await this.setUser();
  }

  @action async setToken(){
    try{
      let token = await AsyncStorage.getItem('token');

      axios.defaults.transformRequest = [...axios.defaults.transformRequest, (data) => {
        let newData = {token, ...JSON.parse(data)};
        return JSON.stringify(newData);
      }];

      this.token = token;
    }catch (e) {
      console.log(e);
    }
  }

  @action async setDeviceToken(){
    try{
      let deviceToken = await AsyncStorage.getItem('deviceToken');
      this.deviceToken = deviceToken;

    }catch (e) {
      console.log(e);
    }
  }

  @action async setUser(){
    try{
      const user = await AsyncStorage.getItem('user');
      this.user = JSON.parse(user);

    }catch (e) {
      console.log(e);
    }
  }
}

export default new AuthStore();