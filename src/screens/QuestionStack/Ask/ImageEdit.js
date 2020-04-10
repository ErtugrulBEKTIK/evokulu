import React, {Component} from 'react';
import {StyleSheet, Modal, View, Platform, Image, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';
import {inject, observer} from "mobx-react";

import AmazingCropper, { DefaultFooter }  from 'react-native-amazing-cropper';


import CropperFooter from './CropperFooter';


@inject('GalleryStore')
@observer
export default class ImageEdit extends Component {

  state = {
    photos: [],
  };

  onCancel = () => {
    const { type } = this.props.GalleryStore.selectedImage;
    this.props.GalleryStore.setModal(type, true);
    this.props.GalleryStore.setModal('imageEdit', false);
  };

  onDone = (uri) => {
    console.log(uri);
    this.props.GalleryStore.setLastImage(uri);
  };


  render() {
    const { uri, width, height } = this.props.GalleryStore.selectedImage;
    return (
      <Modal visible={this.props.GalleryStore.modals.imageEdit}>
        <View style={{flex: 1}}>
          <AmazingCropper
            footerComponent={<CropperFooter/>}
            imageUri={uri}
            onDone={this.onDone}
            onCancel={this.onCancel}
            imageWidth={width}
            imageHeight={height}
            BORDER_WIDTH={30}
          />
        </View>
      </Modal>
    );
  }
}


const s = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center', // 'flex-start'
    justifyContent: 'space-between',
    height: '100%'
  },
  text: {
    color: 'white',
    fontSize: 16
  },
  touchable: {
    padding: 10,
  },
  rotateIcon: {
    color: 'white',
    fontSize: 26,
    ...Platform.select({
      android: {
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#000000',
        textShadowRadius: 3,
        shadowOpacity: 0.9,
        elevation: 1
      },
      ios: {
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#000000',
        shadowRadius: 3,
        shadowOpacity: 0.9
      }
    }),
  },
})