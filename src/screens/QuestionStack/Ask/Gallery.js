import React, {Component} from 'react';
import {StyleSheet, Modal, View, Platform} from 'react-native';
import {Header, Left, Right, Icon, Body, Title, Button} from 'native-base';
import {inject, observer} from "mobx-react";
import CameraRollPicker from 'react-native-camera-roll-picker';
import {res, T} from '~/helpers';
import {Text, Container} from '~/components/my-base'
import CameraRoll from "@react-native-community/cameraroll";


@inject('GalleryStore')
@observer
export default class Gallery extends Component {

  state = {
    selected: [],
  };

  componentDidMount() {
    CameraRoll.getPhotos({
      first: 20,
      assetType: "Photos",
      groupTypes: 'All'
    }).then((data) => {
      this.setState({photos: data});
    })
  }


  getSelectedImages = (selected) => {
    console.log(selected);
    const image = {
      type: 'gallery',
      ...selected[0]
    };
    this.props.GalleryStore.setImage(image);
    this.setState({selected: []});
  };

  render() {
    return (
      <Modal visible={this.props.GalleryStore.modals.gallery}>
        <View style={{flex: 1}}>
        <Header style={ (Platform.OS === 'android') && { backgroundColor: '#CD462A' }}>
          <Left>
            <Button transparent onPress={() => {
              this.props.GalleryStore.setModal('gallery', false);
            }}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Resim Seçin</Title>
          </Body>
          <Right>
          </Right>
        </Header>


        <CameraRollPicker
          selectSingleItem
          groupTypes="All"
          imageMargin={1}
          selected={this.state.selected}
          selectedMarker={<View style={s.markerC}><Icon style={s.marker} name="checkmark-circle-outline" /></View>}
          callback={this.getSelectedImages} />

      </View>
      </Modal>
    );
  }
}


const s = StyleSheet.create({
  markerC: {
    position: 'absolute',
    top: res(5),
    right: res(5),
    backgroundColor: 'white',
    borderRadius: res(12),
    height: res(22),
    width: res(23),

  },
  marker: {
    marginTop: -res(4),
    fontSize: res(29),
    color: '#0e75e0'
  }

});