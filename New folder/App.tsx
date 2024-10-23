import React, { useEffect } from "react"
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from "./screens/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { objcolors, txtcolors } from "./components/colors";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: objcolors.white_back },
  headerTitleStyle: { color: txtcolors.green_white_txt },
  headerTintColor: txtcolors.green_eee_txt, //navigation arrow color
  headerTitle: "Voting App",
  navigationBarColor: objcolors.white_back,
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={objcolors.green_black} barStyle={"light-content"} />
      <Stack.Navigator screenOptions={globalScreenOptions}>

        <Stack.Screen name="home" component={HomeScreen} options={{
          // headerStyle: { /* backgroundColor: "#fff" */ },
          // headerTitleStyle: { /* color: "#00B976"  */}, title: "Register",
        }} />


        <Stack.Screen name="login" component={LoginScreen} options={{
          // headerStyle: { /* backgroundColor: "#fff" */ },
          // headerTitleStyle: { /* color: "#00B976" */ }, title: "Login"
        }} />

        <Stack.Screen name="register" component={RegisterScreen} options={{
          animation: 'slide_from_right'
          // headerStyle: { /* backgroundColor: "#fff" */ },
          // headerTitleStyle: { /* color: "#00B976"  */}, title: "Register",
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




