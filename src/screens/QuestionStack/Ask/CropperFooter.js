import React from 'react';
import { View, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import {res} from '~/helpers';
import PropTypes from 'prop-types';


const CustomCropperFooter = (props) => (
  <View style={s.buttonsContainer}>
    <TouchableOpacity onPress={props.onCancel} style={s.touchable}>
      <Icon type="MaterialIcons" style={s.icon} name="clear"/>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onRotate} style={s.touchable}>
      <Icon type="MaterialIcons" name='rotate-90-degrees-ccw' style={s.icon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onDone} style={[s.touchable, s.done]}>
      <Icon type="MaterialIcons" name='check' style={[s.icon, {color: 'green', fontSize: res(30),}]} />
    </TouchableOpacity>
  </View>
)

export default CustomCropperFooter;

CustomCropperFooter.propTypes = {
  onDone: PropTypes.func,
  onRotate: PropTypes.func,
  onCancel: PropTypes.func
}

const s = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center', // 'flex-start'
    justifyContent: 'space-between',
    height: '100%'
  },
  text: {
    color: 'white',
    fontSize: 16
  },
  touchable: {
    padding: 10,
  },
  done: {
    height: res(50),
    width: res(50),
    borderRadius: res(25),
    padding: res(5),
    marginRight: res(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    color: 'white',
    fontSize: res(30),
  }
})