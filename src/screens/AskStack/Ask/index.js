import React, {Component} from 'react';
import {StyleSheet, Modal, StatusBar, Image} from 'react-native';
import {inject, observer} from "mobx-react";
import {res, T} from '~/helpers';
import {Text, Container, Button} from '~/components/my-base'

import Camera from './Camera';
import Gallery from './Gallery';
import ImageEdit from './ImageEdit';


@inject('GalleryStore')
@observer
export default class Ask extends Component {


  render() {

    return (
      <Container>

        <Button style={s.button} onPress={() => {
          this.props.GalleryStore.setModal('camera', true)
        }}>
          <Text style={s.text}>Soru Gönder</Text>
        </Button>

        <Camera />
        <Gallery />
        <ImageEdit />

        {
          this.props.GalleryStore.lastImageUri
            ? <Image style={s.image} source={{uri: this.props.GalleryStore.lastImageUri}} />
            : null
        }

      </Container>
    );
  }
}


const s = StyleSheet.create({
  button: {
    alignItems: 'center'
  },
  text: {
    color: 'white',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain'
  }
});