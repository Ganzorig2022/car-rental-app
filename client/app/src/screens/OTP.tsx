import React from 'react';
import {
  Button,
  Pressable,
  SafeAreaView, Text, View,
} from 'react-native';

import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function OTP() {

  const navigator = useNavigation();
  return (
    <SafeAreaView >
      <StyledView className="m-10 p-2">
      <Pressable
       onPress={() => {
         navigator.navigate("login")
       }}>
        <StyledText>welcome</StyledText>
       </Pressable>
      
      </StyledView>

    </SafeAreaView>
  );
}