/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { css } from "../static/styles";

export default function TimerRoute() {
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(Date.now());

  const interval = setInterval(() => {
    AsyncStorage.getItem("@startTime").then((string) => {
      setStartTime(parseInt(string));
    });
    AsyncStorage.getItem("@endTime").then((string) => {
      setEndTime(parseInt(string));
    });
  }, 500);

  return (
    <View style={css.main}>
      <Text>Timer</Text>
      <Text>{new Date(startTime).toLocaleTimeString()}</Text>
      <Text>{new Date(endTime).toLocaleTimeString()}</Text>
    </View>
  );
}