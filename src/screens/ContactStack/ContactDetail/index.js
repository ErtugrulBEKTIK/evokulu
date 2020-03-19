import React, { Component } from 'react';
import { View, Image, TouchableOpacity} from 'react-native';
import { Text, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { T } from '../../../helpers';
import s from './styles';

export default class ContactDetail extends Component {


  constructor(props) {
    super(props);
    this.item = props.navigation.getParam('item');
  }

  render() {
    const { Name, Lastname, Email, Department, GSM, file, Title } = this.item;
    return (
      <View style={s.container}>
        <View style={s.header}>
          <View style={s.clipper}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1.5, y: 0.2}}
              colors={['#48aec4', '#74c2d2', '#a0d5e0']}
              style={s.linearGradient}
            >

            </LinearGradient>

            <Text style={s.headerTitle}>{Name} {Lastname}</Text>

            <View style={s.photoContainer}>
              <Image source={{uri: file}} style={s.photo}/>
            </View>

          </View>
        </View>

        <View style={s.body}>
          <View style={s.itemContainer}>
            <View style={s.iconContainer}>
              <View style={s.iconBorder}>
                <Icon
                  style={[s.icon, {color: '#e6b2c9'}]}
                  name='git-network'/>
              </View>
            </View>
            <View style={s.textContainer}>
              <Text style={s.title}>Departman</Text>
              <Text>{T.capitalizeWord(Department)}</Text>
            </View>
          </View>
          <View style={s.itemContainer}>
            <View style={s.iconContainer}>
              <View style={s.iconBorder}>
                <Icon
                  style={[s.icon, {color: '#eee2aa'}]}
                  name='briefcase'/>
              </View>
            </View>
            <View style={s.textContainer}>
              <Text style={s.title}>Görev</Text>
              <Text>{T.capitalizeWord(Title)}</Text>
            </View>
          </View>
          <View style={s.itemContainer}>
            <View style={s.iconContainer}>
              <View style={s.iconBorder}>
                <Icon
                  style={[s.icon, {color: '#8cbeec'}]}
                  name='phone-portrait'/>
              </View>
            </View>
            <View style={s.textContainer}>
              <Text style={s.title}>GSM</Text>
              <Text>{GSM}</Text>
            </View>
          </View>
          <View style={s.itemContainer}>
            <View style={s.iconContainer}>
              <View style={s.iconBorder}>
                <Icon
                  style={[s.icon, {color: '#b1e3d2'}]}
                  name='mail'/>
              </View>
            </View>
            <View style={s.textContainer}>
              <Text style={s.title}>Email</Text>
              <Text>{Email}</Text>
            </View>
          </View>
        </View>

      </View>
    );
  }
}
