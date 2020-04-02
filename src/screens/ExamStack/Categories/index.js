import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {res} from '~/helpers';
import {Text, Container, TouchableBox} from '~/components/my-base'
import NavigationService from "~/NavigationService";

export default class Categories extends Component {

  constructor(props) {
    super(props);
    this.class = props.navigation.getParam('cls');
  }

  render() {

    return (
      <Container>
        <Text style={s.infoTitle}>KATEGORİLER</Text>

        { this.class.CategoryList.map((category) => (
          <TouchableBox
            onPress={() => { NavigationService.navigate('Exams', { category, class: this.class }); }}
            style={s.box}
            key={category.$id}
          >
            <Image style={s.image} source={{uri:category.PictureUrl}} />
            <Text style={s.boxText}> {category.CategoryName} </Text>
          </TouchableBox>
        )) }
      </Container>
    );
  }
}


const s = StyleSheet.create({
  box: {
    marginBottom: res(15),
    flexDirection: 'row',
    alignItems: 'center'
  },
  boxText: {
    color: '#384F7D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: res(17),
    marginLeft: res(20)
  },
  infoTitle: {
    color: 'rgba(56, 79, 125, 0.8)',
    fontSize: res(12),
    marginBottom: res(15)
  },
  image: {
    resizeMode: 'cover',
    height: res(90),
    width: res(70),

  }
});