import React, {Component} from 'react';
import {StyleSheet, View, Image, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import {inject, observer} from "mobx-react";
import {res, T} from '~/helpers';
import {Text, Container, Button, TouchableBar, Box} from '~/components/my-base'
import RNPickerSelect from 'react-native-picker-select';
import Camera from './Camera';
import Gallery from './Gallery';
import ImageEdit from './ImageEdit';
import NavigationService from "~/NavigationService";
import {Camera as CameraIcon} from "~/assets/images/vectors";
import axios from "~/Api";


@inject('GalleryStore')
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
    selectedTopic: null
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

  render() {

    const { classes, lessons, classLoading, selectedClass, selectedLesson } = this.state;

    return (
      <Container scroll scrolViewRef={(ref) => { this.scrollRef = ref }} >
        <Camera />
        <Gallery />
        <ImageEdit />

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
                placeholder={{label: classLoading ? 'Yükleniyor...' : 'Sınıf seçiniz...'}}
                textInputProps={{style: s.input}}
                onValueChange={(value) => { this.select(value, 'Class') }}
                items={classes}
              />

              <RNPickerSelect
                value={selectedLesson}
                disabled={!selectedClass}
                doneText="Kapat"
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
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}/>


          </Box>

          <TouchableBar style={[s.button]} onPress={() => {

          }}>
            <Text style={s.buttonText}>Gönder</Text>
          </TouchableBar>

          <View style={{height: res(300)}}/>

      </Container>
    );
  }
}


const s = StyleSheet.create({

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