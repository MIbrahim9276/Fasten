/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Snackbar, FAB } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SettingsSection from "../components/settings_section";
import TimePicker from "../components/time_picker";

import { css } from "../static/styles";

const customStyle = StyleSheet.create({
  save: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 10
  }
});

export default function SettingsRoute(props) {
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(Date.now());

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("@startTime", startTime.toString());
      await AsyncStorage.setItem("@endTime", endTime.toString());
    } catch(e) {
      console.log(e);
    }
  }

  const interval = setInterval(() => {
    AsyncStorage.getItem("@startTime").then((string) => {
      setStartTime(parseInt(string));
    });
    AsyncStorage.getItem("@endTime").then((string) => {
      setEndTime(parseInt(string));
    });
  }, 500);

  return (
    <View style={[css.main, css.settings]}>
      <SettingsSection>
        <TimePicker
          title="Start"
          onConfirm={(timeSelected) => setStartTime(timeSelected)}
          initial={startTime} />
      </SettingsSection>
      <SettingsSection>
        <TimePicker
          title="End"
          onConfirm={(timeSelected) => setEndTime(timeSelected)}
          initial={endTime} />
      </SettingsSection>
      <FAB
        icon="content-save"
        style={customStyle.save}
        onPress={saveData} />
    </View>
  );
}