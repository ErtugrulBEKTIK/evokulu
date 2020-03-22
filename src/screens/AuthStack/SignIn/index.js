import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import {Formik} from "formik";
import LinearGradient from "react-native-linear-gradient";
import { Text } from '~/components/my-base';
import { Ellipse1, Ellipse2, Ellipse3 } from "~/assets/images/vectors";

import {res} from "~/helpers";
import validations from "./validations";


export default class SignIn extends Component {
  render() {
    return (
      <View style={s.container}>
        <Ellipse1 style={s.ellipse1} />
        <Ellipse2 style={s.ellipse2} />
        <Ellipse3 style={s.ellipse3} />

        <Text style={s.title}>
          Giriş
        </Text>
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          onSubmit={this._handleSubmit}
          validationSchema={validations}
        >
          {({
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              setFieldTouched,
              isValid,
              isSubmitting
            }) => (
            <React.Fragment>

              <Text style={s.label}>KULLANICI ADI</Text>
              <TextInput
                returnKeyType={'next'}
                onSubmitEditing={() => this.passwordRef._root.focus()}
                onChangeText={handleChange('username')}
                value={values.username}
                onBlur={() => setFieldTouched('username')}
                autoCorrect={false}
                autoCapitalize={'none'}
                style={s.input}
              />

              <Text style={s.label}>ŞİFRE</Text>
              <TextInput
                getRef={ref => this.passwordRef = ref}
                returnKeyType={'go'}
                onChangeText={handleChange('password')}
                value={values.password}
                onBlur={() => setFieldTouched('password')}
                autoCapitalize={'none'}
                secureTextEntry={true}
                style={s.input}
              />

              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity style={s.buttonC}>
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 10}} style={s.button}
                                  colors={[ '#BAFB67', '#75ea6b']} locations={[0.01, 0.15]}>
                    <Text style={s.buttonText}>GİRİŞ YAP</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>


            </React.Fragment>
          )}
        </Formik>

        <Text style={s.route}>Zaten hesabım var Giriş</Text>

      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fe',
    paddingHorizontal: res(20),
  },
  ellipse1: {
    position: 'absolute',
    right: 0,
    top: res(130),
  },
  ellipse2: {
    position: 'absolute'
  },
  ellipse3: {
    position: 'absolute',
    right: res(80),
    top: res(300)
  },
  title: {
    marginTop: res(210),
    marginBottom: res(60),
    fontSize: res(30),
    color: '#384F7D'
  },
  label: {
    fontSize: res(12),
    color: 'rgba(68, 89, 132, 0.3)',
    marginBottom: res(5),
  },
  input: {
    height: res(50),
    padding: res(10),
    marginBottom: res(20),
    backgroundColor: 'white',
    color: '#7e8dab',
    width: '100%',
    borderRadius: res(7),
    shadowColor: 'rgba(71, 55, 255, 0.08)',
    shadowOpacity: 1,
    shadowRadius: res(7),
    shadowOffset: {
      width: 0,
      height: res(10)
    },
    elevation: 4,
    fontFamily: 'ComicSansMS'
  },
  buttonC: {
    alignSelf: 'flex-end',
    width: '100%',
    shadowColor: 'rgba(71, 55, 255, 0.1)',
    shadowOpacity: 1,
    shadowRadius: res(7),
    shadowOffset: {
      width: 0,
      height: res(10)
    },
    elevation: 4,
  },
  button: {
    borderRadius: res(7),
    padding: res(15),
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: res(15)
  },
  route: {
    color: '#384F7D',
    textAlign: 'center',
    marginTop: res(20),
    marginBottom: res(70)
  }
});