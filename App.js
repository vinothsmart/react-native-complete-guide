import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react/cjs/react.development";

export default function App() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="Change Text"
        onPress={() => setOutputText("The text changed")}
      />
      <StatusBar style="auto" />
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
