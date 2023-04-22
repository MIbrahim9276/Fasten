/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

import { useState } from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import DateTimePicker from "react-native-modal-datetime-picker";

import { splitTime } from "../static/utils";
import { css } from "../static/styles";

const customStyle = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingVertical: "5%",
    paddingHorizontal: "10%"
  },
  display: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function TimePicker(props) {
  const [selectedTime, setSelectedTime] = useState(splitTime());
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const isDark = useColorScheme() === "dark";

  const handleConfirm = (time) => {
    const ms = time.getTime();
    setSelectedTime(splitTime(ms));
    setIsPickerVisible(false);
    props.onConfirm(ms);
  }

  return (
    <View style={css.timePicker}>
      <TouchableRipple 
        style={customStyle.container}
        onPress={() => setIsPickerVisible(true)}>
          <>
            <Text variant="headlineLarge">{props.title}</Text>
            <View style={customStyle.display}>
              <Text variant="displayMedium">{selectedTime.text}</Text>
            </View>
            <DateTimePicker
              isVisible={isPickerVisible}
              date={selectedTime.self}
              isDarkModeEnabled={isDark}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={() => setIsPickerVisible(false)} />
          </>
      </TouchableRipple>
    </View>
  );
}