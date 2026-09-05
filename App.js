import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const data = Array.from({ length: 900 }, (_, i) => ({
    id: i.toString(),
    text: `Item ${i + 1}`,
  }));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => alert(item.text)}
          >
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
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

  item: {
    backgroundColor: "lightblue",
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },

  itemText: {
    fontSize: 20,
    color: "black",
  },

  touchable: {
    marginTop: 10,
  },
});
