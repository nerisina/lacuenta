import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LA CUENTA</Text>

      <View>
        <Text style={styles.stepTitle}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View>
        <Text style={styles.stepTitle}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.btnText}>LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.link}>DON&apos;T HAVE AN ACCOUNT? SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F6",
    padding: 24,
    justifyContent: "center",
  },
  logo: {
    fontSize: 20,
    color: "#2D4A35",
    letterSpacing: 4,
    marginBottom: 32,
  },
  stepTitle: {
    fontSize: 20,
    color: "#2D4A35",
    letterSpacing: 2,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 14,
    fontFamily: "monospace",
    fontSize: 13,
    color: "#2D4A35",
    letterSpacing: 1,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: "#2D4A35",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 24,
  },
  btnText: {
    color: "#7DC98A",
    fontFamily: "monospace",
    fontSize: 13,
    letterSpacing: 2,
  },
  link: {
    color: "#aaa",
    fontFamily: "monospace",
    fontSize: 10,
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 16,
  },
});
