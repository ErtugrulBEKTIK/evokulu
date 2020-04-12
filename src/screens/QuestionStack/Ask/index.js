import React, {Component} from 'react';
import {StyleSheet, View, Image, TextInput, Alert, Modal} from 'react-native';
import {inject, observer} from "mobx-react";
import {res, T, createFormData} from '~/helpers';
import {Text, Container, Button, TouchableBar, Box} from '~/components/my-base'
import RNPickerSelect from 'react-native-picker-select';
import Camera from './Camera';
import Gallery from './Gallery';
import ImageEdit from './ImageEdit';
import NavigationService from "~/NavigationService";
import {Camera as CameraIcon} from "~/assets/images/vectors";
import defaultAxios from "axios";
import axios from "~/Api";
import { API_BASE, API_KEY} from "~/../config";
import {Spinner} from "native-base";
import LottieView from "lottie-react-native";

@inject('GalleryStore', 'AuthStore')
@observer
export default class Ask extends Component {

  state = {
    classes: [],
    lessons: [],
    topics: [],
    classLoading: true,
    topicLoading: false,
    selectedClass: null,
    selectedLesson: null,
    question: '',
    isSubmitting: false,
    resultModal: false
  };

  componentDidMount() {
    this.getClasses();
  }

  getClasses = async () => {
    const { data } = await axios.post('Class/GetClasses');

    let classes = [];
    let lessons = {};

    data.map((item) => {

      classes.push({
        label: item.ClassName,
        value: item.ClassId.toString()
      });

      let lesson = [];

      item.CategoryList.map((i) => {
        lesson.push({
          label: i.CategoryName,
          value: i.CategoryId.toString()
        });
      });

      lessons = {...lessons, [item.ClassId]: lesson}


    });

    this.setState({
      classes,
      lessons,
      selectedLesson: null,
      selectedTopic: null,
      classLoading: false
    });
  };

  select = (value, field) => {

    let key = 'selected'+field;
    this.setState({[key]: value});

  };

  handleSubmit = async () => {
    try {

      this.setState({isSubmitting: true});
      const { selectedClass, selectedLesson, question } = this.state;

      const data = {
        apikey: API_KEY,
        Tokenkey: this.props.AuthStore.token,
        UserId: this.props.AuthStore.user.UserId,
        Question: question,
        ClassId: selectedClass,
        CategoryId: selectedLesson,
      };

      const image = {
        paramName: 'FileUrl',
        type: 'image/jpg',
        newName: 'questionImage.jpg',
        uri: this.props.GalleryStore.lastImageUri
      };
      console.log(this.props.GalleryStore.lastImageUri);
      const formData = createFormData(data, image);

      const response = await defaultAxios.post(API_BASE+'AskQuestion/InsertAskQuestion', formData, {
        headers: {
          'accept': 'application/json',
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        }
      });
      this.setState({isSubmitting: false});

      if (!response.data) {

        Alert.alert(
          'Hata',
          'Giriş bilgileri hatalı.'
        );
        return false;
      }

      this.setState({ resultModal: true });

    }catch (e) {
      this.setState({isSubmitting: false});
      console.log(e);
      Alert.alert(
        'Hata',
        'Bağlantı hatası.'
      );
    }
  };

  handleModalButton = () => {

    NavigationService.navigate('MyQuestions');

    this.setState({
      resultModal: false,
      selectedClass: null,
      selectedLesson: null,
      question: '',
    });
    this.props.GalleryStore.setLastImage('');


  };

