import React, {Component} from 'react';
import {StyleSheet, Modal, Platform, StatusBar, SafeAreaView, View, TouchableOpacity } from 'react-native';
import {RNCamera} from 'react-native-camera';
import {inject, observer} from "mobx-react";
import {res, T, checkPermission} from '~/helpers';
import {Icon} from 'native-base'
import NavigationService from '~/NavigationService';

import ImageRotate from 'react-native-image-rotate';

@inject('GalleryStore')
@observer
export default class Camera extends Component {

  state = {
    flashMode: 2,
    cameraType: 'back',
  };

  setFlashMode = () => {
    const { flashMode } = this.state;
    const mode = flashMode === 2 ? 0 : flashMode + 1;
    
    this.setState({flashMode: mode})
  };

  setCameraType = () => {
    const { cameraType } = this.state;
    const type = cameraType === 'front' ? 'back' : 'front';

    this.setState({cameraType: type})
  };

  takePicture = async () => {
    const options = {
      quality: 0.5,
      base64: true,
      forceUpOrientation: true
    };

    if (Platform.OS === 'android' && Platform.Version > 22) {
      //checkPermission('photo');
    }

    const data = await this.camera.takePictureAsync(options);

    const image = {
      type: 'camera',
      ...data
    };

    this.props.GalleryStore.setImage(image);

    //await CameraRoll.saveToCameraRoll(data.uri);
  };

  render() {
    const flashIcons = ['flash-off', 'flash-on', 'flash-auto'];
    const { flashMode, cameraType } = this.state;
    return (
      <Modal visible={this.props.GalleryStore.modals.camera}>
        <StatusBar hidden={true} />
        <RNCamera
        ref={ref => this.camera = ref}
        captureAudio={false}
        flashMode={flashMode}
        style={{flex: 1}}
        type={cameraType}
      >
        <SafeAreaView style={s.controllerC}>
          <View style={s.topController}>
            <TouchableOpacity onPress={() => this.props.GalleryStore.setModal('camera', false)}>
              <Icon type="MaterialIcons" style={s.icon} name="clear"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.setFlashMode}>
              <Icon type="MaterialIcons" style={s.icon} name={flashIcons[flashMode]}/>
            </TouchableOpacity>
          </View>
          <View style={s.bottomController}>
            <TouchableOpacity onPress={() => {
              checkPermission('gallery').then((permission) => {
                console.log('xxx', permission);
                if(permission === 'granted'){
                  this.props.GalleryStore.setModal('gallery', true);
                  this.props.GalleryStore.setModal('camera', false);
                }
              });

            }}>
              <Icon type="MaterialIcons" style={s.icon} name="collections"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.takePicture} style={s.capture}/>
            <TouchableOpacity onPress={this.setCameraType}>
              <Icon type="MaterialIcons" style={s.icon} name="switch-camera"/>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

      </RNCamera>
      </Modal>
    );
  }
}


const s = StyleSheet.create({
  controllerC: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topController: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: res(20),
  },
  bottomController: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: res(20),
    marginBottom: res(30)
  },
  icon: {
    color: 'white',
    fontSize: res(30),
  },
  capture: {
    height: res(60),
    width: res(60),
    borderRadius: res(30),
    borderColor: 'white',
    borderWidth: res(4),
  },
});