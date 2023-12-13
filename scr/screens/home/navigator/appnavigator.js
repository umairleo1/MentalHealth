import {StyleSheet} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '..';
import Question from '../../questionare';
import Prediction from '../../prediction';
import TalkUs from '../../talkUs';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Questionare'} component={Question} />
      <Stack.Screen name={'Prediction'} component={Prediction} />
      <Stack.Screen name={'TalkUs'} component={TalkUs} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
