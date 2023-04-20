/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, Text, View,
} from 'react-native';

import { styled } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackComponent } from './navigators';



export default function App() {


  return (
    <NavigationContainer>
      
      <AuthStackComponent />
    </NavigationContainer>


  );
}




