import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function LoopsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backButton}>‹ BACK</Text>
          </Pressable>

          <Text style={styles.headerTitle}>LOOP LANDS</Text>

          <Text style={styles.areaNumber}>AREA 3</Text>
        </View>

        {/* TITLE */}
        <View style={styles.titleSection}>
          <Text style={styles.loopIcon}>🔄</Text>

          <Text style={styles.title}>LOOP LANDS</Text>

          <Text style={styles.subtitle}>
            Learn how to repeat actions with code.
          </Text>
        </View>

        {/* STORY */}
        <View style={styles.storyCard}>
          <Text style={styles.storyTitle}>🏞️ THE LOOP LANDS</Text>

          <Text style={styles.storyText}>
            The path ahead seems endless.
            {"\n\n"}
            Luckily, programmers don't need to write the same instruction
            hundreds of times.
            {"\n\n"}
            Loops allow your code to repeat instructions automatically.
          </Text>
        </View>

        {/* LESSON */}
        <View style={styles.lessonCard}>
          <Text style={styles.sectionTitle}>📚 LESSON: FOR LOOPS</Text>

          <Text style={styles.lessonText}>
            A <Text style={styles.highlight}>for loop</Text> repeats a block of
            code a specific number of times.
          </Text>

          {/* CODE */}
          <View style={styles.codeBox}>
            <Text style={styles.codeText}>
              {"for (int i = 0; i < 5; i++) {"}
              {"\n"}
              {'    System.out.println("Attack!");'}
              {"\n"}
              {"}"}
            </Text>
          </View>

          <Text style={styles.explanation}>
            <Text style={styles.highlight}>int i = 0</Text> → starting value
            {"\n"}
            <Text style={styles.highlight}>i {"<"} 5</Text> → loop condition
            {"\n"}
            <Text style={styles.highlight}>i++</Text> → increase i after every
            loop
          </Text>
        </View>

        {/* EXAMPLE */}
        <View style={styles.exampleCard}>
          <Text style={styles.exampleTitle}>⚔️ GAME EXAMPLE</Text>

          <Text style={styles.exampleText}>Instead of writing:</Text>

          <View style={styles.smallCodeBox}>
            <Text style={styles.codeText}>
              {"attack();"}
              {"\n"}
              {"attack();"}
              {"\n"}
              {"attack();"}
              {"\n"}
              {"attack();"}
              {"\n"}
              {"attack();"}
            </Text>
          </View>

          <Text style={styles.exampleText}>You can simply write:</Text>

          <View style={styles.smallCodeBox}>
            <Text style={styles.codeText}>
              {"for (int i = 0; i < 5; i++) {"}
              {"\n"}
              {"    attack();"}
              {"\n"}
              {"}"}
            </Text>
          </View>
        </View>

        {/* OBJECTIVE */}
        <View style={styles.objectiveCard}>
          <Text style={styles.objectiveTitle}>🎯 YOUR OBJECTIVE</Text>

          <Text style={styles.objectiveText}>
            Create a for loop that attacks an enemy{" "}
            <Text style={styles.highlight}>5 times</Text>.
          </Text>
        </View>

        {/* QUEST */}
        <View style={styles.questCard}>
          <View style={styles.questIconContainer}>
            <Text style={styles.questIcon}>🐲</Text>
          </View>

          <View style={styles.questInfo}>
            <Text style={styles.questTitle}>QUEST: LOOP DRAGON</Text>

            <Text style={styles.questDescription}>
              Use a loop to attack the Loop Dragon five times.
            </Text>

            <Text style={styles.questReward}>⭐ +100 XP • 🪙 +50 COINS</Text>
          </View>
        </View>

        {/* START */}
        <Pressable
          style={styles.startButton}
          onPress={() => router.push("/loop-battle")}
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
    fontSize: 17,
    fontWeight: "900",
  },

  areaNumber: {
    color: "#a78bfa",
    fontSize: 13,
    fontWeight: "900",
  },

  titleSection: {
    alignItems: "center",
    marginBottom: 25,
  },

  loopIcon: {
    fontSize: 65,
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

  storyCard: {
    backgroundColor: "#2e1065",
    borderWidth: 1,
    borderColor: "#6d28d9",
    borderRadius: 18,
    padding: 20,
  },

  storyTitle: {
    color: "#c4b5fd",
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 12,
  },

  storyText: {
    color: "#ddd6fe",
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
    color: "#a78bfa",
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

  smallCodeBox: {
    backgroundColor: "#020617",
    borderRadius: 10,
    padding: 14,
    marginVertical: 10,
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

  exampleCard: {
    backgroundColor: "#172554",
    borderWidth: 1,
    borderColor: "#1d4ed8",
    borderRadius: 18,
    padding: 20,
    marginTop: 18,
  },

  exampleTitle: {
    color: "#60a5fa",
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 12,
  },

  exampleText: {
    color: "#dbeafe",
    fontSize: 14,
    lineHeight: 21,
  },

  objectiveCard: {
    backgroundColor: "#3b0764",
    borderWidth: 1,
    borderColor: "#9333ea",
    borderRadius: 16,
    padding: 18,
    marginTop: 18,
  },

  objectiveTitle: {
    color: "#d8b4fe",
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 10,
  },

  objectiveText: {
    color: "#f3e8ff",
    fontSize: 15,
    lineHeight: 23,
  },

  questCard: {
    flexDirection: "row",
    backgroundColor: "#451a03",
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
    backgroundColor: "#3f1d0b",
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
    backgroundColor: "#7c3aed",
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
