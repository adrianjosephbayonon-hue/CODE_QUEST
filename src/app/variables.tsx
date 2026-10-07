import { router } from "expo-router";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function VariablesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backButton}>‹</Text>
          </Pressable>

          <View>
            <Text style={styles.title}>VARIABLES</Text>

            <Text style={styles.subtitle}>Quest 1</Text>
          </View>

          <View style={styles.headerSpacer} />
        </View>

        {/* LESSON */}
        <View style={styles.lessonCard}>
          <Text style={styles.lessonEmoji}>📦</Text>

          <Text style={styles.lessonTitle}>What is a Variable?</Text>

          <Text style={styles.lessonText}>
            A variable is a container that stores information in a program.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.code}>int score = 100;</Text>
          </View>

          <Text style={styles.explanation}>
            In this example, the variable
            <Text style={styles.highlight}>{" score "}</Text>
            stores the value
            <Text style={styles.highlight}>{" 100"}</Text>.
          </Text>
        </View>

        {/* OBJECTIVE */}
        <View style={styles.objectiveCard}>
          <Text style={styles.objectiveTitle}>🎯 YOUR OBJECTIVE</Text>

          <Text style={styles.objectiveText}>
            Learn how to create a variable that stores a number.
          </Text>
        </View>

        {/* START */}
        <Pressable style={styles.startButton}>
          <Text style={styles.startButtonText}>START CHALLENGE ⚔️</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10131f",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 20,
  },

  backButton: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "300",
    width: 35,
  },

  headerSpacer: {
    width: 35,
  },

  title: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    color: "#7c5cff",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 3,
  },

  lessonCard: {
    backgroundColor: "#1b2030",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#292f43",
  },

  lessonEmoji: {
    fontSize: 50,
    textAlign: "center",
  },

  lessonTitle: {
    color: "#ffffff",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 12,
  },

  lessonText: {
    color: "#a1a8ba",
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    marginTop: 10,
  },

  codeBox: {
    backgroundColor: "#0b0e17",
    borderRadius: 12,
    padding: 18,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#30364a",
  },

  code: {
    color: "#a78bfa",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "monospace",
  },

  explanation: {
    color: "#8f96aa",
    fontSize: 12,
    lineHeight: 19,
    marginTop: 15,
  },

  highlight: {
    color: "#ffffff",
    fontWeight: "800",
  },

  objectiveCard: {
    backgroundColor: "#211e32",
    borderRadius: 16,
    padding: 18,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#3b3459",
  },

  objectiveTitle: {
    color: "#7c5cff",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1,
  },

  objectiveText: {
    color: "#ffffff",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 7,
  },

  startButton: {
    backgroundColor: "#7c5cff",
    borderRadius: 15,
    paddingVertical: 17,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  startButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
});
