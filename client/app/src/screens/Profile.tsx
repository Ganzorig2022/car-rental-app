import React from 'react';
import {
  SafeAreaView, Text, View,
} from 'react-native';

import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function Profile() {


  return (
    <SafeAreaView >
      <StyledView className="m-10 p-2">

        <StyledText>Profile</StyledText>
      </StyledView>

    </SafeAreaView>
  );
}