import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {res} from '~/helpers';
import {Text, Container, TouchableBox} from '~/components/my-base'
import NavigationService from "~/NavigationService";

export default class Categories extends Component {

  render() {
    return (
      <Container>
        <Text style={s.infoTitle}>KATEGORİLER</Text>

        <TouchableBox onPress={() => { NavigationService.navigate('Topics'); }} style={s.box}>
          <Text style={s.boxText}> Matematik </Text>
        </TouchableBox>
        <TouchableBox onPress={() => { NavigationService.navigate('Topics'); }} style={s.box}>
          <Text style={s.boxText}> Türkçe </Text>
        </TouchableBox>
        <TouchableBox onPress={() => { NavigationService.navigate('Topics'); }} style={s.box}>
          <Text style={s.boxText}> Sosyal Bilgiler </Text>
        </TouchableBox>
        <TouchableBox onPress={() => { NavigationService.navigate('Topics'); }} style={s.box}>
          <Text style={s.boxText}> Fen Bilgisi </Text>
        </TouchableBox>
      </Container>
    );
  }
}


const s = StyleSheet.create({
  box: {
    marginBottom: res(15),
  },
  boxText: {
    color: '#384F7D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: res(17),
  },
  infoTitle: {
    color: 'rgba(56, 79, 125, 0.8)',
    fontSize: res(12),
    marginBottom: res(15)
  },
});