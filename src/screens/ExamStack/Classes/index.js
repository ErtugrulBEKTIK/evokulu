import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {res, T} from '~/helpers';
import {Text, Container, TouchableBar} from '~/components/my-base'
import NavigationService from '~/NavigationService';
import axios from "~/Api";
import Sound from "react-native-sound";

export default class Classes extends Component {

  state = {
    classes: [],
    loading: true
  };

  componentDidMount() {
    this.getClasses();

  }

  getClasses = async () => {
    const { data: classes } = await axios.post('Class/GetClasses');
    this.setState({ classes, loading: false });
  };

  render() {
    const { classes, loading } = this.state;
    return (
      <Container loading={loading} scroll>
        { classes.map((cls) => (
          <TouchableBar
            onPress={() => { NavigationService.navigate('Categories', { cls }); }}
            style={s.box}
            key={cls.$id}
          >
            <Text style={s.boxText}> {cls.ClassName} </Text>
          </TouchableBar>
        )) }

        <View style={{marginBottom: res(50)}}/>
      </Container>
    );
  }
}


const s = StyleSheet.create({
  box: {
    marginBottom: res(15),
    width: res(200),
    alignSelf: 'center'
  },
  boxText: {
    color: '#C0292B',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: res(15),
  }
});