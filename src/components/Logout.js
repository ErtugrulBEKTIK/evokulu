import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Modal, View, TouchableWithoutFeedback } from 'react-native';
import {Icon} from 'native-base';
import {inject} from 'mobx-react';
import { res } from '../helpers';
import {Box, Text, TouchableBar} from "~/components/my-base";

@inject('AuthStore')
export default class Logout extends Component {
  state = {
    modal: false
  };

  closeModal = () => {
    this.setState({ modal: false })
  };

  render() {
    return (
      <View style={this.props.style}>
        <Modal transparent={true} visible={this.state.modal} >
          <TouchableWithoutFeedback onPress={this.closeModal}>
            <View style={s.modal}>
              <TouchableWithoutFeedback onPress={() => {}}>
                <Box style={s.modalContainer}>

                  <Text style={s.modalText}>Çıkış yapmak istediğinize emin misiniz?</Text>

                  <View style={{flexDirection: 'row'}}>

                    <TouchableBar style={[s.button, {backgroundColor: '#DC6929'}]} onPress={this.closeModal}>
                      <Text style={[s.buttonText, {color: 'white'}]}>İptal</Text>
                    </TouchableBar>

                    <TouchableBar style={s.button} onPress={this.props.AuthStore.logout}>
                      <Text style={s.buttonText}>Çıkış yap</Text>
                    </TouchableBar>

                  </View>

                </Box>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <TouchableOpacity
          onPress={() => { this.setState({modal: true}) }}
          style={s.buttonContainer}>
          <Icon style={s.icon}
                type="FontAwesome"
                name="sign-out"
          />
        </TouchableOpacity>
      </View>

    );
  }
}

const s = StyleSheet.create({
  buttonContainer: {
    marginRight: res(10)
  },
  icon: {
    fontSize: res(20),
    color: '#DC6929'
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginHorizontal: res(50),
    height: res(150),
  },
  modalText: {
    color: '#545757',
    textAlign: 'center'
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: res(5)
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    color: '#DC6929'
  },
});