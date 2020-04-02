import React from 'react';
import { View, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import {res} from '~/helpers';
import PropTypes from 'prop-types';


const CustomCropperFooter = (props) => (
  <View style={styles.buttonsContainer}>
    <TouchableOpacity onPress={props.onCancel} style={styles.touchable}>
      <Icon type="MaterialIcons" style={styles.icon} name="clear"/>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onRotate} style={styles.touchable}>
      <Icon type="MaterialIcons" name='rotate-90-degrees-ccw' style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onDone} style={styles.touchable}>
      <Text style={styles.text}>DONE</Text>
    </TouchableOpacity>
  </View>
)

export default CustomCropperFooter;

CustomCropperFooter.propTypes = {
  onDone: PropTypes.func,
  onRotate: PropTypes.func,
  onCancel: PropTypes.func
}

const styles = StyleSheet.create({
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
  icon: {
    color: 'white',
    fontSize: res(30),
  }
})