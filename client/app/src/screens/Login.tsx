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

export default function Login({ navigation}) {
  const navigator = useNavigation();

  return (
    <SafeAreaView >
      <StyledView className="m-10 p-2">
        <Button title="goto mainscreen" onPress={() => {
          navigator.navigate("mainscreen")
        }} />
        <Pressable
          onPress={() => {
            navigator.navigate("otpscreen")
          }}>
          <StyledText>Login</StyledText>
        </Pressable>
      </StyledView>

    </SafeAreaView>
  );
}