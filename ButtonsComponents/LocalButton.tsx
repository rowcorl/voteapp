import { StyleSheet, StyleProp, ViewStyle, TextStyle, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components/native'

/*
styled-components/native was intall using: 
1.npm run web 2.npm install styled-components --force
*/

type WelcomeProps = {
  title: string,
  onPress?: any,
  btnStyle?: any,
  txtStyle?: any
}

const LocalButton = (props: WelcomeProps, WelcomeProps: any) => {
  const { title, onPress, btnStyle, txtStyle } = props
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, btnStyle]}>
      <Text style={[styles.text, txtStyle]}><>{title}</></Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00B976',
    width: "100%",
    padding: 10,
    borderRadius: 5,
    alignItems: "center"
  }
  ,

  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: "600"
  },
});

export default LocalButton;
