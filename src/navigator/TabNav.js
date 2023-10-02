import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Lista from "../screen/Lista";
import Spotify from "../screen/Spotify";
const Tab = createMaterialTopTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="lista" component={Lista} />
      <Tab.Screen name="spotify" component={Spotify} />
    </Tab.Navigator>
  );
}
