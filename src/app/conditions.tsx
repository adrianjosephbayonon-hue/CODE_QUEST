import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ConditionsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backButton}>‹ BACK</Text>
          </Pressable>

          <Text style={styles.headerTitle}>CONDITION FOREST</Text>

          <Text style={styles.questNumber}>AREA 2</Text>
        </View>

        {/* TITLE */}
        <View style={styles.titleSection}>
          <Text style={styles.forestIcon}>🌲</Text>

          <Text style={styles.title}>CONDITION FOREST</Text>

          <Text style={styles.subtitle}>
            Learn how programs make decisions.
          </Text>
        </View>

        {/* STORY */}
        <View style={styles.storyCard}>
          <Text style={styles.storyTitle}>🌳 THE FOREST AWAITS</Text>

          <Text style={styles.storyText}>
            You have entered the Condition Forest.
            {"\n\n"}
            The creatures here cannot be defeated with simple variables. You
            must teach your code how to make decisions.
          </Text>
        </View>

        {/* LESSON */}
        <View style={styles.lessonCard}>
          <Text style={styles.sectionTitle}>📚 LESSON: IF STATEMENTS</Text>

          <Text style={styles.lessonText}>
            An <Text style={styles.highlight}>if</Text> statement allows a
            program to perform an action only when a condition is true.
          </Text>

          {/* CODE */}
          <View style={styles.codeBox}>
            <Text style={styles.codeText}>
              {"int score = 100;\n\n"}
              {"if (score >= 50) {\n"}
              {'    System.out.println("PASS");\n'}
              {"}"}
            </Text>
          </View>

          <Text style={styles.explanation}>
            <Text style={styles.highlight}>if</Text> → checks a condition
            {"\n"}
            <Text style={styles.highlight}>score {">"}= 50</Text> → the
            condition
            {"\n"}
            <Text style={styles.highlight}>PASS</Text> → runs when the condition
            is true
          </Text>
        </View>

        {/* OBJECTIVE */}
        <View style={styles.objectiveCard}>
          <Text style={styles.objectiveTitle}>🎯 YOUR OBJECTIVE</Text>

          <Text style={styles.objectiveText}>
            Learn how to use an{" "}
            <Text style={styles.highlight}>if statement</Text> to make your
            program decide what to do.
          </Text>
        </View>

        {/* QUEST */}
        <View style={styles.questCard}>
          <View style={styles.questIconContainer}>
            <Text style={styles.questIcon}>👾</Text>
          </View>

          <View style={styles.questInfo}>
            <Text style={styles.questTitle}>QUEST: LOGIC GOBLIN</Text>

            <Text style={styles.questDescription}>
              Use an if statement to defeat the Logic Goblin.
            </Text>

            <Text style={styles.questReward}>⭐ +75 XP • 🪙 +35 COINS</Text>
          </View>
        </View>

        {/* START */}
        <Pressable
          style={styles.startButton}
          onPress={() => router.push("/condition-battle")}
        >
          <Text style={styles.startText}>START QUEST ⚔️</Text>
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
    fontSize: 16,
    fontWeight: "900",
  },

  questNumber: {
    color: "#4ade80",
    fontSize: 13,
    fontWeight: "900",
  },

  titleSection: {
    alignItems: "center",
    marginBottom: 25,
  },

  forestIcon: {
    fontSize: 65,
    marginBottom: 10,
  },

  title: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: 14,
    textAlign: "center",
    marginTop: 7,
  },

  storyCard: {
    backgroundColor: "#052e16",
    borderWidth: 1,
    borderColor: "#166534",
    borderRadius: 18,
    padding: 20,
  },

  storyTitle: {
    color: "#4ade80",
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 12,
  },

  storyText: {
    color: "#bbf7d0",
    fontSize: 14,
    lineHeight: 23,
  },

  lessonCard: {
    backgroundColor: "#1e293b",
    borderRadius: 18,
    padding: 20,
    marginTop: 18,
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
    marginBottom: 15,
  },

  highlight: {
    color: "#facc15",
    fontWeight: "900",
  },

  codeBox: {
    backgroundColor: "#020617",
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
  },

  codeText: {
    color: "#4ade80",
    fontSize: 14,
    lineHeight: 22,
    fontFamily: "monospace",
  },

  explanation: {
    color: "#94a3b8",
    fontSize: 14,
    lineHeight: 25,
    marginTop: 10,
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

  questCard: {
    flexDirection: "row",
    backgroundColor: "#3f1d0b",
    borderWidth: 1,
    borderColor: "#92400e",
    borderRadius: 16,
    padding: 17,
    marginTop: 18,
  },

  questIconContainer: {
    width: 55,
    height: 55,
    borderRadius: 14,
    backgroundColor: "#451a03",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  questIcon: {
    fontSize: 28,
  },

  questInfo: {
    flex: 1,
  },

  questTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 5,
  },

  questDescription: {
    color: "#fed7aa",
    fontSize: 13,
    lineHeight: 19,
  },

  questReward: {
    color: "#facc15",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 8,
  },

  startButton: {
    backgroundColor: "#16a34a",
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
