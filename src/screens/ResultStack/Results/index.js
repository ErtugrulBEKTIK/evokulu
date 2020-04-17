import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {res, T} from '~/helpers';
import {Text, Container, TouchableBox, TouchableBar} from '~/components/my-base'
import NavigationService from '~/NavigationService';
import {inject, observer} from "mobx-react";
import User from "./user.svg";
import axios from "~/Api";

@inject('AuthStore')
@observer
export default class Home extends Component {

  state = {
    results: {
      ClassRankList: []
    },
    loading: true
  };

  componentDidMount() {
    this.getResults();
  }

  getResults = async () => {
    try{
      const { data: results } = await axios.post('User/GetUserRank', {
        UserId: this.props.AuthStore.user.UserId
      });
      this.setState({ results, loading: false });
    }catch (e) {
      console.log(e);
    }

  };


  render() {
    const noInRow = 3;

    const { results: { ClassRankList: list, Toplamcozulentestsayisi, Toplamsorunlansorusayisi, Toplamdogrusorusayisi, Toplamyalnissorusayisi }, loading } = this.state;

    const rate = Toplamdogrusorusayisi ? Toplamdogrusorusayisi / (Toplamdogrusorusayisi + Toplamyalnissorusayisi) * 100 : 0;
    return (
      <Container loading={loading} scroll>

        <View style={s.topSection}>
          <View style={s.userInfo}>
            <User style={s.userIcon} />
            <Text style={s.name}>{this.props.AuthStore.user.UserName}</Text>
          </View>
          <View style={s.statistics}>
            <Text style={s.stscHeader}>TOPLAM</Text>
            <Text style={s.stscText}>Çözülen Test: {Toplamcozulentestsayisi}</Text>
            <Text style={s.stscText}>Doğru Oranı: %{rate}</Text>
            <Text style={s.stscText}>Sorulan Soru: {Toplamsorunlansorusayisi}</Text>

          </View>
        </View>

        <Text style={s.forClass}>Sınıflara Göre Sıralama</Text>

        {
          T.range(1, Math.ceil(list.length / noInRow)).map((i) => (
            <View style={s.triple} key={i.toString()+'t'}>
              {
                T.range(0, noInRow-1).map((k) => {
                  const index = (i-1)*noInRow +k;

                  if(index < list.length){
                    const Class = list[index];
                    return (
                      <TouchableBox
                        disabled
                        style={[s.box, {marginRight: k === noInRow-1 ? 0 : res(20)}]}
                        key={Class.$id}
                      >
                        <Text style={s.boxText}> {Class.SinifAdi} </Text>
                        <View style={s.seperator}/>
                        <Text style={s.rank}> {Class.Derece} </Text>
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
  topSection: {
    flexDirection: 'row'
  },
  userInfo: {
    alignItems: 'center',
    width: res(120)
  },
  statistics: {
    flex: 1,
    paddingLeft: res(40)
  },
  stscHeader: {
    color: '#ffffff',
    fontSize: res(16),
  },
  stscText: {
    color: '#ffffff',
    fontSize: res(16),
    marginTop: res(5),
    fontFamily: 'HelveticaCondensed'
  },
  userIcon: {
    width: res(80),
    height: res(80),
  },
  triple: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    alignItems: 'center',
    marginRight: res(15),
    marginBottom: res(15),
    paddingHorizontal: res(5)
  },
  boxText: {
    color: '#DC6929',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: res(13),
  },
  seperator: {
    backgroundColor: '#DC6929',
    height: res(2),
    marginVertical: res(3),
    width: '100%'
  },
  rank: {
    color: '#545757',
    textAlign: 'center',
    fontSize: res(11),
    marginTop: res(5),
    fontFamily: 'HelveticaCondensed'
  },
  name: {
    color: 'white',
    marginBottom: res(20)
  },
  forClass: {
    color: 'white',
    marginBottom: res(20),
    marginTop: res(10)
  },
});