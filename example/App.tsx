import { StyleSheet, Text, View } from 'react-native';

import * as ZebraStriped from 'zebra-striped';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ZebraStriped.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
