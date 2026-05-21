import { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { loadGroups, Group } from "../utils/storage";

export default function HomeScreen({ navigation }: any) {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    async function fetchGroups() {
      const saved = await loadGroups();
      setGroups(saved);
    }
    fetchGroups();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>LA CUENTA</Text>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>C</Text>
        </View>
      </View>

      {/* Balance strip */}
      <View style={styles.balanceStrip}>
        <View>
          <Text style={styles.balanceLabel}>TOTAL YOU OWE</Text>
          <Text style={styles.balanceAmt}>$0.00</Text>
        </View>
        <TouchableOpacity style={styles.settleBtn}>
          <Text style={styles.settleBtnText}>SETTLE ALL ↗</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs list */}
      <ScrollView style={styles.scroll}>
        <Text style={styles.sectionLabel}>* YOUR TABS *</Text>

        {groups.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>NO TABS YET</Text>
            <Text style={styles.emptySub}>CREATE YOUR FIRST TAB BELOW</Text>
          </View>
        ) : (
          groups.map((group) => (
            <TouchableOpacity
              key={group.id}
              style={styles.stub}
              onPress={() => navigation.navigate("Group", { group })}
            >
              <View style={styles.stubTop}>
                <View>
                  <Text style={styles.stubName}>{group.name}</Text>
                  <Text style={styles.stubMeta}>
                    {group.people.length} PEOPLE · {group.expenses.length}{" "}
                    EXPENSES
                  </Text>
                </View>
              </View>
              <View style={styles.stubTear}>
                <View style={styles.tearDot} />
                <View style={styles.tearLine} />
                <View style={styles.tearDot} />
              </View>
              <View style={styles.stubFooter}>
                <View style={styles.peopleRow}>
                  {group.people.slice(0, 4).map((person, i) => (
                    <View key={i} style={styles.miniAvatar}>
                      <Text style={styles.miniAvatarText}>
                        {person[0].toUpperCase()}
                      </Text>
                    </View>
                  ))}
                </View>
                <Text style={styles.arrow}>→</Text>
              </View>
            </TouchableOpacity>
          ))
        )}

        {/* New tab button */}
        <TouchableOpacity
          style={styles.newBtn}
          onPress={() => navigation.navigate("NewTab")}
        >
          <Text style={styles.newBtnText}>+ NEW TAB</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F6" },
  header: {
    backgroundColor: "#2D4A35",
    padding: 20,
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { fontSize: 20, color: "#fff", letterSpacing: 4 },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#7DC98A",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { fontSize: 14, color: "#2D4A35", fontFamily: "monospace" },
  balanceStrip: {
    backgroundColor: "#3B6147",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceLabel: { fontSize: 10, color: "#7DC98A", letterSpacing: 1 },
  balanceAmt: { fontSize: 28, color: "#fff" },
  settleBtn: {
    backgroundColor: "#7DC98A",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  settleBtnText: {
    fontSize: 10,
    color: "#2D4A35",
    fontFamily: "monospace",
    letterSpacing: 1,
  },
  scroll: { flex: 1, padding: 16 },
  sectionLabel: {
    fontSize: 10,
    color: "#aaa",
    letterSpacing: 2,
    marginBottom: 12,
  },
  emptyCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 32,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 12,
  },
  emptyText: { fontSize: 13, color: "#2D4A35", letterSpacing: 2 },
  emptySub: { fontSize: 10, color: "#aaa", letterSpacing: 1, marginTop: 6 },
  stub: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  stubTop: { padding: 14 },
  stubName: { fontSize: 14, color: "#1a1a1a", letterSpacing: 1 },
  stubMeta: { fontSize: 10, color: "#bbb", letterSpacing: 1, marginTop: 3 },
  stubTear: {
    flexDirection: "row",
    alignItems: "center",
  },
  tearDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#F8F8F6",
  },
  tearLine: {
    flex: 1,
    borderTopWidth: 1.5,
    borderColor: "#eee",
    borderStyle: "dashed",
  },
  stubFooter: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  peopleRow: { flexDirection: "row", gap: 4 },
  miniAvatar: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#2D4A35",
    alignItems: "center",
    justifyContent: "center",
  },
  miniAvatarText: { fontSize: 9, color: "#fff" },
  arrow: { fontSize: 14, color: "#ccc" },
  newBtn: {
    borderWidth: 1.5,
    borderColor: "#ccc",
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  newBtnText: {
    fontSize: 12,
    color: "#aaa",
    fontFamily: "monospace",
    letterSpacing: 2,
  },
});
