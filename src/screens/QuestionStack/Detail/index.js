import React, {Component} from 'react';
import {StyleSheet, Modal, View, Image, TouchableWithoutFeedback} from 'react-native';
import moment from 'moment';
import 'moment/locale/tr';
import {res, T} from '~/helpers';
import {Text, Container, Box, TouchableBox} from '~/components/my-base'
import NavigationService from '~/NavigationService';
import axios from "~/Api";
import ImageViewer from "react-native-image-zoom-viewer";

export default class QuestionDetail extends Component {

  constructor(props) {
    super(props);
    this.question = props.navigation.getParam('question');
  }

  state={
    questionImage: false,
    answerImage: false,
  };


  render() {
    const { AskQuestionId, QuestionDesc, QuestionFileUrl, QuestionCreateDate,
      AnswerDesc, AnswerFileUrl, AnswerCreateDate, IsStatus, } = this.question;
    const date = moment(QuestionCreateDate, 'D.M.YYYY HH:mm:ss');

    const { questionImage, answerImage } = this.state;

    return (
      <Container scroll >
        <Modal visible={questionImage} transparent={true}>
          <ImageViewer
            onCancel={() => { this.setState({questionImage: false}) }}
            renderIndicator={() => null }
            enableSwipeDown={true}
            imageUrls={[{url: QuestionFileUrl}]}/>
        </Modal>
        <Box style={s.box}>
          <View style={s.imageC}>


            <TouchableWithoutFeedback onPress={() => {
              this.setState({questionImage: true})
            }}>
              <Image style={s.image} source={{uri: QuestionFileUrl}} />
            </TouchableWithoutFeedback>

          </View>

          <View style={s.info}>
            <Text style={s.title}>2. Sınıf / Matematik</Text>
            <Text style={s.title}>{date.format('D.M.YYYY')}</Text>
          </View>

          {
            QuestionDesc
              ? <View style={s.descriptionC}>
                  <Text style={s.description}>{QuestionDesc}</Text>
                </View>
              : null
          }

        </Box>

        <Box style={s.box}>
          <Text style={s.cevap}>Cevap</Text>

          {
            AnswerFileUrl
              ? <View style={s.imageC}>
                  <Image style={s.image} source={{uri: QuestionFileUrl}} />
                </View>
              : null
          }

          {
            AnswerDesc
              ? <View style={s.descriptionC}>
                  <Text style={s.description}>{AnswerDesc}</Text>
                </View>
              : null
          }

          {
            !AnswerDesc && !AnswerFileUrl
              ? <View style={s.descriptionC}>
                  <Text style={s.description}>Henüz sorunuz cevaplanmadı</Text>
                </View>
              : null
          }

        </Box>
      </Container>
    );
  }
}


const s = StyleSheet.create({
  box: {
    padding: 0,
    marginBottom: res(15),
    overflow: 'hidden'
  },
  cevap: {
    textAlign: 'center',
    padding: res(10),
    color: '#DC6929',
  },
  imageC: {
    height: res(180),
    borderColor: '#DC6929',
    borderTopWidth: res(1),
  },

  image: {
    height: '100%',
    width: '100%'
  },

  info: {
    borderColor: '#DC6929',
    borderTopWidth: res(1),
    flexDirection: 'row',
    paddingHorizontal: res(10),
    paddingVertical: res(5),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight:'normal',
    fontFamily: 'Helvetica',
    color: '#a6acac',
    fontSize: res(12),
  },
  descriptionC: {
    width: '100%',
    padding: res(15),
    borderTopWidth: res(1),
    borderTopColor: '#DC6929',
  },
  description: {

    fontWeight: 'normal',
    fontFamily: 'Helvetica',
    color: '#545757',
    fontSize: res(14),
  },
  date: {
    fontFamily: 'HelveticaCondensed',
    color: '#7f8282',
    fontSize: res(12),
  }
});