import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import moment from 'moment';
import 'moment/locale/tr';
import {res, T} from '~/helpers';
import {Text, Container, TouchableBox} from '~/components/my-base'
import NavigationService from '~/NavigationService';
import axios from "~/Api";

export default class List extends Component {

  state = {
    announces: [],
    loading: true
  };

  componentDidMount() {
    this.getClasses();
  }

  getClasses = async () => {
    const { data: announces } = await axios.post('Notification/GetNotifications');
    this.setState({ announces, loading: false });
  };

  render() {

    const { announces, loading } = this.state;

    return (
      <Container loading={loading} scroll>

        { announces.map((announce) => {
          const {$id, title, ReleaseDate} = announce;
          const date = moment(ReleaseDate, 'D.M.YYYY HH:mm:ss');
          return (
            <TouchableBox style={s.box} key={$id}
              onPress={() => { NavigationService.navigate('Detail', { announce }) }}
            >
              <View style={s.calendar}>
                <Text style={s.calendarText}>{date.format('D')}</Text>
                <Text style={s.calendarText}>{date.format('MMMM')}</Text>
                <Text style={s.calendarText}>{date.format('YYYY')}</Text>
              </View>
              <View style={s.body}>
                <Text style={s.title}>{title}</Text>
              </View>
            </TouchableBox>
          );
        }) }
      </Container>
    );
  }
}


const s = StyleSheet.create({
  box: {
    flexDirection: 'row',
    marginBottom: res(15),
    marginHorizontal: res(15),
  },
  calendar: {
    alignItems: 'center',
    backgroundColor: '#E8DAD1',
    padding: res(10),
    width: res(80)
  },
  calendarText: {
    color: '#DC6929',
    fontFamily: 'HelveticaCompressed',
    fontSize: res(20),
    lineHeight: res(20)
  },
  body: {
    flex: 1,
    paddingHorizontal: res(15),
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'HelveticaCompressed',
    color: '#545757',
    fontSize: res(20),
  },
  time: {
    fontFamily: 'HelveticaCondensed',
    color: '#545757',
    fontSize: res(17),
  }
});