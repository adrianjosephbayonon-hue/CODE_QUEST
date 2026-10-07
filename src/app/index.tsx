import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>CODEQUEST</Text>

          <Text style={styles.subtitle}>Learn to Code. Level Up.</Text>
        </View>

        <View style={styles.coinBox}>
          <Text style={styles.coin}>🪙</Text>
          <Text style={styles.coinText}>100</Text>
        </View>
      </View>

      {/* PLAYER CARD */}
      <View style={styles.playerCard}>
        <View style={styles.character}>
          <Text style={styles.characterEmoji}>🧙</Text>
        </View>

        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>Code Adventurer</Text>

          <Text style={styles.level}>LEVEL 1</Text>

          <View style={styles.xpContainer}>
            <View style={styles.xpBar}>
              <View style={styles.xpProgress} />
            </View>

            <Text style={styles.xpText}>30 / 100 XP</Text>
          </View>
        </View>
      </View>

      {/* WELCOME */}
      <View style={styles.welcome}>
        <Text style={styles.welcomeTitle}>Welcome, Adventurer!</Text>

        <Text style={styles.welcomeText}>
          Your programming adventure begins here.
        </Text>
      </View>

      {/* MENU */}
      <View style={styles.menu}>
        {/* WORLD */}
        <Pressable
          style={styles.menuButton}
          onPress={() => router.push("/world")}
        >
          <Text style={styles.menuIcon}>🗺️</Text>

          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>WORLD</Text>

            <Text style={styles.menuDescription}>Explore the coding world</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        {/* LEARN */}
        <Pressable
          style={styles.menuButton}
          onPress={() => router.push("/village")}
        >
          <Text style={styles.menuIcon}>📚</Text>

          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>LEARN</Text>

            <Text style={styles.menuDescription}>
              Study programming lessons
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        {/* ADVENTURE */}
        <Pressable
          style={styles.menuButton}
          onPress={() => router.push("/village")}
        >
          <Text style={styles.menuIcon}>⚔️</Text>

          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>ADVENTURE</Text>

            <Text style={styles.menuDescription}>Battle enemies with code</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>
      </View>

      {/* DAILY QUEST */}
      <View style={styles.questCard}>
        <View style={styles.questInfo}>
          <Text style={styles.questLabel}>DAILY QUEST</Text>

          <Text style={styles.questTitle}>Complete your first lesson</Text>

          <Text style={styles.questReward}>Reward: +50 XP</Text>
        </View>

        <Text style={styles.questIcon}>🎯</Text>
      </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 15,
  },

  logo: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 2,
  },

  subtitle: {
    color: "#8f96aa",
    fontSize: 13,
    marginTop: 3,
  },

  coinBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1b2030",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },

  coin: {
    fontSize: 18,
    marginRight: 5,
  },

  coinText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 15,
  },

  playerCard: {
    backgroundColor: "#1b2030",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#292f43",
  },

  character: {
    width: 75,
    height: 75,
    borderRadius: 18,
    backgroundColor: "#292f43",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  characterEmoji: {
    fontSize: 45,
  },

  playerInfo: {
    flex: 1,
  },

  playerName: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "800",
  },

  level: {
    color: "#8f96aa",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 4,
    marginBottom: 8,
  },

  xpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  xpBar: {
    flex: 1,
    height: 8,
    backgroundColor: "#30364a",
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 8,
  },

  xpProgress: {
    width: "30%",
    height: "100%",
    backgroundColor: "#7c5cff",
    borderRadius: 10,
  },

  xpText: {
    color: "#8f96aa",
    fontSize: 10,
    fontWeight: "600",
  },

  welcome: {
    paddingVertical: 20,
  },

  welcomeTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "800",
  },

  welcomeText: {
    color: "#8f96aa",
    marginTop: 5,
    fontSize: 13,
  },

  menu: {
    gap: 12,
  },

  menuButton: {
    backgroundColor: "#1b2030",
    borderRadius: 16,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#292f43",
  },

  menuIcon: {
    fontSize: 28,
    marginRight: 15,
  },

  menuTextContainer: {
    flex: 1,
  },

  menuTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "800",
  },

  menuDescription: {
    color: "#7f879c",
    fontSize: 11,
    marginTop: 3,
  },

  arrow: {
    color: "#7c5cff",
    fontSize: 28,
    marginLeft: "auto",
  },

  questCard: {
    marginTop: 15,
    backgroundColor: "#211e32",
    borderRadius: 16,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3b3459",
  },

  questInfo: {
    flex: 1,
  },

  questLabel: {
    color: "#7c5cff",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
  },

  questTitle: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 5,
  },

  questReward: {
    color: "#8f96aa",
    fontSize: 11,
    marginTop: 4,
  },

  questIcon: {
    fontSize: 32,
    marginLeft: 10,
  },
});
