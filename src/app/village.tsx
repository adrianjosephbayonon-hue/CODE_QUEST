import { router } from "expo-router";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function VillageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backButton}>‹</Text>
          </Pressable>

          <View>
            <Text style={styles.title}>BEGINNER VILLAGE</Text>

            <Text style={styles.subtitle}>The beginning of your journey</Text>
          </View>

          <View style={styles.headerSpacer} />
        </View>

        {/* VILLAGE INTRO */}
        <View style={styles.villageCard}>
          <Text style={styles.villageEmoji}>🏘️</Text>

          <Text style={styles.villageTitle}>Welcome to Beginner Village!</Text>

          <Text style={styles.villageDescription}>
            Every great programmer starts with the fundamentals. Complete each
            quest to become stronger.
          </Text>
        </View>

        {/* MAIN QUEST */}
        <Text style={styles.sectionTitle}>MAIN QUEST</Text>

        <Pressable
          style={styles.questCard}
          onPress={() => router.push("/variables")}
        >
          <View style={styles.questIcon}>
            <Text style={styles.questEmoji}>📦</Text>
          </View>

          <View style={styles.questInfo}>
            <Text style={styles.questTitle}>Quest 1: Variables</Text>

            <Text style={styles.questDescription}>
              Learn how programs store information.
            </Text>

            <Text style={styles.reward}>⭐ +50 XP</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        {/* LOCKED QUEST 2 */}
        <View style={styles.lockedQuest}>
          <Text style={styles.lockedEmoji}>🔒</Text>

          <View style={styles.lockedInfo}>
            <Text style={styles.lockedTitle}>Quest 2: Data Types</Text>

            <Text style={styles.lockedDescription}>
              Complete Quest 1 to unlock
            </Text>
          </View>
        </View>

        {/* LOCKED QUEST 3 */}
        <View style={styles.lockedQuest}>
          <Text style={styles.lockedEmoji}>🔒</Text>

          <View style={styles.lockedInfo}>
            <Text style={styles.lockedTitle}>Quest 3: Operators</Text>

            <Text style={styles.lockedDescription}>
              Complete Quest 2 to unlock
            </Text>
          </View>
        </View>
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
    fontSize: 19,
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    color: "#8f96aa",
    fontSize: 11,
    textAlign: "center",
    marginTop: 3,
  },

  villageCard: {
    backgroundColor: "#1b2030",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#292f43",
  },

  villageEmoji: {
    fontSize: 65,
  },

  villageTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 10,
  },

  villageDescription: {
    color: "#8f96aa",
    fontSize: 12,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 8,
  },

  sectionTitle: {
    color: "#777f96",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginTop: 25,
    marginBottom: 10,
  },

  questCard: {
    backgroundColor: "#1b2030",
    borderRadius: 18,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#51457f",
    marginBottom: 10,
  },

  questIcon: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#292f43",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  questEmoji: {
    fontSize: 32,
  },

  questInfo: {
    flex: 1,
  },

  questTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "800",
  },

  questDescription: {
    color: "#8f96aa",
    fontSize: 11,
    marginTop: 4,
  },

  reward: {
    color: "#7c5cff",
    fontSize: 11,
    fontWeight: "800",
    marginTop: 7,
  },

  arrow: {
    color: "#7c5cff",
    fontSize: 30,
    marginLeft: 8,
  },

  lockedQuest: {
    backgroundColor: "#171b28",
    borderRadius: 16,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    opacity: 0.6,
  },

  lockedEmoji: {
    fontSize: 25,
    marginRight: 15,
  },

  lockedInfo: {
    flex: 1,
  },

  lockedTitle: {
    color: "#9da3b5",
    fontSize: 15,
    fontWeight: "800",
  },

  lockedDescription: {
    color: "#626a7e",
    fontSize: 11,
    marginTop: 3,
  },
});
