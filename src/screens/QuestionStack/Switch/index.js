import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {res, T} from '~/helpers';
import {Text, Container, TouchableBar, Box} from '~/components/my-base'
import {Camera, Question} from '~/assets/images/vectors';
import NavigationService from "~/NavigationService";

export default class Switch extends Component {


  render() {

    return (
      <Container>

        <Box style={s.box}>
          <Text style={s.description}>
            Sorularının fotoğrafını çekip bize gönderebilirsin. {"\n"} Alanında uzman öğretmenlerimiz sorunu en
            kısa zamanda çözüm yollayacaktır.
          </Text>

          <TouchableBar style={[s.button, { backgroundColor: '#DC6929' }]} onPress={() => {
            NavigationService.navigate('Ask');
          }}>
            <View style={[s.shapeC, { backgroundColor: 'white' }]}>
              <Camera/>
            </View>
            <Text style={[s.text, {color: 'white'}]}>Soru Sor!</Text>
          </TouchableBar>


          <TouchableBar style={s.button} onPress={() => {
            NavigationService.navigate('MyQuestions');
          }}>
            <View style={[s.shapeC, { backgroundColor: '#DC6929' }]}>
              <Question/>
            </View>
            <Text style={[s.text, {color: '#DC6929'}]}>Sorularım</Text>
          </TouchableBar>

        </Box>
      </Container>
    );
  }
}


const s = StyleSheet.create({
  box: {
    minHeight: res(150),
    padding: res(30),
    marginHorizontal: res(40),
    marginVertical: res(20),
    borderRadius: res(40)
  },
  description: {
    textAlign: 'center',
    fontSize: res(17),
    color: '#DC6929',
    fontWeight: 'bold',
    marginBottom: res(20)
  },
  button: {
    marginBottom: res(20)
  },
  text: {
    flex: 1,
    textAlign: 'center'
  },
  shapeC: {
    height: res(30),
    width: res(30),
    padding: res(5),
    backgroundColor: '#DC6929',
    borderRadius: res(15),
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain'
  }
});