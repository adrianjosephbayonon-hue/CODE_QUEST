import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { usePlayer } from "../store/player";

export default function HomeScreen() {
  const { player } = usePlayer();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* LOGO */}
        <View style={styles.logoSection}>
          <Text style={styles.logo}>CODEQUEST</Text>

          <Text style={styles.tagline}>Learn to Code. Level Up.</Text>
        </View>

        {/* COINS */}
        <View style={styles.coinBox}>
          <Text style={styles.coinIcon}>🪙</Text>

          <Text style={styles.coinText}>{player.coins}</Text>
        </View>

        {/* PLAYER CARD */}
        <View style={styles.playerCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>🧑‍💻</Text>
          </View>

          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>Code Adventurer</Text>

            <Text style={styles.level}>LEVEL {player.level}</Text>

            {/* XP */}
            <View style={styles.xpRow}>
              <Text style={styles.xpText}>{player.xp % 100} / 100 XP</Text>
            </View>

            <View style={styles.xpBackground}>
              <View
                style={[
                  styles.xpBar,
                  {
                    width: `${player.xp % 100}%`,
                  },
                ]}
              />
            </View>
          </View>
        </View>

        {/* WORLD */}
        <Pressable
          style={styles.mainButton}
          onPress={() => router.push("/world")}
        >
          <Text style={styles.buttonIcon}>🗺️</Text>

          <View>
            <Text style={styles.buttonTitle}>WORLD</Text>

            <Text style={styles.buttonDescription}>
              Explore the Coding Realm
            </Text>
          </View>
        </Pressable>

        {/* LEARN */}
        <Pressable
          style={styles.mainButton}
          onPress={() => router.push("/village")}
        >
          <Text style={styles.buttonIcon}>📚</Text>

          <View>
            <Text style={styles.buttonTitle}>LEARN</Text>

            <Text style={styles.buttonDescription}>
              Continue your programming journey
            </Text>
          </View>
        </Pressable>

        {/* ADVENTURE */}
        <Pressable
          style={styles.mainButton}
          onPress={() => router.push("/village")}
        >
          <Text style={styles.buttonIcon}>⚔️</Text>

          <View>
            <Text style={styles.buttonTitle}>ADVENTURE</Text>

            <Text style={styles.buttonDescription}>
              Complete quests and defeat enemies
            </Text>
          </View>
        </Pressable>

        {/* DAILY QUEST */}
        <View style={styles.dailyCard}>
          <Text style={styles.dailyTitle}>⭐ DAILY QUEST</Text>

          <Text style={styles.dailyQuest}>Defeat the Syntax Slime</Text>

          <Text style={styles.dailyReward}>Reward: +50 XP • +25 Coins</Text>
        </View>
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

  logoSection: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
  },

  logo: {
    color: "#38bdf8",
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: 2,
  },

  tagline: {
    color: "#94a3b8",
    fontSize: 14,
    marginTop: 5,
  },

  coinBox: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 15,
  },

  coinIcon: {
    fontSize: 18,
    marginRight: 6,
  },

  coinText: {
    color: "#facc15",
    fontSize: 16,
    fontWeight: "900",
  },

  playerCard: {
    flexDirection: "row",
    backgroundColor: "#1e293b",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#334155",
    marginBottom: 20,
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "#172554",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  avatarText: {
    fontSize: 32,
  },

  playerInfo: {
    flex: 1,
    justifyContent: "center",
  },

  playerName: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "900",
  },

  level: {
    color: "#38bdf8",
    fontSize: 13,
    fontWeight: "800",
    marginTop: 3,
  },

  xpRow: {
    marginTop: 8,
  },

  xpText: {
    color: "#cbd5e1",
    fontSize: 12,
    fontWeight: "700",
  },

  xpBackground: {
    width: "100%",
    height: 9,
    backgroundColor: "#334155",
    borderRadius: 10,
    marginTop: 5,
    overflow: "hidden",
  },

  xpBar: {
    height: "100%",
    backgroundColor: "#38bdf8",
    borderRadius: 10,
  },

  mainButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#334155",
  },

  buttonIcon: {
    fontSize: 30,
    marginRight: 16,
  },

  buttonTitle: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "900",
  },

  buttonDescription: {
    color: "#94a3b8",
    fontSize: 12,
    marginTop: 3,
  },

  dailyCard: {
    backgroundColor: "#422006",
    borderWidth: 1,
    borderColor: "#f59e0b",
    borderRadius: 16,
    padding: 18,
    marginTop: 8,
  },

  dailyTitle: {
    color: "#fbbf24",
    fontSize: 14,
    fontWeight: "900",
  },

  dailyQuest: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
    marginTop: 8,
  },

  dailyReward: {
    color: "#fde68a",
    fontSize: 12,
    marginTop: 5,
  },
});
