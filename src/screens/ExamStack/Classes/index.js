import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {res, T} from '~/helpers';
import {Text, Container, TouchableBox} from '~/components/my-base'
import NavigationService from '~/NavigationService';
import axios from "~/Api";

export default class Classes extends Component {

  state = {
    classes: [],
    loading: true
  };

  componentDidMount() {
    this.getClasses()
  }

  getClasses = async () => {
    const { data: classes } = await axios.post('Class/GetClasses');
    this.setState({ classes, loading: false });
  };

  render() {
    const { classes, loading } = this.state;
    return (
      <Container loading={loading}>
        <Text style={s.infoTitle}>SINIFLAR</Text>

        { classes.map((cls) => (
          <TouchableBox
            onPress={() => { NavigationService.navigate('Categories', { cls }); }}
            style={s.box}
            key={cls.$id}
          >
            <Text style={s.boxText}> {cls.ClassName} </Text>
          </TouchableBox>
        )) }

      </Container>
    );
  }
}


const s = StyleSheet.create({
  box: {
    marginBottom: res(15),
  },
  boxText: {
    color: '#384F7D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: res(17),
  },
  infoTitle: {
    color: 'rgba(56, 79, 125, 0.8)',
    fontSize: res(12),
    marginBottom: res(15)
  }
});