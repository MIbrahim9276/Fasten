/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

import {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get("window");

const css = StyleSheet.create({
  screen: {
    height: height,
    width: width
  },
  timerScreen: {
    width: width,
    paddingTop: "5%",
    alignItems: "center",
    borderRightWidth: 2
  },
  graphScreen: {
    width: width,
    alignItems: "center",
    justifyContent: "center"
  },
  topBar: {
    height: "10%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "4%",
    borderBottomWidth: 2
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 3
  },
  timerText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  timerButtonsSection: {
    flex: 1,
    width: "100%",
    backgroundColor: "lightskyblue",
    marginTop: "10%"
  }
});

export default css;