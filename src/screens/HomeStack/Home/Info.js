import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AnimateNumber from 'react-native-countup'

import {res} from "../../../helpers";
import axios from "../../../Api";

export default class ShortCuts extends Component {
  state = {
    data: {
      $id: "1",
      UyeSayisi: 0,
      GonulluSayisi: 0,
      YurtSayisi: 0,
      CalisanSayisi: 0
    }
  };

  componentDidMount(){
    this.getContacts()
  }

  getContacts = async () => {

    try {
      const { data } = await axios.post('Anasayfa/VakifBilgileri');

      console.log(data);
      this.setState({
        data: data[0]
      });

    }catch (e) {
      console.log(e);
    }


  };

  render() {
    const {UyeSayisi, GonulluSayisi, YurtSayisi, CalisanSayisi} = this.state.data;

    return (
      <View style={s.container}>
        <View style={s.row}>
          <TouchableOpacity
            style={[s.item, {borderColor: '#48751e'}]}>
            <Text style={[s.number, {color: '#48751e'}]}>
              <AnimateNumber value={UyeSayisi} countBy={8934} timing="easeOut"/>
            </Text>
            <Text style={[s.text, {color: '#48751e'}]}>Üye</Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={[s.item, {borderColor: '#b47f30'}]}>
            <Text style={[s.number, {color: '#b47f30'}]}>
              <AnimateNumber value={GonulluSayisi} countBy={4234} timing="easeOut"/>
            </Text>
            <Text style={[s.text, {color: '#b47f30'}]}>Gönüllü</Text>
          </TouchableOpacity>
        </View>
        <View style={s.row}>
          <TouchableOpacity
            style={[s.item, {borderColor: '#368bb2'}]}>
            <Text style={[s.number, {color: '#368bb2'}]}>
              <AnimateNumber value={YurtSayisi} countBy={2} timing="easeOut"/>
            </Text>
            <Text style={[s.text, {color: '#368bb2'}]}>Yurt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[s.item, {borderColor: '#94221f'}]}>
            <Text style={[s.number, {color: '#94221f'}]}>
              <AnimateNumber value={CalisanSayisi} countBy={17} timing="easeOut"/>
            </Text>
            <Text style={[s.text, {color: '#94221f'}]}>Çalışan</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 2,
    padding: res(5),
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#fcfcfc',
    margin: res(5),
    padding: res(15),
  },
  number:{
    fontSize: res(30),
    color: 'white',
    marginBottom: 5
  },
  text: {
    color: 'white',
    fontSize: res(16),
  }
});