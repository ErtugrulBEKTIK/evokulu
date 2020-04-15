import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import moment from 'moment';
import 'moment/locale/tr';
import {res, T} from '~/helpers';
import {Text, Container, Box} from '~/components/my-base'
import NavigationService from '~/NavigationService';
import axios from "~/Api";

export default class Announce extends Component {

  constructor(props) {
    super(props);
    this.announce = props.navigation.getParam('announce');
  }


  render() {

    const { title, text, ReleaseDate } = this.announce;

    return (
      <Container>
        <Box style={s.box}>
          <ScrollView>
            <Text style={s.title}>{title}</Text>
            <Text style={s.text}>{text}</Text>
            <Text style={s.date}>{moment(ReleaseDate, 'D.M.YYYY HH:mm:ss').format('D.M.YYYY')}</Text>
          </ScrollView>
        </Box>
      </Container>
    );
  }
}


const s = StyleSheet.create({
  box: {
    marginBottom: res(15),
    marginHorizontal: res(15),
    padding: res(15),
    minHeight: res(400)
  },
  title: {
    fontFamily: 'HelveticaCompressed',
    color: '#545757',
    fontSize: res(25),
    marginBottom: res(10)
  },
  text: {
    fontFamily: 'HelveticaCondensed',
    color: '#545757',
    fontSize: res(17),
    marginBottom: res(10)
  },
  date: {
    fontFamily: 'HelveticaCondensed',
    color: '#7f8282',
    fontSize: res(12),
  }
});