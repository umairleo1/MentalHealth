import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/header/indes';
import Button from '../../components/button';
import {useNavigation} from '@react-navigation/native';

const Answer = ({color, text}) => (
  <View style={{backgroundColor: color, margin: 10}}>
    <Text style={{textAlign: 'center', color: '#3D3D3D', paddingVertical: 10}}>
      {text}
    </Text>
  </View>
);

export default function Question() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header title="Questionare" back />
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#000000',
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Please answer the question below!
          </Text>
          <Answer color="#E29F9F52" text="Question 1" />
          <Answer color="#D9D9D9" />
          <Answer color="#E29F9F52" text="Question 1" />
          <Answer color="#D9D9D9" />
          <Answer color="#E29F9F52" text="Question 1" />
        </View>
        <View>
          <Button
            title="Predict"
            onPress={() => navigation.navigate('Prediction')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
