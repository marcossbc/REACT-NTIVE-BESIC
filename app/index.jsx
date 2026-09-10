import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const list =({item}) =>{
//   return (
//     <Text>
//       {item.text}
//     </Text>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
