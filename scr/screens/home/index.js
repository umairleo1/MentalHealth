import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/header/indes';
import Button from '../../components/button';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header title="Mental Health" />
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <Image
          style={{height: 200, width: '100%'}}
          resizeMode="contain"
          source={require('../../images/Home.png')}
        />
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#313FBD',
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            SolaceScape
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: '#00000080',
              marginTop: 20,
              fontSize: 16,
            }}>
            “A space of comfort”
          </Text>
        </View>
        <View>
          <Button
            title="Your Mental Health"
            onPress={() => navigation.navigate('Questionare')}
          />
          <Button title="Learn he issue" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