  render() {

    const { classes, lessons, classLoading, selectedClass, selectedLesson, isSubmitting, resultModal } = this.state;

    return (
      <Container scroll scrolViewRef={(ref) => { this.scrollRef = ref }} >
        <Camera />
        <Gallery />
        <ImageEdit />

        <Modal transparent={true} visible={resultModal} >
          <View style={s.modal}>
            <Box style={s.modalContainer}>
              <LottieView style={{height: res(150)}} source={require('~/assets/animations/success.json')} autoPlay loop={false} />
              <Text style={s.modalText}>
                Sorunuz başarılı bir şekilde gönderilmiştir!
              </Text>
              <TouchableBar style={{ backgroundColor: '#DC6929' }} onPress={this.handleModalButton}>
                <Text style={{color: 'white'}}>Sorularım</Text>
              </TouchableBar>
            </Box>
          </View>
        </Modal>

        <Box style={s.box}>

          <View style={s.photoC}>

            {
              this.props.GalleryStore.lastImageUri
                ? <Image style={s.image} source={{uri: this.props.GalleryStore.lastImageUri}} />
                : null
            }

            <TouchableBar style={[s.selectPhoto, { backgroundColor: '#DC6929' }]} onPress={() => {
              this.props.GalleryStore.setModal('camera', true)
            }}>
              <View style={s.selectPhotoShape}>
                <CameraIcon/>
              </View>
              <Text style={s.selectPhotoText}>ÇEK / SEÇ</Text>
            </TouchableBar>
          </View>

          <View style={s.pickerC}>
            <RNPickerSelect
              value={selectedClass}
              disabled={classLoading}
              doneText="Kapat"
              useNativeAndroidPickerStyle={false}
              placeholder={{label: classLoading ? 'Yükleniyor...' : 'Sınıf seçiniz...'}}
              textInputProps={{style: s.input}}
              onValueChange={(value) => { this.select(value, 'Class') }}
              items={classes}
            />

            <RNPickerSelect
              value={selectedLesson}
              disabled={!selectedClass}
              doneText="Kapat"
              useNativeAndroidPickerStyle={false}
              placeholder={{label: 'Ders seçiniz...'}}
              textInputProps={{style: s.input}}
              onValueChange={(value) => { this.select(value, 'Lesson') }}
              items={selectedClass ? lessons[selectedClass] : []}
            />

          </View>

          <TextInput
            placeholder="Açıklama ekleyiniz..."
            style={[s.input, s.description]}
            multiline={true}
            onFocus={() => { this.scrollRef.scrollTo({y: res(230), animated: true}); }}
            onChangeText={question => this.setState({question})}
            value={this.state.text}/>


        </Box>

        <TouchableBar style={[s.button]} onPress={this.handleSubmit}>
          {
            isSubmitting
              ? <Spinner size={'small'} color={'#DC6929'} style={{ height: res(20)}} />
              : <Text style={s.buttonText}>Gönder</Text>
          }

        </TouchableBar>

        <View style={{height: res(300)}}/>

      </Container>
    );
  }
}


const s = StyleSheet.create({

  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginHorizontal: res(50),
    height: res(300),
  },
  modalText: {
    color: '#545757',
    textAlign: 'center'
  },
  pickerC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: res(40),
    marginBottom: res(10)
  },
  input: {
    fontWeight: '100',
    textAlign: 'center',
    color: '#545757',
    backgroundColor: '#C1AC9A',
    height: res(40),
    width: res(120),
    borderRadius: res(20)
  },
  description: {
    fontWeight: 'normal',
    padding: res(10),
    height: res(100),
    width: '100%',
    overflow: 'hidden'
  },
  box: {
    backgroundColor: '#E8DAD1',
    minHeight: res(150),
    padding: res(30),
    marginHorizontal: res(20),
    marginBottom: res(20),
    borderRadius: res(40)
  },
  photoC: {
    backgroundColor: 'white',
    flex: 1,
    borderWidth: res(3),
    borderColor: '#DC6929',
    borderStyle: 'dashed',
    height: res(150),
  },
  selectPhoto: {
    position: 'absolute',
    alignSelf: 'center',
    height: res(30),
    width: res(120),
    borderRadius: res(15),
    paddingLeft: res(5),
    bottom: -res(35),
    marginBottom: res(20)
  },
  selectPhotoText: {
    flex: 1,
    fontSize: res(12),
    textAlign: 'center',
    color: 'white'
  },
  selectPhotoShape: {
    height: res(22),
    width: res(22),
    borderRadius: res(11),
    padding: res(4),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    width: res(110)
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    color: '#DC6929'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
});