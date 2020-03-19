import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Image, TouchableOpacity, Linking, Text} from 'react-native';
import {Icon} from 'native-base';
import {inject} from "mobx-react";
import _ from 'lodash';
import axios from '../../../Api';
import {res} from "../../../helpers";

@inject('AuthStore')
export default class DocumentList extends Component {
  state = {
    text: '',
    page: 1,
    documents: [],
    allContacts: [],
    loading: true,
  };

  componentDidMount() {
    this.getDocuments();
  }

  getDocuments = async () => {
    this.setState({
      loading: true,
    });

    const {data} = await axios.post('Dokuman/DokumanListesi');


    this.setState({
      documents: _.sortBy(data, ['Paylaşım_Adı']),
      loading: false,

    });
  };

  renderContactsItem = ({item, index}) => {
    const { Paylaşım_Adı, Hedef_Departmanlar, Pdflink } = item;
    return (
      <TouchableOpacity 
        onPress={() => { Linking.openURL(Pdflink)}}
        style={ styles.itemContainer }
      >
        <View style={styles.iconContainer}>
          <Icon name="document" style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text>{Paylaşım_Adı}</Text>
        </View>
      </TouchableOpacity>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          renderItem={this.renderContactsItem}
          keyExtractor={item => item.$id}
          data={this.state.documents}
        />
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    paddingVertical: res(20),
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: res(20),
    paddingRight: res(10),
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#eee',
    borderRadius: res(5),
    marginHorizontal: res(20),
    marginVertical: res(5)
  },
  iconContainer: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    marginRight: res(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#b1e3d2',
    fontSize: res(25)
  },
  textContainer: {
    flex: 4,
    justifyContent: 'space-around',
    paddingVertical: 3
  }
});