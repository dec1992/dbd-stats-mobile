import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import StatsNavigator from "./StatsNavigator";
import StatsScreen from "../screens/StatsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.WELCOME}
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.STATS}
      component={StatsNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
