/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

import { View } from "react-native";

import SettingsSection from "../components/settings_section";
import TimePicker from "../components/time_picker";

import { css } from "../static/styles";

export default function SettingsRoute() {
  return (
    <View style={[css.main, css.settings]}>
      <SettingsSection>
        <TimePicker
          title="Start"
          onConfirm={() => {}} />
      </SettingsSection>
      <SettingsSection>
        <TimePicker
          title="End"
          onConfirm={() => {}} />
      </SettingsSection>
    </View>
  );
}