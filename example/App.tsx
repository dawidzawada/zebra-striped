import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ZebraCode } from "zebra-striped";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <ZebraCode
        value={value}
        format="qr"
        onColor="#000000"
        offColor="#ffffff"
        size={{ width: 300, height: 300 }}
        style={{
          borderWidth: 1,
          borderColor: "#000000",
        }}
      />
      <TextInput onChangeText={(text) => setValue(text)} style={styles.input} />
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
  input: {
    backgroundColor: "#f5f5f5",
    fontSize: 18,
    width: 300,
    margin: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#a3a2a2",
  },
});
