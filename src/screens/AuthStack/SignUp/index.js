import React, { Component } from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import {Formik} from "formik";
import { Text, DismissKeyboardView, Button } from '~/components/my-base';
import { Ellipse1, Ellipse2, Ellipse3 } from "~/assets/images/vectors";
import {Icon, Spinner} from "native-base";
import {inject, observer} from "mobx-react";

import {res} from "~/helpers";
import validations from "./validations";
import axios from "~/Api";
import NavigationService from "~/NavigationService";
import {NavigationEvents} from "react-navigation";


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
        Alert.alert(
          'Kayıt Başarılı!'
        );
        NavigationService.navigate('SignIn');
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
        <Ellipse1 style={s.ellipse1} />
        <Ellipse2 style={s.ellipse2} />
        <Ellipse3 style={s.ellipse3} />

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
              <Text style={s.title}>Kayıt</Text>
              <View>
                <Text style={s.label}>KULLANICI ADI</Text>
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
                <Text style={s.label}>ŞİFRE</Text>
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
                <Text style={s.label}>ŞİFREYİ TEKRARLA</Text>
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

              </KeyboardAvoidingView>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Button style={s.buttonC} onPress={handleSubmit}>
                  {
                    isSubmitting
                      ? <Spinner size={'small'} color={'white'} style={{ height: res(20)}} />
                      : <Text style={s.buttonText}>KAYIT OL</Text>
                  }
                </Button>
              </View>


            </React.Fragment>
          )}
        </Formik>


        <Text style={s.bottomText}>
          Zaten bir hesabım var?&nbsp;
          <Text style={s.route} onPress={() => { NavigationService.navigate('SignIn'); }}>
            Giriş
          </Text>
        </Text>
      </DismissKeyboardView>
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
    top: res(290)
  },
  title: {
    marginTop: res(180),
    marginBottom: res(30),
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
  error: {
    position: 'absolute',
    right: res(5),
    fontSize: res(12),
    color: '#ff5f69'
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
  bottomText: {
    color: '#384F7D',
    textAlign: 'center',
    marginTop: res(20),
    marginBottom: res(40)
  },
  route: {
    color: '#384F7D',
    textDecorationLine: 'underline'
  }
});