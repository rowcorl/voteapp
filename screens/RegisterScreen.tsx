import React, { useLayoutEffect, useState } from "react";
import {
  Text, TouchableOpacity, View,
  KeyboardAvoidingView, TextInput, useColorScheme, StyleSheet
} from 'react-native';

import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import styles from "../components/styles";
import { objcolors, txtcolors } from "../components/colors";
//import { auth } from "../firebase";
import Button from "../components/Button";
import Container from "../components/Container";

export function useThemeColor(
  props: { light?: string; dark?: string },
) {
  const theme = useColorScheme() ?? 'light';
  console.log("theme");
}
export default function RegisterScreen(props: { navigation: any; }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [imageUrl, setImagegUrl] = useState('');

  const signIn = () => {

  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackTitle: "ABC"
    });
  }, [props.navigation]);

  const register = () => {
    /*  
     .createUserWithEmailAndPassword(email, password)
     .then((authUser: any)=>{
       authUser.user.updateProfile({
         displayName:name,
         photoURL: imageUrl
 
       })
     })
     .catch((error: { message: any; })=>alert(error.message)); */
  }

  return (

    <Container>
      <View style={stylesLocal.LocalContainer}>
        <Feather name="activity" style={{ position: "relative", bottom: 50 }}
          size={70} color={objcolors.green_999} />

        <View style={styles.inputContainer}>
          <View style={styles.TextInputWrapper}>
            <TextInput
              maxLength={40}
              style={[styles.inputField]}
              placeholderTextColor={txtcolors.$999_eee_txt}
              placeholder="Fullname"
              value={fullname}
              onChangeText={(text) => setFullname(text)}
            />
            <View style={[styles.fieldIcon]}>
              <Feather name="check-circle"
                size={20} color={objcolors.ccc_999} />
            </View>
          </View>

          <View style={styles.TextInputWrapper}>
            <TextInput
              maxLength={40}
              style={[styles.inputField]}
              placeholderTextColor={txtcolors.$999_eee_txt}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <View style={[styles.fieldIcon]}>
              <Feather name="check-circle"
                size={20} color={objcolors.ccc_999} />
            </View>
          </View>

          <View style={styles.TextInputWrapper}>
            <TextInput
              maxLength={40}
              style={styles.inputField}
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

          <View style={styles.TextInputWrapper}>
            <TextInput
              maxLength={40}
              style={styles.inputField}
              placeholderTextColor={txtcolors.$999_eee_txt}
              placeholder="Profile Picture URL (optional)"
              value={imageUrl}
              onChangeText={(text) => setImagegUrl(text)}
            />
            <View style={[styles.fieldIcon]}>
              <Feather name="check-circle"
                size={20} color={objcolors.ccc_999} />
            </View>
          </View>
        </View>

        <View style={styles.buttonsContainer}>

          <Button
            btnTitle={"Register"}
            btnTitleStyle={[styles.btnTitleStyle]}
            btnStyle={[styles.btnStyle]}
            onPress={() => props.navigation.navigate("register")}
          />

          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate("register")}
            style={{
              flexDirection: "row", alignItems: 'center',
              backgroundColor: objcolors.fff_444, paddingHorizontal: 15, paddingVertical: 5,
              marginTop: 10,
              borderWidth: 0.5,
              borderColor: objcolors.fff_444,
            }}>
            <Ionicons name="logo-google" size={40} color="#00B976" />
            <View style={{ padding: 5 }}>
              <FontAwesome5 name="grip-lines-vertical" size={20} color="#eee" />
            </View>
            <View>
              <Text style={[styles.regBtnTitle]}>Sign in with Google</Text>
            </View>
          </TouchableOpacity>
          <View />
        </View>
      </View>
    </Container>

  );
}

const stylesLocal = StyleSheet.create({
  LocalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
  ,
});
