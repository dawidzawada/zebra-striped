import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";

import { ZebraCode, getBase64Code, CodeSize } from "zebra-striped";

export default function App() {
  const [value, setValue] = useState("I'm very striped!");
  const size: CodeSize = { width: 300, height: 300 };

  const handlePress = () => {
    if (value) {
      const base64Image = getBase64Code(value, "qr", size);
      Clipboard.setString(`data:image/png;base64,${base64Image}`);
    }
  };

  return (
    <View style={styles.container}>
      <ZebraCode
        value={value}
        format="qr"
        size={size}
        onColor="#141414"
        offColor="#ffffff"
      />
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        style={styles.input}
      />
      <Button title="Copy base64 code to clipboard" onPress={handlePress} />
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
