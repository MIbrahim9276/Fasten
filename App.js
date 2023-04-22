/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

import { useState } from 'react';
import { Provider as PaperProvider, BottomNavigation } from 'react-native-paper';

import TimerRoute from './routes/timer_route';
import GraphRoute from './routes/graph_route';
import SettingsRoute from './routes/settings_route';

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: "timer", title: "Timer", focusedIcon: "timer", unfocusedIcon: "timer-outline"},
    {key: "graph", title: "Graph", focusedIcon: "chart-box", unfocusedIcon: "chart-box-outline"},
    {key: "settings", title: "Settings", focusedIcon: "cog", unfocusedIcon: "cog-outline"}
  ]);

  const renderScene = BottomNavigation.SceneMap({
    timer: TimerRoute,
    graph: GraphRoute,
    settings: SettingsRoute
  });

  return (
    <PaperProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene} />
    </PaperProvider>
  );
}
