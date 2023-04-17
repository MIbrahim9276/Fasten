/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

import {useState} from "react";
import {Button, View, Text} from "react-native";
import {DateTimePickerModal} from "react-native-modal-datetime-picker";

import {getTimeString, getTime} from "../static/utils";

export default function TimePicker(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeText, setTimeText] = useState(getTimeString());

  const confirmationHandler = (time) => {
    setTimeText(getTimeString(time));
    setIsVisible(false);

    props.confirm(getTime(time) / 1000);
  }

  return (
    <View>
      <Button title="showPicker" onPress={() => {setIsVisible(true)}} />
      <Text>selected: {timeText}</Text>
      <DateTimePickerModal 
        minuteInterval={5}
        isVisible={isVisible}
        mode="time"
        onConfirm={confirmationHandler}
        onCancel={() => {setIsVisible(false)}} />
    </View>
  );
}