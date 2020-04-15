import React, { Component } from 'react';
import {TextInput, View, StyleSheet, Alert, KeyboardAvoidingView, Dimensions, TouchableOpacity} from 'react-native';
import {Formik} from "formik";
import {Text, DismissKeyboardView, TouchableBar, Box} from '~/components/my-base';
import {Icon, Spinner} from "native-base";
import {inject, observer} from "mobx-react";

import {res} from "~/helpers";
import validations from "./validations";
import axios from "~/Api";
import NavigationService from "~/NavigationService";
import {NavigationEvents} from "react-navigation";
import {Bg, Logo2} from "~/assets/images/vectors";
import {getDeviceToken} from "~/Notifications";


@inject('AuthStore')
@observer
export default class SignUp extends Component {

  handleSubmit = async ({ username, password }, bag) => {
    try {
      const response = await axios.post('User/InsertUser',
        {
          UserName: username,
          UserPassword: password,
        }
      );

      if (response.data[0].StatusCode === 201) {

        const response = await axios.post('Login/UserLogin',
          {
            UserName: username,
            UserPassword: password,
          }
        );
        bag.resetForm({});

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

        this.props.AuthStore.saveUser(user, DeviceToken);


      } else if (response.data[0].StatusCode === 400) {
        Alert.alert(
          'Hata',
          'Bu kullanıcı adı daha önce alınmış!'
        );
      }

      bag.setSubmitting(false);

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
            password: '',
            passwordRepeat: ''
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
                <TouchableOpacity
                  onPress={() => { NavigationService.goBack()}}
                  style={s.returnButton}>
                  <Icon style={s.returnButtonIcon}
                        name="arrow-round-back"
                  />
                </TouchableOpacity>
                <Logo2 style={s.logo}/>
                <Box style={s.box}>
                  <View>
                    <Text style={s.label}>Kullanıcı Adı</Text>
                    <TextInput
                      returnKeyType={'next'}
                      onSubmitEditing={() => this.passwordRef.focus()}
                      onChangeText={handleChange('username')}
                      value={values.username}
                      onBlur={() => setFieldTouched('username')}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      style={s.input}
                    />
                    { (errors.username && touched.username) && <Text style={s.error}> {errors.username} </Text>}
                  </View>
                  <View>
                    <Text style={s.label}>Şifre</Text>
                    <TextInput
                      ref={ref => this.passwordRef = ref}
                      onSubmitEditing={() => this.passwordRepeatRef.focus()}
                      returnKeyType={'next'}
                      onChangeText={handleChange('password')}
                      value={values.password}
                      onBlur={() => setFieldTouched('password')}
                      autoCapitalize={'none'}
                      secureTextEntry={true}
                      blurOnSubmit={false}
                      style={s.input}
                    />
                    { (errors.password && touched.password) && <Text style={s.error}> {errors.password} </Text>}

                  </View>
                  <View>
                    <Text style={s.label}>Şifreyi Tekrarla</Text>
                    <TextInput
                      ref={ref => this.passwordRepeatRef = ref}
                      onSubmitEditing={handleSubmit}
                      returnKeyType={'go'}
                      onChangeText={handleChange('passwordRepeat')}
                      value={values.passwordRepeat}
                      onBlur={() => setFieldTouched('passwordRepeat')}
                      autoCapitalize={'none'}
                      secureTextEntry={true}
                      blurOnSubmit={false}
                      style={s.input}
                    />
                    { (errors.passwordRepeat && touched.passwordRepeat) && <Text style={s.error}> {errors.passwordRepeat} </Text>}
                  </View>

                  <TouchableBar style={s.button} onPress={handleSubmit}>
                    {
                      isSubmitting
                        ? <Spinner size={'small'} color={'white'} style={{ height: res(20)}} />
                        : <Text style={s.buttonText}>KAYIT OL</Text>
                    }
                  </TouchableBar>
                </Box>
              </KeyboardAvoidingView>
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
  returnButton: {
    position: 'absolute',
    top: res(30)
  },
  returnButtonIcon: {
    fontSize: res(36),
    color: 'white'
  },
  logo: {
    marginTop: res(70),
    marginBottom: res(20),
    alignSelf: 'center',
    width: res(150),
    height: res(150)
  },
  box: {
    backgroundColor: '#E8DAD1',
    minHeight: res(150),
    padding: res(30),
    marginHorizontal: res(20),
    marginBottom: res(20),
    borderRadius: res(40)
  },
  label: {
    marginLeft: res(15),
    marginBottom: res(5),
    fontWeight: 'normal',
    fontSize: res(14),
    color: '#DC6929'
  },
  input: {
    height: res(40),
    padding: res(10),
    marginBottom: res(10),
    backgroundColor: '#C1AC9A',
    color: '#545757',
    borderRadius: res(20),
    fontFamily: 'Helvetica'
  },
  error: {
    position: 'absolute',
    right: res(10),
    top: res(35),
    fontSize: res(12),
    color: '#c3312a'
  },

  button: {
    backgroundColor: '#DC6929',
    alignSelf: 'center',
    width: res(120),
    marginTop: res(15),
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
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