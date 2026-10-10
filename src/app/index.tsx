import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";

import { useDailyQuest } from "../store/dailyQuest";
import { usePlayer } from "../store/player";

export default function HomeScreen() {
  const { player } = usePlayer();

  const { completed, completeQuest } = useDailyQuest();

  const xpIntoLevel = player.xp % 100;

  const xpProgress = xpIntoLevel / 100;

  const handleDailyQuest = () => {
    if (!completed) {
      completeQuest();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ==================================================
            HEADER
            ================================================== */}

        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>CODEQUEST</Text>

            <Text style={styles.tagline}>LEARN TO CODE. LEVEL UP.</Text>
          </View>

          <Pressable
            style={styles.profileButton}
            onPress={() => router.push("/profile")}
          >
            <Text style={styles.profileIcon}>🧑‍💻</Text>
          </Pressable>
        </View>

        {/* ==================================================
            PLAYER CARD
            ================================================== */}

        <View style={styles.playerCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>🧑‍💻</Text>
          </View>

          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>CODE QUESTER</Text>

            <Text style={styles.playerTitle}>JAVA ADVENTURER</Text>

            <View style={styles.levelRow}>
              <Text style={styles.levelText}>LV. {player.level}</Text>

              <Text style={styles.xpText}>{xpIntoLevel}/100 XP</Text>
            </View>

            <View style={styles.xpBackground}>
              <View
                style={[
                  styles.xpFill,
                  {
                    width: `${xpProgress * 100}%`,
                  },
                ]}
              />
            </View>
          </View>
        </View>

        {/* ==================================================
            CURRENCY
            ================================================== */}

        <View style={styles.currencyRow}>
          <View style={styles.currencyCard}>
            <Text style={styles.currencyIcon}>⭐</Text>

            <View>
              <Text style={styles.currencyLabel}>XP</Text>

              <Text style={styles.currencyValue}>{player.xp}</Text>
            </View>
          </View>

          <View style={styles.currencyCard}>
            <Text style={styles.currencyIcon}>🪙</Text>

            <View>
              <Text style={styles.currencyLabel}>COINS</Text>

              <Text style={styles.currencyValue}>{player.coins}</Text>
            </View>
          </View>
        </View>

        {/* ==================================================
            DAILY QUEST
            ================================================== */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>DAILY QUEST</Text>

          <Text style={styles.sectionBadge}>
            {completed ? "COMPLETED" : "ACTIVE"}
          </Text>
        </View>

        <Pressable
          style={[
            styles.dailyQuestCard,
            completed && styles.dailyQuestCompleted,
          ]}
          onPress={handleDailyQuest}
        >
          <View style={styles.questIconContainer}>
            <Text style={styles.questIcon}>{completed ? "✅" : "🎯"}</Text>
          </View>

          <View style={styles.questContent}>
            <Text style={styles.questTitle}>
              {completed ? "DAILY QUEST COMPLETE" : "PRACTICE MAKES PERFECT"}
            </Text>

            <Text style={styles.questDescription}>
              {completed
                ? "Come back tomorrow for a new challenge."
                : "Complete today's coding challenge."}
            </Text>

            <View style={styles.questRewardRow}>
              <Text style={styles.questReward}>⭐ +25 XP</Text>

              <Text style={styles.questReward}>🪙 +10</Text>
            </View>
          </View>

          {!completed && <Text style={styles.questArrow}>→</Text>}
        </Pressable>

        {/* ==================================================
            ADVENTURE MENU
            ================================================== */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>ADVENTURE</Text>
        </View>

        <Pressable
          style={styles.menuCard}
          onPress={() => router.push("/world")}
        >
          <View style={styles.menuIconContainer}>
            <Text style={styles.menuIcon}>🌎</Text>
          </View>

          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>WORLD MAP</Text>

            <Text style={styles.menuDescription}>Explore the Coding Realm</Text>
          </View>

          <Text style={styles.menuArrow}>→</Text>
        </Pressable>

        <Pressable
          style={styles.menuCard}
          onPress={() => router.push("/quests")}
        >
          <View style={styles.menuIconContainer}>
            <Text style={styles.menuIcon}>📜</Text>
          </View>

          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>QUEST BOARD</Text>

            <Text style={styles.menuDescription}>
              Complete quests and earn rewards
            </Text>
          </View>

          <Text style={styles.menuArrow}>→</Text>
        </Pressable>

        <Pressable style={styles.menuCard} onPress={() => router.push("/shop")}>
          <View style={styles.menuIconContainer}>
            <Text style={styles.menuIcon}>🛒</Text>
          </View>

          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>CODE SHOP</Text>

            <Text style={styles.menuDescription}>
              Spend coins on special items
            </Text>
          </View>

          <Text style={styles.menuArrow}>→</Text>
        </Pressable>

        <Pressable
          style={styles.menuCard}
          onPress={() => router.push("/achievements")}
        >
          <View style={styles.menuIconContainer}>
            <Text style={styles.menuIcon}>🏆</Text>
          </View>

          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>ACHIEVEMENTS</Text>

            <Text style={styles.menuDescription}>
              View your coding accomplishments
            </Text>
          </View>

          <Text style={styles.menuArrow}>→</Text>
        </Pressable>

        <Pressable
          style={styles.menuCard}
          onPress={() => router.push("/profile")}
        >
          <View style={styles.menuIconContainer}>
            <Text style={styles.menuIcon}>👤</Text>
          </View>

          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>CHARACTER</Text>

            <Text style={styles.menuDescription}>
              View your profile and equipment
            </Text>
          </View>

          <Text style={styles.menuArrow}>→</Text>
        </Pressable>

        {/* ==================================================
            CURRENT JOURNEY
            ================================================== */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>CURRENT JOURNEY</Text>
        </View>

        <View style={styles.journeyCard}>
          <Text style={styles.journeyIcon}>⚔️</Text>

          <View style={styles.journeyContent}>
            <Text style={styles.journeyTitle}>THE CODING REALM</Text>

            <Text style={styles.journeyDescription}>
              Continue your programming adventure.
            </Text>
          </View>

          <Pressable
            style={styles.continueButton}
            onPress={() => router.push("/world")}
          >
            <Text style={styles.continueText}>CONTINUE</Text>
          </Pressable>
        </View>

        {/* ==================================================
            FOOTER
            ================================================== */}

        <Text style={styles.footer}>CODEQUEST • LEARN • CODE • CONQUER</Text>
      </ScrollView>
    </View>
  );
}

/* ============================================================
   STYLES
   ============================================================ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090b",
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  logo: {
    color: "#ffffff",
    fontSize: 27,
    fontWeight: "900",
    letterSpacing: 2,
  },

  tagline: {
    color: "#71717a",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginTop: 3,
  },

  profileButton: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#18181b",
    borderWidth: 1,
    borderColor: "#27272a",
    justifyContent: "center",
    alignItems: "center",
  },

  profileIcon: {
    fontSize: 24,
  },

  playerCard: {
    flexDirection: "row",
    backgroundColor: "#18181b",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#27272a",
    padding: 18,
    marginBottom: 14,
  },

  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: "#27272a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  avatar: {
    fontSize: 36,
  },

  playerInfo: {
    flex: 1,
    justifyContent: "center",
  },

  playerName: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 1,
  },

  playerTitle: {
    color: "#71717a",
    fontSize: 10,
    fontWeight: "700",
    marginTop: 3,
    letterSpacing: 1,
  },

  levelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 6,
  },

  levelText: {
    color: "#facc15",
    fontSize: 11,
    fontWeight: "900",
  },

  xpText: {
    color: "#a1a1aa",
    fontSize: 10,
    fontWeight: "700",
  },

  xpBackground: {
    height: 7,
    backgroundColor: "#27272a",
    borderRadius: 20,
    overflow: "hidden",
  },

  xpFill: {
    height: "100%",
    backgroundColor: "#facc15",
    borderRadius: 20,
  },

  currencyRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 25,
  },

  currencyCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#18181b",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#27272a",
    padding: 14,
  },

  currencyIcon: {
    fontSize: 22,
    marginRight: 10,
  },

  currencyLabel: {
    color: "#71717a",
    fontSize: 9,
    fontWeight: "800",
  },

  currencyValue: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "900",
    marginTop: 2,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 1,
  },

  sectionBadge: {
    color: "#71717a",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  dailyQuestCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c1917",
    borderWidth: 1,
    borderColor: "#44403c",
    borderRadius: 18,
    padding: 15,
    marginBottom: 25,
  },

  dailyQuestCompleted: {
    borderColor: "#365314",
    backgroundColor: "#141a0f",
  },

  questIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#292524",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  questIcon: {
    fontSize: 23,
  },

  questContent: {
    flex: 1,
  },

  questTitle: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  questDescription: {
    color: "#a8a29e",
    fontSize: 11,
    marginTop: 4,
    lineHeight: 16,
  },

  questRewardRow: {
    flexDirection: "row",
    marginTop: 8,
  },

  questReward: {
    color: "#facc15",
    fontSize: 10,
    fontWeight: "800",
    marginRight: 12,
  },

  questArrow: {
    color: "#facc15",
    fontSize: 22,
    fontWeight: "900",
    marginLeft: 8,
  },

  menuCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#18181b",
    borderWidth: 1,
    borderColor: "#27272a",
    borderRadius: 18,
    padding: 15,
    marginBottom: 11,
  },

  menuIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#27272a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  menuIcon: {
    fontSize: 24,
  },

  menuTextContainer: {
    flex: 1,
  },

  menuTitle: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  menuDescription: {
    color: "#71717a",
    fontSize: 11,
    marginTop: 4,
  },

  menuArrow: {
    color: "#71717a",
    fontSize: 22,
    fontWeight: "800",
  },

  journeyCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#18181b",
    borderWidth: 1,
    borderColor: "#27272a",
    borderRadius: 18,
    padding: 16,
    marginBottom: 25,
  },

  journeyIcon: {
    fontSize: 28,
    marginRight: 13,
  },

  journeyContent: {
    flex: 1,
  },

  journeyTitle: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
  },

  journeyDescription: {
    color: "#71717a",
    fontSize: 11,
    lineHeight: 16,
    marginTop: 4,
  },

  continueButton: {
    backgroundColor: "#facc15",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 9,
    marginLeft: 8,
  },

  continueText: {
    color: "#18181b",
    fontSize: 9,
    fontWeight: "900",
  },

  footer: {
    color: "#3f3f46",
    fontSize: 9,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 5,
  },
});
