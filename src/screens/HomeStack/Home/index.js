import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {res, T} from '~/helpers';
import {Text, Container, TouchableBox, TouchableBar} from '~/components/my-base'
import NavigationService from '~/NavigationService';
import {Ask, Announce, Competition, Lesson, Online, Results} from './vectors';
import {inject, observer} from "mobx-react";

@inject('AuthStore')
@observer
export default class Home extends Component {

  render() {
    return (
      <Container>

        <Text style={s.welcome}>Hoş Geldin</Text>
        <Text style={s.name}>{this.props.AuthStore.user.UserName}</Text>

        <View style={s.triple}>
          <TouchableBox style={s.box} onPress={() => {
            NavigationService.navigate('Exam');
          }}>
            <View style={s.iconC}><Competition/></View>
            <Text style={s.boxText}> Test Çöz </Text>
          </TouchableBox>
          <TouchableBox style={[s.box, {marginRight: 0}]} onPress={() => {
            NavigationService.navigate('Question');
          }}>
            <View style={s.iconC}><Ask/></View>
            <Text style={s.boxText}> Bize sor </Text>
          </TouchableBox>

        </View>
        <View style={s.triple}>
          {
            false && (
              <>
                <TouchableBox style={s.box} onPress={() => {
                  alert('Çok yakında!')
                }}>
                  <View style={s.iconC}><Online/></View>
                  <Text style={s.boxText}> Online Sınıf </Text>
                </TouchableBox>
                <TouchableBox style={s.box} onPress={() => {
                  alert('Çok yakında!')
                }}>
                  <View style={s.iconC}><Lesson/></View>
                  <Text style={s.boxText}> Ders Anlatımı </Text>
                </TouchableBox>
              </>
            )
          }
          <TouchableBox style={s.box} onPress={() => {
            NavigationService.navigate('Announce');
          }}>
            <View style={s.iconC}><Announce/></View>
            <Text style={s.boxText}> Duyurular </Text>
          </TouchableBox>

          <TouchableBox style={[s.box, {marginRight: 0}]} onPress={() => {
            NavigationService.navigate('Results');
          }}>
            <View style={s.iconC}><Results/></View>
            <Text style={s.boxText}> Sonuçlarım </Text>
          </TouchableBox>
        </View>

      </Container>
    );
  }
}


const s = StyleSheet.create({
  triple: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    alignItems: 'center',
    marginRight: res(15),
    marginBottom: res(15),
    paddingHorizontal: res(5)
  },
  boxText: {
    color: '#DC6929',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: res(13),
    height: res(20),
    marginTop: res(5),
  },
  iconC: {
    width: res(50),
    height: res(50),
    borderRadius: res(25),
    padding: res(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DC6929'
  },
  welcome: {
    color: 'white',
    fontWeight: 'normal'
  },
  name: {
    color: 'white',
    marginBottom: res(20)
  },
});
