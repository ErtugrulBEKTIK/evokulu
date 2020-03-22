import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {res} from '~/helpers';
import {Text, Container, TouchableBox} from '~/components/my-base'

export default class Topics extends Component {

  render() {
    return (
      <Container>
        <Text style={s.infoTitle}>TÜRKÇE KONU SEÇ</Text>

        <TouchableBox style={s.box}>
          <Text style={s.boxText}> Yazım Kuralları </Text>
        </TouchableBox>
        <TouchableBox style={s.box}>
          <Text style={s.boxText}> Noktalama İşaretleri </Text>
        </TouchableBox>
        <TouchableBox style={s.box}>
          <Text style={s.boxText}> Paragraf </Text>
        </TouchableBox>
        <TouchableBox style={s.box}>
          <Text style={s.boxText}> Cümlenin Öğeleri </Text>
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