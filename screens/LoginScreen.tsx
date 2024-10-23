import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons";
import Button from "../components/Button";
import styles from "../components/styles";
import { objcolors, txtcolors } from "../components/colors";
import Container from "../components/Container";
//import { auth } from "../firebase";

export default function LoginScreen(props: { navigation: any; }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    console.log("clicked")
  }

  let met = "ok"

  useEffect(() => {
    /*  const unsubscribe = auth.onAuthStateChanged((authUser: any)=>{
       if(authUser){
         props.navigation.replace("home");
       }
     });
     return unsubscribe; */
  }, [])

  return (
    <Container>
      <View style={stylesLocal.LocalContainer}>
        <Feather name="aperture" style={{ position: "relative", bottom: 50 }}
          size={70} color={objcolors.green_999} />
        <View style={styles.inputContainer}>

          <View style={styles.TextInputWrapper}>
            <TextInput
              maxLength={40}
              style={[styles.inputField]}
              placeholderTextColor={txtcolors.$999_eee_txt}
              placeholder="Email"
              value={email}
              //  autoFocus
              onChangeText={(text) => setEmail(text)}
            />
            <View style={[styles.fieldIcon]}>
              <Feather name="check-circle"
                size={20} color={met ? objcolors.greenOnly : objcolors.ccc_999} />
            </View>
          </View>

          <View style={styles.TextInputWrapper}>
            <TextInput
              maxLength={40}
              style={[styles.inputField]}
              placeholderTextColor={txtcolors.$999_eee_txt}
              placeholder="Password"
              value={password}
              secureTextEntry
              textContentType="password"
              onChangeText={(text) => setPassword(text)}
            />
            <View style={[styles.fieldIcon]}>
              <Feather name="check-circle"
                size={20} color={objcolors.ccc_999} />
            </View>
          </View>
        </View>

        <View style={[styles.buttonsContainer]}>

          <Button
            btnTitle={"Login"}
            btnTitleStyle={[styles.btnTitleStyle]}
            btnStyle={[styles.btnStyle]}
            onPress={() => props.navigation.navigate("login")}
          />

          <Button
            btnTitle={"Register"}
            btnTitleStyle={[styles.btnTitleStyle, styles.btnTitleStyle2]}
            btnStyle={[styles.btnStyle, styles.btnStyle2]}
            onPress={() => props.navigation.navigate("register")}
          />

        </View>
      </View>
    </Container >
  );
}

const stylesLocal = StyleSheet.create({
  LocalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }
  ,
});