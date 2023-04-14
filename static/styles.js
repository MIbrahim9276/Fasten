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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightskyblue"
  },
  graphScreen: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightpink"
  },
  topBar: {
    height: "10%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "4%"
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 3
  }
});

export default css;