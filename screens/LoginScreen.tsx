import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function SignUpScreen({ navigation }: any) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [venmo, setVenmo] = useState("");
  const [zelle, setZelle] = useState("");

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>LA CUENTA</Text>

      {/* Step indicator */}
      <View style={styles.stepRow}>
        {[1, 2, 3, 4].map((s) => (
          <View
            key={s}
            style={[styles.stepDot, step >= s && styles.stepDotActive]}
          />
        ))}
      </View>

      {/* Step 1 - Email */}
      {step === 1 && (
        <View>
          <Text style={styles.stepTitle}>WHAT'S YOUR EMAIL?</Text>
          <TextInput
            style={styles.input}
            placeholder="EMAIL"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      )}

      {/* Step 2 - Name */}
      {step === 2 && (
        <View>
          <Text style={styles.stepTitle}>WHAT'S YOUR NAME?</Text>
          <TextInput
            style={styles.input}
            placeholder="FIRST NAME"
            placeholderTextColor="#aaa"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="LAST NAME"
            placeholderTextColor="#aaa"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            style={styles.input}
            placeholder="NICKNAME (optional)"
            placeholderTextColor="#aaa"
            value={nickname}
            onChangeText={setNickname}
          />
        </View>
      )}

      {/* Step 3 - Password */}
      {step === 3 && (
        <View>
          <Text style={styles.stepTitle}>CREATE A PASSWORD</Text>
          <TextInput
            style={styles.input}
            placeholder="PASSWORD"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      )}

      {/* Step 4 - Venmo/Zelle */}
      {step === 4 && (
        <View>
          <Text style={styles.stepTitle}>HOW DO YOU GET PAID?</Text>
          <Text style={styles.stepSub}>So friends can pay you back easily</Text>
          <TextInput
            style={styles.input}
            placeholder="VENMO @USERNAME"
            placeholderTextColor="#aaa"
            value={venmo}
            onChangeText={setVenmo}
          />
          <TextInput
            style={styles.input}
            placeholder="ZELLE EMAIL OR PHONE"
            placeholderTextColor="#aaa"
            value={zelle}
            onChangeText={setZelle}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.skip}>SKIP FOR NOW</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Continue button */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (step < 4) setStep(step + 1);
          else navigation.navigate("Home");
        }}
      >
        <Text style={styles.btnText}>
          {step === 4 ? "GET STARTED" : "CONTINUE"}
        </Text>
      </TouchableOpacity>

      {/* Back */}
      {step > 1 && (
        <TouchableOpacity onPress={() => setStep(step - 1)}>
          <Text style={styles.back}>← BACK</Text>
        </TouchableOpacity>
      )}

      {/* Already have account */}
      {step === 1 && (
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>ALREADY HAVE AN ACCOUNT? LOG IN</Text>
        </TouchableOpacity>
      )}
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
  stepRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 32,
  },
  stepDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#e0e0e0",
  },
  stepDotActive: {
    backgroundColor: "#2D4A35",
  },
  stepTitle: {
    fontSize: 20,
    color: "#2D4A35",
    letterSpacing: 2,
    marginBottom: 8,
  },
  stepSub: {
    fontSize: 11,
    color: "#aaa",
    letterSpacing: 1,
    marginBottom: 16,
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
  back: {
    color: "#aaa",
    fontFamily: "monospace",
    fontSize: 11,
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 16,
  },
  skip: {
    color: "#aaa",
    fontFamily: "monospace",
    fontSize: 11,
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 8,
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
