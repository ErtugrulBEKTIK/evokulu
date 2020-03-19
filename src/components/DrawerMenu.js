import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, ImageBackground, Image} from 'react-native';
import { Button, Text, Thumbnail} from 'native-base';
import { res } from '../helpers';
import { DrawerItems } from 'react-navigation'

import {inject, observer} from 'mobx-react';

@inject('AuthStore')
export default class DrawerMenu extends Component {

  render() {
    const {user} = this.props.AuthStore;
    let Name, Eposta, pp;

    if(user){
      Name = user.Name;
      Eposta = user.Eposta;
      pp = user.ProfilResmi;
    }

    return (
      <View style={s.container}>
        <SafeAreaView style={{ flex:1 }}>
          <View style={s.profileContainer}>
            <Image style={s.avatar} source={pp ? {uri: pp} : require('../assets/images/avatar.jpeg')}/>
            <View style={s.profileInfo}>
              <Text style={s.name}>{Name}</Text>
              <Text style={s.email}>{Eposta}</Text>
            </View>
          </View>
          <View style={s.menuContainer}>
            <DrawerItems {...this.props} />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    paddingVertical: res(20),
    paddingHorizontal: res(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#48aec4'
  },
  profileInfo:{
    height: res(60),
    marginRight: res(10),
    justifyContent: 'space-around',
  },
  avatar: {
    width: res(70),
    height: res(70),
    borderRadius: res(35),
    marginHorizontal: res(10)
  },
  name:{
    fontWeight: 'bold',
    fontSize: res(16),
    color: 'white',
  },
  email:{
    color: 'white',
    fontSize: res(12)
  },
  menuContainer:{
    flex: 6,
    paddingVertical: 20,
    backgroundColor: 'white'
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: '#303030'
  },
  itemText: {
    color: '#303030'
  },
  itemIcon: {
    marginRight: 15
  }
});