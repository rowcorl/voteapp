import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Settings from "../screens/SettingsScreen";



export const ColorComponent = (props: { navigation?: any,myFunction?:any; }) => {
  let myFunction = () => {
    console.log("function running");
  }
 /*  return (
   //  myFunction={myFunction()} 
  ); */
}

//let colorScheme: string = 'light';
let colorScheme: string = 'dark';

let greenOnly = '#00B976';
let green_black = '#00B976';
let green_999 = '#00B976';
let green_fff = '#00B976';
let green_555 = '#00B976';
let white_back = '#fff';
let eee_000 = '#eee';
let ddd_333 = '#ddd';
let fff_222 = '#fff';
let $000_eee = '#000';
let fff_444 = '#fff';
let $444_fff = '#444';
let ccc_999 = '#ccc';

//----- text ----

let green_eee_txt = '#00B976';
let green_white_txt = '#00B976';
let $999_eee_txt = '#999';
let black_ccc_txt = '#000';
let black_eee_txt = '#000';
let $888_eee_txt = '#888';

//----- text ----

if (colorScheme === 'dark') {
  green_black = '#00161D'; //headerStyle //loginBtn & regBtnOnRegisterScreen*
  green_999 = '#999'; //aperture from Feather
  green_fff = '#fff';
  white_back = '#00161D'; //navigationBarColor
  eee_000 = '#13131A'; //mainContainer
  ddd_333 = '#333'; //homeButton/settingsLabel
  $000_eee = '#eee'; //bottom bottons
  fff_444 = '#444'; //inputField// sign in with google Button border and edit profile image icon background color to grey
  $444_fff = '#fff';//edit profile image icon color to white
  ccc_999 = '#999'; //check-circle/ fieldIcon side margin bar
  fff_222 = '#222';
  green_555 = '#555';

  //----- text ----
  green_eee_txt = '#eee';
  green_white_txt = '#fff';
  $999_eee_txt = '#eee';
  black_eee_txt = '#eee';
  $888_eee_txt = '#999';
  black_ccc_txt = '#ccc';
  //===
}

export const objcolors = {
  greenOnly,
  green_black,
  green_999,
  white_back,
  eee_000,
  ddd_333,
  $000_eee,
  fff_444,
  $444_fff,
  ccc_999,
  fff_222,
  green_eee_txt,
  green_555,
  green_fff
};

export const txtcolors = {
  green_eee_txt,
  green_white_txt,
  $999_eee_txt,
  black_eee_txt,
  $888_eee_txt,
  black_ccc_txt
};
