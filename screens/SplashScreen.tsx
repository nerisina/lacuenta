import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SplashScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.logo}>LA CUENTA</Text>
      <Text style={styles.tagline}>* SPLIT SMARTER WITH FRIENDS *</Text>
      <View style={styles.btnRow}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.btnText}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.btnText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D4A35",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 36,
    color: "#ffffff",
    letterSpacing: 6,
  },
  tagline: {
    fontSize: 11,
    color: "#7DC98A",
    letterSpacing: 2,
    marginTop: 8,
  },
  btn: {
    borderWidth: 1.5,
    borderColor: "#7DC98A",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  btnText: {
    fontFamily: "monospace",
    fontSize: 13,
    color: "#7DC98A",
    letterSpacing: 2,
  },
  btnRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 40,
  },
});
