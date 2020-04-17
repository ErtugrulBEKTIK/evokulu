import React, {Component} from 'react';
import {StyleSheet, Modal, View, Platform} from 'react-native';
import ImageResizer from 'react-native-image-resizer';
import {inject, observer} from "mobx-react";
import AmazingCropper  from 'react-native-amazing-cropper';


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

  onDone = (croppedUri) => {
    ImageResizer.createResizedImage(croppedUri, 500, 500, 'JPEG', 50, 0)
      .then(({uri}) => {
        this.props.GalleryStore.setLastImage(uri);
      })
      .catch(err => {
        console.log(err);
      });

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