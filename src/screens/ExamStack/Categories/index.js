import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {res, T} from '~/helpers';
import {Text, Container, TouchableBox} from '~/components/my-base'
import NavigationService from "~/NavigationService";
import {Question} from "~/assets/images/vectors";

export default class Categories extends Component {

  constructor(props) {
    super(props);
    this.class = props.navigation.getParam('cls');
  }

  render() {
    const list = this.class.CategoryList;
    const noInRow = 2;
    return (
      <Container scroll>
        {
          T.range(1, Math.ceil(list.length / noInRow)).map((i) => (
            <View style={s.triple} key={i.toString()+'t'}>
              {
                T.range(0, noInRow-1).map((k) => {
                  const index = (i-1)*noInRow +k;

                  if(index < list.length){
                    const category = list[index];
                    return (
                      <TouchableBox
                        onPress={() => { NavigationService.navigate('Topics', { category, class: this.class }); }}
                        style={[s.box, {marginRight: k === noInRow-1 ? 0 : res(20)}]}
                        key={category.$id}
                      >
                        <View style={s.iconC}>
                          <SvgUri
                            width="100%"
                            height="100%"
                            uri={category.PictureUrl}
                          />
                        </View>
                        <Text style={s.boxText}> {category.CategoryName} </Text>
                      </TouchableBox>
                    )
                  }else {
                    return <View key={index.toString()} style={{flex: 1, paddingHorizontal: res(5), marginRight: k === noInRow-1 ? 0 : res(20)}} />
                  }

                })
              }
            </View>
          ))

        }
      </Container>
    );
  }
}


const s = StyleSheet.create({
  triple: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    alignItems: 'center',
    marginBottom: res(15),
    paddingHorizontal: 0
  },
  boxText: {
    color: '#DC6929',
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: res(15),
  },
  iconC: {
    width: res(50),
    height: res(50),
    borderRadius: res(25),
    padding: res(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DC6929'
  },
  image: {
    resizeMode: 'cover',
    height: res(90),
    width: res(70),
  }
});