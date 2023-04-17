/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

import {Text} from "react-native";
import {CountdownCircleTimer} from "react-native-countdown-circle-timer";

import {getTimeParts} from "../static/utils";
import css from "../static/styles";

export default function Timer(props) {
  const childrenHandler = ({ remainingTime }) => {
    const {hours, minutes, seconds} = getTimeParts(remainingTime);
  
    return (
      <Text style={css.timerText}>
        {hours} : {minutes} : {seconds}
      </Text>
    );
  }

  return (
    <CountdownCircleTimer
      duration={props.duration}
      colors={props.color}
      trailColor={props.bgColor}
      isPlaying={props.start}
      size={props.size}
      strokeWidth={props.width}
      isGrowing
      children={childrenHandler}
      onComplete={(duration) => {
        return {
          shouldRepeat: props.repeat
        };
      }}>
    </CountdownCircleTimer>
  );
}