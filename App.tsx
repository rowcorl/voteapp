import React, { useEffect } from "react"
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from "./screens/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { objcolors, txtcolors } from "./components/colors";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { Feather, FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: objcolors.white_back },
  headerTitleStyle: { color: txtcolors.green_white_txt },
  headerTintColor: txtcolors.green_eee_txt, //navigation arrow color
  headerTitle: "Voting AppI",
  navigationBarColor: objcolors.white_back,
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={objcolors.green_black} barStyle={"light-content"} />
      <Stack.Navigator screenOptions={globalScreenOptions}>

<Stack.Screen
          name="home"
          component={HomeScreen}
          options={(props: { navigation: any; }) => ({
            animation: 'slide_from_right',
            headerTitle: "we",
            headerLeft: () => (
              <View style={{paddingLeft:5, alignItems: 'baseline', flexDirection: 'row', }}>
                <View style={{paddingLeft:5}}><Text style={{ fontSize: 18, color: objcolors.green_fff, fontWeight: '600' }}>Home</Text></View>
              </View >
            ),
            headerRight: () => (
              <TouchableOpacity style={{paddingRight:5, alignItems: 'baseline', flexDirection: 'row', }}>
                <Feather name="search" size={22} color={objcolors.green_fff} />
              </TouchableOpacity >
            ),
             //  headerShadowVisible:false
          })}
        />

        <Stack.Screen name="login" component={LoginScreen} options={{
          animation: 'slide_from_right'
          // headerStyle: { /* backgroundColor: "#fff" */ },
          // headerTitleStyle: { /* color: "#00B976" */ }, title: "Login"
        }} />

        <Stack.Screen
          name="settings"
          component={SettingsScreen}
          options={(props: { navigation: any; }) => ({
            animation: 'slide_from_right',
            headerTitle: "",
            headerLeft: () => (
              <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ alignItems: 'baseline', flexDirection: 'row', }}>
                <Feather name="arrow-left" size={20} color={objcolors.green_fff} />
                <View style={{paddingLeft:5}}><Text style={{ fontSize: 18, color: objcolors.green_fff, fontWeight: '600' }}>Settings</Text></View>
              </TouchableOpacity >
            ),
          })}
        />



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




