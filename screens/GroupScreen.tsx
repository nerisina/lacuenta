import { View, Text, StyleSheet } from "react-native";

export default function GroupScreen({ navigation, route }: any) {
  const { group } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{group.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F6",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#2D4A35",
    letterSpacing: 4,
  },
});
