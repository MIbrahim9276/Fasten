/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

import {View, ScrollView, Text} from 'react-native';

import css from './static/styles';
import TimerScreen from './components/timer_screen';
import GraphScreen from './components/graph_screen';

export default function App() {
  return (
    <View style={{height: "100%", width: "100%"}}>
      <View style={css.topBar}>
        <Text style={css.title}>Fasten</Text>
      </View>
      
      <ScrollView
        style={css.screen}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>

        <TimerScreen />
        <GraphScreen />

      </ScrollView>
    </View>
  );
}
