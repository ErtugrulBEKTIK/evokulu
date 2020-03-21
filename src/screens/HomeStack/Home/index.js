import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, Modal } from 'react-native';
import { Icon } from 'native-base';
import LinearGradient from "react-native-linear-gradient";
import { res } from '~/helpers';
import { Text } from '~/components/my-base'
import Box from '~/components/Box'

export default class SignIn extends Component {

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <LinearGradient style={s.container}
                        start={{x: 0, y: 0}} end={{x: 1, y: 0.9}}
                        colors={['#EEECFF', '#ffffff']}
        >
          <Modal transparent={true} visible={true}>
            <View style={s.inputContainer}>
              <Icon name="search" style={s.inputIcon} />
              <TextInput style={s.input} placeholder="Ara..."/>
            </View>

          </Modal>

          <Text style={s.infoTitle}>SINIFLAR</Text>

          <Box>
            <Text>
              asdfsdf
            </Text>
          </Box>

        </LinearGradient>
      </SafeAreaView>
    );
  }
}


const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: res(70),
    paddingHorizontal: res(25)
  },
  inputContainer: {
    position: 'absolute',
    width: '100%',
    top: res(100),
    padding: res(25),
  },
  input: {
    height: res(40),
    padding: res(10),
    paddingLeft: res(45),
    backgroundColor: 'white',
    width: '100%',
    borderRadius: res(5),
    shadowColor: 'rgba(71, 55, 255, 0.08)',
    shadowOpacity: 1,
    shadowRadius: res(7),
    shadowOffset: {
      width:0,
      height: res(10)
    },
    elevation: 4
  },
  inputIcon: {
    color: '#ddd',
    fontSize: res(25),
    position: 'absolute',
    top: res(31),
    left: res(35),
    zIndex: 5
  },
  infoTitle: {
    color: 'rgba(56, 79, 125, 0.8)',
    fontSize: res(12),
    marginBottom: res(10)
  }
});