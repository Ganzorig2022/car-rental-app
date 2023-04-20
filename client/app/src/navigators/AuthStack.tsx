import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Text, TouchableOpacity,
} from 'react-native';
import Login from "../screens/Login";
import OTP from "../screens/OTP";
import { BottomTabs } from "./BottomNavigator";

const AuthStack = createNativeStackNavigator();

export const AuthStackComponent = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="otpscreen" component={OTP} />
      <AuthStack.Screen
        name="login"
        component={Login}
        options={({ navigation }) => ({
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <Text>weolcome</Text>
              </TouchableOpacity>
            );
          },
        })}
      />
      <AuthStack.Screen
        name="mainscreen"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};