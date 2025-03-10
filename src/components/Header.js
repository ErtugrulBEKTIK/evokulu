import React, { Component } from 'react';
import {View} from "react-native";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { res } from '~/helpers';
import { Text } from '~/components/my-base'
import Logout from '~/components/Logout'
import NavigationService from "~/NavigationService";
import {Logo, Announce, Home, Compass, Question, User, Document, Back} from '~/assets/images/vectors';



export default class Header extends Component {


  render() {
    const { renderBackButton, title, icon} = this.props;
    const icons = {
      announce: Announce,
      home: Home,
      compass: Compass,
      question: Question,
      user: User,
      document: Document,
    };
    const PageIcon = icons[icon ? icon : 'home'];
    return (
      <View style={s.headerC}>
        <View style={s.background} >
          {
            renderBackButton &&
            <TouchableOpacity
              onPress={() => { NavigationService.goBack()}}
              style={s.returnButton}>
                <Back style={s.returnButtonIcon}/>

            </TouchableOpacity>
          }
          <View style={s.titleC}>
            <View style={s.iconC}>
              <PageIcon />
            </View>
            <Text style={s.title}>{title}</Text>
          </View>

          <Logo style={s.logo} />

          <Logout style={s.logout} />
        </View>


      </View>
    );
  }
}

const s = StyleSheet.create({
  headerC: {
    height: res(150),
    justifyContent: 'center',
    backgroundColor: '#c3312a',
  },
  background: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomRightRadius: res(30),
    borderBottomLeftRadius: res(30),
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 1,
    shadowRadius: res(7),
    shadowOffset: {
      width:0,
      height: res(10)
    },
    elevation: 4
  },

  returnButton: {
    position: 'absolute',
    top: res(50),
    left: res(20)
  },
  returnButtonIcon: {
    width: res(22),
    height: res(22),
    color: '#DC6929'
  },

  titleC: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'flex-start',
    bottom: res(15),
    left: res(15),
  },
  iconC: {
    width: res(25),
    height: res(25),
    borderRadius: res(12.5),
    padding: res(6),
    marginRight: res(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DC6929'
  },

  title: {
    color: '#DC6929',
    fontSize: res(14)
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    top: res(30),
    width: res(100),
    height: res(100)
  },
  logout: {
    position: 'absolute',
    top: res(50),
    right: res(10),

  }
});