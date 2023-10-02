import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Lista";
import Inicio from "../screen/Inicio";
import TabNav from "./TabNav";

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="inicio" component={Inicio} />
      <Stack.Screen name="tabNav" component={TabNav} />
    </Stack.Navigator>
  );
}
