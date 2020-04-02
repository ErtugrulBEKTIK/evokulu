import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {res, T} from '~/helpers';
import {Text, Container, TouchableBox} from '~/components/my-base'
import NavigationService from '~/NavigationService';

export default class Home extends Component {

  render() {
    return (
      <Container>
        <Text style={s.infoTitle}>Duyurular</Text>

        { T.range(1,9).map((no) => (
          <TouchableBox style={s.box} key={no}>
            <Text style={s.boxText}> {no}. Duyuru </Text>
          </TouchableBox>
        )) }
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