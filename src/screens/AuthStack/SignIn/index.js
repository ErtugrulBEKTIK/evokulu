import React, { Component } from 'react';
import {TextInput, View, StyleSheet, Alert, KeyboardAvoidingView, Dimensions} from 'react-native';
import {Formik} from "formik";
import { Text, DismissKeyboardView, TouchableBar } from '~/components/my-base';
import {Spinner} from "native-base";
import {inject, observer} from "mobx-react";
import { NavigationEvents } from "react-navigation";

import {res} from "~/helpers";
import validations from "./validations";
import axios from "~/Api";
import { getDeviceToken } from "~/Notifications";
import NavigationService from "~/NavigationService";
import {Bg, Logo2} from "~/assets/images/vectors";


@inject('AuthStore')
@observer
export default class SignIn extends Component {

  handleSubmit = async ({ username, password }, bag) => {
    try {
      const response = await axios.post('Login/UserLogin',
        {
          UserName: username,
          UserPassword: password,
        }
      );
      bag.resetForm({});
      if (!response.data) {
        Alert.alert(
          'Hata',
          'Giriş bilgileri hatalı.'
        );
        return false;
      }

      const user = response.data[0];
      const DeviceToken = await getDeviceToken;

      // Save user's device token
      const tokenResult = await axios.post('DeviceToken/InsertDeviceToken',
        {
          tokenkey: user.TokenKey,
          UserId: user.UserId,
          DeviceToken
        }
      );

      if (!tokenResult.data) {
        Alert.alert(
          'Hata',
          'Sorun oluştu.'
        );
        return false;
      }

      bag.setSubmitting(false);
      this.props.AuthStore.saveUser(user, DeviceToken);
    }catch (e) {
      bag.setSubmitting(false);
      console.log(e);
      Alert.alert(
        'Hata',
        'Bağlantı hatası.'
      );
    }
  };

  render() {
    return (
      <DismissKeyboardView style={s.container}>
        <Bg style={s.background}/>

        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          onSubmit={this.handleSubmit}
          validationSchema={validations}
        >
          {({
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              setFieldTouched,
              resetForm,
              isSubmitting
            }) => (
            <React.Fragment>
              <NavigationEvents onWillFocus={resetForm} />
              <KeyboardAvoidingView behavior={"position"}>
                <Logo2 style={s.logo}/>
                <View>
                  <TextInput
                    returnKeyType={'next'}
                    placeholder="Kullanıcı Adı"
                    onSubmitEditing={() => this.passwordRef.focus()}
                    onChangeText={handleChange('username')}
                    value={values.username}
                    onBlur={() => setFieldTouched('username')}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    style={s.input}
                  />
                  { (errors.username && touched.username) && <Text style={s.error}> {errors.username} </Text> }
                </View>
                <View>
                  <TextInput
                    ref={ref => this.passwordRef = ref}
                    placeholder="Şifre"
                    onSubmitEditing={handleSubmit}
                    returnKeyType={'go'}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    onBlur={() => setFieldTouched('password')}
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                    style={s.input}
                  />
                  { (errors.password && touched.password) && <Text style={s.error}> {errors.password} </Text>}
                </View>
              </KeyboardAvoidingView>
              <Text style={s.route} onPress={() => { NavigationService.navigate('SignUp'); }}>
                Kayıt ol!
              </Text>
              <TouchableBar style={s.button} onPress={handleSubmit}>
                {
                  isSubmitting
                    ? <Spinner size={'small'} color={'#DC6929'} style={{ height: res(20)}} />
                    : <Text style={s.buttonText}>GİRİŞ YAP</Text>
                }
              </TouchableBar>


            </React.Fragment>
          )}
        </Formik>

      </DismissKeyboardView>
    );
  }
}

const s = StyleSheet.create({
  background: {
    position: 'absolute',
    width: Math.round((Dimensions.get('window').height+100) * 9/16),
    height: Math.round(Dimensions.get('window').height+100),
  },
  container: {
    flex: 1,
    paddingHorizontal: res(20),
  },
  logo: {
    marginTop: res(150),
    marginBottom: res(30),
    alignSelf: 'center',
    width: res(100),
    height: res(100)
  },
  input: {
    marginHorizontal: res(15),
    height: res(40),
    padding: res(10),
    marginBottom: res(20),
    backgroundColor: 'white',
    color: '#545757',
    borderRadius: res(20),
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 1,
    shadowRadius: res(7),
    shadowOffset: {
      width: 0,
      height: res(10)
    },
    elevation: 4,
    fontFamily: 'Helvetica'
  },
  error: {
    position: 'absolute',
    right: res(20),
    top: res(10),
    fontSize: res(12),
    color: '#c3312a'
  },

  button: {
    alignSelf: 'center',
    width: res(120),
    marginTop: res(50),
  },
  buttonText: {
    textAlign: 'center',
    color: '#DC6929',
    fontSize: res(15)
  },
  route: {
    fontSize: res(14),
    fontWeight: 'normal',
    color: 'white',
    fontFamily: 'Helvetica',
    alignSelf: 'flex-end',
    marginRight: res(25)
  }
});