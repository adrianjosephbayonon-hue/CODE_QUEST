import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function VariablesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backButton}>‹ BACK</Text>
          </Pressable>

          <Text style={styles.headerTitle}>VARIABLES</Text>

          <Text style={styles.questNumber}>QUEST 1</Text>
        </View>

        {/* TITLE */}
        <View style={styles.titleSection}>
          <Text style={styles.icon}>📦</Text>

          <Text style={styles.title}>What is a Variable?</Text>

          <Text style={styles.subtitle}>
            Learn how programs store information.
          </Text>
        </View>

        {/* LESSON */}
        <View style={styles.lessonCard}>
          <Text style={styles.sectionTitle}>📚 LESSON</Text>

          <Text style={styles.lessonText}>
            A variable is a named container that stores a value in your program.
          </Text>

          <Text style={styles.lessonText}>
            Think of it like a box. You give the box a name, then put
            information inside it.
          </Text>

          {/* CODE EXAMPLE */}
          <View style={styles.codeBox}>
            <Text style={styles.codeText}>int score = 100;</Text>
          </View>

          <Text style={styles.explanation}>
            <Text style={styles.highlight}>int</Text> → the data type
            {"\n"}
            <Text style={styles.highlight}>score</Text> → the variable name
            {"\n"}
            <Text style={styles.highlight}>100</Text> → the stored value
          </Text>
        </View>

        {/* OBJECTIVE */}
        <View style={styles.objectiveCard}>
          <Text style={styles.objectiveTitle}>🎯 YOUR OBJECTIVE</Text>

          <Text style={styles.objectiveText}>
            Create an integer variable named{" "}
            <Text style={styles.highlight}>score</Text> and give it the value{" "}
            <Text style={styles.highlight}>100</Text>.
          </Text>
        </View>

        {/* START CHALLENGE */}
        <Pressable
          style={styles.startButton}
          onPress={() => router.push("/battle")}
        >
          <Text style={styles.startText}>START CHALLENGE ⚔️</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  backButton: {
    color: "#94a3b8",
    fontSize: 15,
    fontWeight: "700",
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "900",
  },

  questNumber: {
    color: "#38bdf8",
    fontSize: 13,
    fontWeight: "800",
  },

  titleSection: {
    alignItems: "center",
    marginBottom: 25,
  },

  icon: {
    fontSize: 55,
    marginBottom: 10,
  },

  title: {
    color: "#ffffff",
    fontSize: 27,
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: 14,
    textAlign: "center",
    marginTop: 7,
  },

  lessonCard: {
    backgroundColor: "#1e293b",
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: "#334155",
  },

  sectionTitle: {
    color: "#38bdf8",
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 15,
  },

  lessonText: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 13,
  },

  codeBox: {
    backgroundColor: "#020617",
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
  },

  codeText: {
    color: "#4ade80",
    fontSize: 16,
    fontFamily: "monospace",
  },

  explanation: {
    color: "#94a3b8",
    fontSize: 14,
    lineHeight: 25,
    marginTop: 10,
  },

  highlight: {
    color: "#facc15",
    fontWeight: "900",
  },

  objectiveCard: {
    backgroundColor: "#172554",
    borderWidth: 1,
    borderColor: "#2563eb",
    borderRadius: 16,
    padding: 18,
    marginTop: 18,
  },

  objectiveTitle: {
    color: "#60a5fa",
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 10,
  },

  objectiveText: {
    color: "#dbeafe",
    fontSize: 15,
    lineHeight: 23,
  },

  startButton: {
    backgroundColor: "#2563eb",
    borderRadius: 15,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 22,
  },

  startText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "900",
  },
});
