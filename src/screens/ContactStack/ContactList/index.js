import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator, Text} from 'react-native';
import {inject, observer} from "mobx-react";
import _ from 'lodash';
import axios from '../../../Api';
import NavigationService from '../../../NavigationService';
import { T } from '../../../helpers';
import s from './styles';

@inject('AuthStore')
export default class ContactList extends Component {
  state = {
    text: '',
    page: 1,
    contacts: [],
    allContacts: [],
    loading: true,
  };

  componentDidMount() {
    this.getContacts();
  }

  getContacts = async () => {
    this.setState({
      loading: true,
    });

    const { data } = await axios.post('Personel/PersonelListesi');

    this.setState({
      contacts: _.sortBy(data, ['Name', 'Lastname']),
      allContacts: data,
      loading: false,
    });
  };

  renderContactsItem = ({item, index}) => {
    return (
      <TouchableOpacity 
        onPress={() => { NavigationService.navigate('Detail', {item}) }}
        style={[s.itemContainer, {backgroundColor: index % 2 === 1 ? '#fafafa' : ''}]}
      >
        <Image
          style={s.avatar}
          source={{uri: item.file}}/>
        <View style={s.textContainer}>
          <Text style={s.name}>{item.Name} {item.Lastname}</Text>
          <Text style={s.email}>{T.toLowerCase(item.Email)}</Text>
        </View>
      </TouchableOpacity>
    )
  };

  searchFilter = text => {
    const newData = this.state.allContacts.filter(item => {
      const listItem = `${T.toLowerCase(item.Name)} ${T.toLowerCase(item.Lastname)} ${T.toLowerCase(item.Email)}`;

      return listItem.indexOf(T.toLowerCase(text)) > -1;
    });

    this.setState({
      contacts: newData,
    });
  };

  renderHeader = () => {
    const {text} = this.state;
    return (
      <View style={s.searchContainer}>
        <TextInput
          onChangeText={text => {
            this.setState({
              text,
            });
            this.searchFilter(text);
          }}
          value={text}
          placeholder="Ara..."
          style={s.searchInput}/>
      </View>
    )
  };

  renderFooter = () => {
    if (!this.state.loading) return null;
    return(
      <View style={{
        paddingVertical: 20
      }}>
        <ActivityIndicator size="large" />
      </View>
    )
  };

  render() {
    return (
      <FlatList
        ListFooterComponent={this.renderFooter}
        ListHeaderComponent={this.renderHeader()}
        renderItem={this.renderContactsItem}
        keyExtractor={item => item.$id}
        data={this.state.contacts}
      />
    );
  }
}
