/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

import { View } from "react-native";
import { Text } from "react-native-paper";

import { css } from "./static/styles";

export default function GraphRoute() {
  return (
    <View style={css.main}>
      <Text>Graph</Text>
    </View>
  );
}