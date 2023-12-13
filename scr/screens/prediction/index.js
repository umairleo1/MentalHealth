import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/header/indes';
import Button from '../../components/button';
import {useNavigation} from '@react-navigation/native';

export default function Prediction() {
  const navigation = useNavigation();
  const ViewRound = () => (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EC7D351',
        borderRadius: 15,
        padding: 15,
        width: '80%',
        alignSelf: 'center',
      }}>
      <Text style={{color: '#000', fontWeight: 'bold'}}>
        Depression Status: Positive!
      </Text>
    </View>
  );
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <Header title="Prediction" back />
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <ViewRound />
        <View>
          <Image
            source={require('../../images/mail.png')}
            style={{alignSelf: 'center', marginBottom: 5}}
          />
          <Button
            title="Talk to Us"
            onPress={() => navigation.navigate('TalkUs')}
          />
        </View>
        <View>
          <Image
            source={require('../../images/Doctor.png')}
            style={{alignSelf: 'center', marginBottom: 5}}
          />
          <Button title="Connect with your Doctor" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
