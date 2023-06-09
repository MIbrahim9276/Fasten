/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

import { StyleSheet } from "react-native";

export const css = StyleSheet.create({
  main: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },

  settings: {
    justifyContent: "space-evenly"
  },

  settingsSection: {
    width: "80%",
    height: "20%",
    borderRadius: 20
  },
  timePicker: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 20
  }
});