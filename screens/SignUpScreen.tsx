import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function SignUpScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CREATE ACCOUNT</Text>
      <Text style={styles.subtitle}>* JOIN LA CUENTA *</Text>

      <TextInput
        style={styles.input}
        placeholder="FIRST NAME"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="LAST NAME"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="NICKNAME"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="EMAIL"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="PHONE"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="VENMO @USERNAME"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="ZELLE EMAIL OR PHONE"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.btnText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>ALREADY HAVE AN ACCOUNT? LOG IN</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F6",
    padding: 24,
  },
  title: {
    fontSize: 28,
    color: "#2D4A35",
    letterSpacing: 4,
    marginTop: 60,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 11,
    color: "#7DC98A",
    letterSpacing: 2,
    marginBottom: 32,
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
    marginTop: 8,
    marginBottom: 16,
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
    marginBottom: 40,
  },
});
