/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

import {useState} from "react";
import {View, Dimensions, Button} from "react-native";

import Timer from "./timer";
import TimePicker from "./time_picker";
import {getTime, getTimeParts} from "../static/utils";
import css from "../static/styles";

export default function TimerScreen() {
  const [start, setStart] = useState(getTime());
  const [end, setEnd] = useState(getTime());
  const [duration, setDuration] = useState(0);

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={css.timerScreen}>
      <Timer 
        start
        duration={duration}
        size={screenWidth * 0.8}
        bgColor="transparent"
        color="black"
        repeat
        width={12} />
      <View style={css.timerButtonsSection}>
        <TimePicker confirm={(time) => setStart(time)} />
        <TimePicker confirm={(time) => setEnd(time)} />
        <Button title="Confirm" onPress={() => {
          let diff = end - start;
          if (diff > 0) {
            setDuration(diff);
          }
        }} />
      </View>
    </View>
  );
}