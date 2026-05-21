import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { saveGroups, loadGroups } from "../utils/storage";

export default function NewTabScreen({ navigation }: any) {
  const [tabName, setTabName] = useState("");
  const [people, setPeople] = useState<string[]>([]);
  const [personInput, setPersonInput] = useState("");

  function addPerson() {
    if (personInput.trim() === "") return;
    setPeople([...people, personInput.trim()]);
    setPersonInput("");
  }

  async function createTab() {
    if (tabName.trim() === "") return;
    const newGroup = {
      id: Date.now().toString(),
      name: tabName.trim(),
      people,
      expenses: [],
    };
    const existing = await loadGroups();
    await saveGroups([...existing, newGroup]);
    navigation.navigate("Home");
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>LA CUENTA</Text>
      <Text style={styles.title}>NEW TAB</Text>

      <Text style={styles.label}>NAME YOUR TAB</Text>
      <TextInput
        style={styles.input}
        placeholder="E.G. ASBURY PARK DAY"
        placeholderTextColor="#aaa"
        value={tabName}
        onChangeText={setTabName}
      />

      <Text style={styles.label}>ADD PEOPLE</Text>
      <View style={styles.addRow}>
        <TextInput
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
          placeholder="FRIEND'S NAME"
          placeholderTextColor="#aaa"
          value={personInput}
          onChangeText={setPersonInput}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addPerson}>
          <Text style={styles.addBtnText}>ADD</Text>
        </TouchableOpacity>
      </View>

      {people.map((person, i) => (
        <View key={i} style={styles.personChip}>
          <View style={styles.personAvatar}>
            <Text style={styles.personAvatarText}>
              {person[0].toUpperCase()}
            </Text>
          </View>
          <Text style={styles.personName}>{person.toUpperCase()}</Text>
          <TouchableOpacity
            onPress={() => setPeople(people.filter((_, idx) => idx !== i))}
          >
            <Text style={styles.removeBtn}>✕</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.btn} onPress={createTab}>
        <Text style={styles.btnText}>CREATE TAB</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>← BACK</Text>
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
  logo: {
    fontSize: 16,
    color: "#2D4A35",
    letterSpacing: 4,
    marginTop: 60,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    color: "#2D4A35",
    letterSpacing: 4,
    marginBottom: 32,
  },
  label: {
    fontSize: 10,
    color: "#aaa",
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
    marginBottom: 16,
  },
  addRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },
  addBtn: {
    backgroundColor: "#2D4A35",
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  addBtnText: {
    color: "#7DC98A",
    fontFamily: "monospace",
    fontSize: 12,
    letterSpacing: 1,
  },
  personChip: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  personAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#2D4A35",
    alignItems: "center",
    justifyContent: "center",
  },
  personAvatarText: { fontSize: 11, color: "#7DC98A" },
  personName: { flex: 1, fontSize: 13, color: "#2D4A35", letterSpacing: 1 },
  removeBtn: { fontSize: 12, color: "#ccc" },
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
    marginBottom: 40,
  },
});
