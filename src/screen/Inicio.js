import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Inicio() {
  const nav = useNavigation();
  return (
    <View style={{ ...styles.container }}>
      <Text>Inicio</Text>
      <Button title="Navegar" onPress={() => nav.navigate("tabNav")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
