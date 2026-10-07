import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { useDailyQuest } from "../store/dailyQuest";
import { usePlayer } from "../store/player";

export default function HomeScreen() {
  const { player, addRewards, unlockAchievement } = usePlayer();

  const { completed, completeQuest } = useDailyQuest();

  /*
   * COMPLETE DAILY QUEST
   *
   * The reward can only be claimed
   * once because we check `completed`.
   */
  const handleDailyQuest = () => {
    if (completed) {
      return;
    }

    addRewards(25, 15);

    completeQuest();
  };

  const currentLevelXP = player.xp % 100;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>CODEQUEST</Text>

            <Text style={styles.tagline}>Learn to Code. Level Up.</Text>
          </View>

          <View style={styles.coinContainer}>
            <Text style={styles.coinIcon}>🪙</Text>

            <Text style={styles.coins}>{player.coins}</Text>
          </View>
        </View>

        {/* ========================= */}
        {/* PLAYER CARD */}
        {/* ========================= */}

        <View style={styles.playerCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>🧙</Text>
          </View>

          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>Code Adventurer</Text>

            <Text style={styles.level}>LEVEL {player.level}</Text>

            <View style={styles.xpHeader}>
              <Text style={styles.xpLabel}>EXPERIENCE</Text>

              <Text style={styles.xpValue}>{currentLevelXP} / 100 XP</Text>
            </View>

            <View style={styles.xpBackground}>
              <View
                style={[
                  styles.xpBar,
                  {
                    width: `${currentLevelXP}%`,
                  },
                ]}
              />
            </View>

            <Text style={styles.totalXP}>⭐ {player.xp} TOTAL XP</Text>
          </View>
        </View>

        {/* ========================= */}
        {/* DAILY QUEST */}
        {/* ========================= */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>DAILY QUEST</Text>

          <Text style={styles.dailyLabel}>+ REWARDS</Text>
        </View>

        <View
          style={[
            styles.dailyQuestCard,
            completed && styles.completedQuestCard,
          ]}
        >
          <View style={styles.questIconContainer}>
            <Text style={styles.questIcon}>{completed ? "✅" : "📜"}</Text>
          </View>

          <View style={styles.questInfo}>
            <Text style={styles.questTitle}>
              {completed ? "QUEST COMPLETED" : "VARIABLE INITIATE"}
            </Text>

            <Text style={styles.questDescription}>
              {completed
                ? "You completed today's coding quest. Come back tomorrow for a new challenge!"
                : "Create a variable called score and give it the value 100."}
            </Text>

            <Text style={styles.questReward}>
              {completed ? "✓ REWARDS CLAIMED" : "⭐ +25 XP   •   🪙 +15 COINS"}
            </Text>
          </View>
        </View>

        {!completed && (
          <Pressable style={styles.questButton} onPress={handleDailyQuest}>
            <Text style={styles.questButtonText}>COMPLETE QUEST</Text>
          </Pressable>
        )}

        {completed && (
          <View style={styles.completedButton}>
            <Text style={styles.completedButtonText}>✓ COMPLETED TODAY</Text>
          </View>
        )}

        {/* ========================= */}
        {/* GAME MENU */}
        {/* ========================= */}

        <Text style={styles.menuTitle}>ADVENTURE</Text>

        {/* WORLD */}

        <Pressable
          style={styles.menuCard}
          onPress={() => router.push("/world")}
        >
          <View style={[styles.menuIconContainer, styles.worldIconContainer]}>
            <Text style={styles.menuIcon}>🌎</Text>
          </View>

          <View style={styles.menuInfo}>
            <Text style={styles.menuCardTitle}>WORLD</Text>

            <Text style={styles.menuDescription}>
              Explore coding areas and unlock new programming concepts.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        {/* LEARN */}

        <Pressable
          style={styles.menuCard}
          onPress={() => router.push("/village")}
        >
          <View style={[styles.menuIconContainer, styles.learnIconContainer]}>
            <Text style={styles.menuIcon}>📚</Text>
          </View>

          <View style={styles.menuInfo}>
            <Text style={styles.menuCardTitle}>LEARN</Text>

            <Text style={styles.menuDescription}>
              Study programming lessons and prepare for your next battle.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        {/* BATTLE */}

        <Pressable
          style={styles.menuCard}
          onPress={() => router.push("/village")}
        >
          <View style={[styles.menuIconContainer, styles.battleIconContainer]}>
            <Text style={styles.menuIcon}>⚔️</Text>
          </View>

          <View style={styles.menuInfo}>
            <Text style={styles.menuCardTitle}>ADVENTURE</Text>

            <Text style={styles.menuDescription}>
              Enter the coding realm and battle enemies using your programming
              knowledge.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        {/* ========================= */}
        {/* CURRENT PROGRESS */}
        {/* ========================= */}

        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>CURRENT JOURNEY</Text>

          <View style={styles.progressRow}>
            <Text style={styles.progressIcon}>🏠</Text>

            <View style={styles.progressInfo}>
              <Text style={styles.progressName}>Beginner Village</Text>

              <Text style={styles.progressDescription}>
                Master the fundamentals of Java.
              </Text>
            </View>

            <Text style={styles.progressStatus}>ACTIVE</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.nextRow}>
            <Text style={styles.nextIcon}>🌲</Text>

            <View style={styles.progressInfo}>
              <Text style={styles.nextName}>Condition Forest</Text>

              <Text style={styles.nextDescription}>
                {player.conditionForestUnlocked
                  ? "Area unlocked!"
                  : "Defeat the Syntax Slime."}
              </Text>
            </View>

            <Text style={styles.nextStatus}>
              {player.conditionForestUnlocked ? "OPEN" : "🔒"}
            </Text>
          </View>
        </View>

        {/* ========================= */}
        {/* FOOTER */}
        {/* ========================= */}

        <View style={styles.footer}>
          <Text style={styles.footerText}>CODEQUEST</Text>

          <Text style={styles.footerSubtext}>Learn to Code. Level Up.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  /* ========================= */
  /* CONTAINER */
  /* ========================= */

  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  content: {
    padding: 20,
    paddingBottom: 45,
  },

  /* ========================= */
  /* HEADER */
  /* ========================= */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  logo: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: 1,
  },

  tagline: {
    color: "#64748b",
    fontSize: 12,
    marginTop: 3,
  },

  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  coinIcon: {
    fontSize: 17,
    marginRight: 5,
  },

  coins: {
    color: "#facc15",
    fontSize: 14,
    fontWeight: "900",
  },

  /* ========================= */
  /* PLAYER CARD */
  /* ========================= */

  playerCard: {
    flexDirection: "row",
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 18,
    padding: 18,
    marginBottom: 25,
  },

  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: "#172554",
    borderWidth: 1,
    borderColor: "#2563eb",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  avatar: {
    fontSize: 38,
  },

  playerInfo: {
    flex: 1,
  },

  playerName: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "900",
  },

  level: {
    color: "#38bdf8",
    fontSize: 12,
    fontWeight: "900",
    marginTop: 3,
    marginBottom: 12,
  },

  xpHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  xpLabel: {
    color: "#94a3b8",
    fontSize: 10,
    fontWeight: "800",
  },

  xpValue: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "800",
  },

  xpBackground: {
    height: 8,
    backgroundColor: "#334155",
    borderRadius: 10,
    overflow: "hidden",
  },

  xpBar: {
    height: "100%",
    backgroundColor: "#2563eb",
    borderRadius: 10,
  },

  totalXP: {
    color: "#facc15",
    fontSize: 10,
    fontWeight: "800",
    marginTop: 6,
  },

  /* ========================= */
  /* SECTION HEADER */
  /* ========================= */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "900",
  },

  dailyLabel: {
    color: "#facc15",
    fontSize: 10,
    fontWeight: "900",
  },

  /* ========================= */
  /* DAILY QUEST */
  /* ========================= */

  dailyQuestCard: {
    flexDirection: "row",
    backgroundColor: "#422006",
    borderWidth: 1,
    borderColor: "#a16207",
    borderRadius: 18,
    padding: 17,
  },

  completedQuestCard: {
    backgroundColor: "#052e16",
    borderColor: "#166534",
  },

  questIconContainer: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: "#713f12",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  questIcon: {
    fontSize: 27,
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
    color: "#fde68a",
    fontSize: 12,
    lineHeight: 18,
  },

  questReward: {
    color: "#facc15",
    fontSize: 11,
    fontWeight: "900",
    marginTop: 8,
  },

  questButton: {
    backgroundColor: "#2563eb",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 25,
  },

  questButtonText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
  },

  completedButton: {
    backgroundColor: "#166534",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 25,
  },

  completedButtonText: {
    color: "#bbf7d0",
    fontSize: 13,
    fontWeight: "900",
  },

  /* ========================= */
  /* ADVENTURE MENU */
  /* ========================= */

  menuTitle: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "900",
    marginBottom: 10,
  },

  menuCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
  },

  menuIconContainer: {
    width: 55,
    height: 55,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  worldIconContainer: {
    backgroundColor: "#172554",
  },

  learnIconContainer: {
    backgroundColor: "#312e81",
  },

  battleIconContainer: {
    backgroundColor: "#3b0764",
  },

  menuIcon: {
    fontSize: 27,
  },

  menuInfo: {
    flex: 1,
  },

  menuCardTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 4,
  },

  menuDescription: {
    color: "#94a3b8",
    fontSize: 12,
    lineHeight: 18,
  },

  arrow: {
    color: "#64748b",
    fontSize: 30,
    fontWeight: "300",
    marginLeft: 8,
  },

  /* ========================= */
  /* CURRENT JOURNEY */
  /* ========================= */

  progressCard: {
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 18,
    padding: 17,
    marginTop: 10,
  },

  progressTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 15,
  },

  progressRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  progressIcon: {
    fontSize: 25,
    marginRight: 12,
  },

  progressInfo: {
    flex: 1,
  },

  progressName: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
  },

  progressDescription: {
    color: "#64748b",
    fontSize: 11,
    marginTop: 3,
  },

  progressStatus: {
    color: "#4ade80",
    fontSize: 9,
    fontWeight: "900",
  },

  divider: {
    height: 1,
    backgroundColor: "#1f2937",
    marginVertical: 14,
  },

  nextRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  nextIcon: {
    fontSize: 25,
    marginRight: 12,
  },

  nextName: {
    color: "#cbd5e1",
    fontSize: 13,
    fontWeight: "800",
  },

  nextDescription: {
    color: "#475569",
    fontSize: 11,
    marginTop: 3,
  },

  nextStatus: {
    color: "#94a3b8",
    fontSize: 11,
    fontWeight: "900",
  },

  /* ========================= */
  /* FOOTER */
  /* ========================= */

  footer: {
    alignItems: "center",
    marginTop: 35,
  },

  footerText: {
    color: "#334155",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 2,
  },

  footerSubtext: {
    color: "#1e293b",
    fontSize: 10,
    marginTop: 4,
  },
});
