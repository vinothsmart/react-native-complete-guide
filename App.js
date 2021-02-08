import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            width: "80%",
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
          }}
          placeholder="Course Goal"
        />
        <Button title="Add" />
      </View>
      <View></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
