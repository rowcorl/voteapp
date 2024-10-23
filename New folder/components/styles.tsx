import React, { useState } from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import { objcolors, txtcolors } from "./colors";

const styles = StyleSheet.create({

  subContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 280,
  },
  inputContainer: {
    width: 300,
    alignItems: "center"
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  btnStyle: {
    marginBottom: 10,
    backgroundColor: objcolors.green_black,
    width: "60%",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#EBE9E9",
  },
  btnStyle2: {
    backgroundColor: objcolors.fff_444,
    borderRadius: 0,
    marginTop: 5,
  },
  btnTitleStyle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: "600",
  },
  btnTitleStyle2: {
    color: objcolors.green_eee_txt,
  },
  regBtnTitle: {
    color: txtcolors.green_eee_txt,
    fontSize: 17,
    fontWeight: "600"
  },
  inputField: {
    padding: 10,
    backgroundColor: objcolors.fff_444,
    width: "90%",
    borderRadius: 50,
    paddingLeft: 15,
    paddingRight: 5,
    alignItems: "center",
    fontSize: 15,
    fontWeight: "600",
    color: txtcolors.$999_eee_txt,
  },
  TextInputWrapper: {
    flexDirection: "row", alignItems: "center",
    backgroundColor: objcolors.fff_444,
    margin: 5,
    padding: 1,
    borderRadius: 50,
  },
  fieldIcon: {
    paddingHorizontal: 10,
  }
});

export default styles;

