import React, { Component } from 'react';
import {View, TextInput} from "react-native";
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { res } from '~/helpers';
import { Text } from '~/components/my-base'
import {Icon} from "native-base";
import NavigationService from "~/NavigationService";

export default class Header extends Component {

  componentDidMount() {
    console.log(this.props.navigation);
  }

  render() {
    return (
      <View style={s.headerC}>
        <View style={s.backgroundC}>
          <LinearGradient style={s.background}
                          start={{x: 0, y: 1}} end={{x: 1, y: 0}}
                          locations={[0.1, 0.55]}
                          colors={['#A098F3', '#776CE7']}/>
        </View>

        {
          this.props.renderBackButton &&
          <TouchableOpacity
            onPress={() => { NavigationService.goBack()}}
            style={s.returnButton}>
            <Icon style={s.returnButtonIcon}
                  name="arrow-round-back"
            />
          </TouchableOpacity>
        }
        <Text style={s.title}>{this.props.title}</Text>
        {
          !this.props.hideSearch &&
          <View style={s.inputContainer}>
            <Icon name="search" style={s.inputIcon}/>
            <TextInput style={s.input} placeholder="Ara ..."/>
          </View>
        }

      </View>
    );
  }
}

const s = StyleSheet.create({
  headerC: {
    height: res(120),
    justifyContent: 'center',
  },
  backgroundC: {
    height: res(200),
    width: res(200),
    borderRadius: res(200),
    alignSelf: 'center',
    transform: [
      {scaleX: 4}
    ],
    overflow: 'hidden',
  },
  background: {
    flex: 1,
  },
  returnButton: {
    position: 'absolute',
    top: res(50),
    left: res(20)
  },
  returnButtonIcon: {
    fontSize: res(36),
    color: '#fff'
  },
  title: {
    position: 'absolute',
    alignSelf: 'center',
    top: res(75),
    color: 'white',
    fontSize: res(19)
  },
  inputContainer: {
    position: 'absolute',
    width: '100%',
    top: res(110),
    padding: res(25)
  },
  input: {
    height: res(40),
    padding: res(10),
    paddingLeft: res(45),
    backgroundColor: 'white',
    width: '100%',
    borderRadius: res(7),
    shadowColor: 'rgba(71, 55, 255, 0.08)',
    shadowOpacity: 1,
    shadowRadius: res(7),
    shadowOffset: {
      width: 0,
      height: res(10)
    },
    elevation: 4,
    fontFamily: 'ComicSansMS'
  },
  inputIcon: {
    color: '#ddd',
    fontSize: res(25),
    position: 'absolute',
    top: res(31),
    left: res(35),
    zIndex: 5,
    elevation: 5,
  }
});