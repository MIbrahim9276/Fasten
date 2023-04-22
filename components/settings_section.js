/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

import { Surface } from "react-native-paper";

import { css } from "../static/styles";

export default function SettingsSection(props) {
  return (
    <Surface style={css.settingsSection} elevation={1}>
      {props.children}
    </Surface>
  );
}