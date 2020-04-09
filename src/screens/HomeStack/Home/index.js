import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {res, T} from '~/helpers';
import {Text, Container, TouchableBox} from '~/components/my-base'
import NavigationService from '~/NavigationService';
import {Logo, Announce, Question} from '~/assets/images/vectors';

export default class Home extends Component {

  render() {
    return (
      <Container>

        <Text style={s.welcome}>Hoş Geldin</Text>
        <Text style={s.name}>Metehan Altaş</Text>

        <View style={s.triple}>
          <TouchableBox style={s.box}>
            <View style={s.iconC}>
              <Question/>
            </View>
            <Text style={s.boxText}> Dersler </Text>
          </TouchableBox>
          <TouchableBox style={s.box}>
            <Text style={s.boxText}> Dersler </Text>
          </TouchableBox>
          <TouchableBox style={[s.box, {marginRight: 0}]}>
            <Text style={s.boxText}> Dersler </Text>
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
  },
  boxText: {
    color: '#DC6929',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: res(17),
    height: res(20),
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