import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/header/indes';
import Button from '../../components/button';
import {useNavigation} from '@react-navigation/native';

export default function TalkUs() {
  const navigation = useNavigation();
  const ViewRound = ({text, padding, width}) => (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EC7D3',
        borderRadius: 15,
        padding: padding,
        width: width,
        // alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <Text style={{color: '#000', fontWeight: 'bold'}}>{text}</Text>
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <Header title="Talk Us" back />
      <View style={{flex: 1}}>
        <View>
          <Image
            source={require('../../images/mail.png')}
            style={{alignSelf: 'center', marginBottom: 5}}
          />
          <View style={{alignSelf: 'center'}}>
            <ViewRound
              width="65%"
              padding={15}
              text="Depression Status: Positive!"
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#92323215',
            borderRadius: 100,
            margin: 20,
            padding: 50,
          }}>
          <ViewRound text="Hello!" width={'25%'} />
          <View style={{height: 10}} />
          <ViewRound text="Nice to meet you" width={'50%'} />
          <Image
            style={{alignSelf: 'flex-end', marginTop: 10}}
            source={require('../../images/Chat.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
