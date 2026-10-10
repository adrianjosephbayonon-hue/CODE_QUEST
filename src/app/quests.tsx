import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";

import { useQuests } from "../store/quests";

export default function QuestsScreen() {
  const { dailyQuests, sideQuests } = useQuests();

  const completedDaily = dailyQuests.filter((quest) => quest.completed).length;

  const completedSide = sideQuests.filter((quest) => quest.completed).length;

  const renderQuest = (quest: (typeof dailyQuests)[number]) => {
    const progress = Math.min(quest.progress, quest.target);

    const percentage = quest.target === 0 ? 0 : progress / quest.target;

    return (
      <View
        key={quest.id}
        style={[styles.questCard, quest.completed && styles.completedCard]}
      >
        <View style={styles.questTop}>
          <View style={styles.questIcon}>
            <Text style={styles.iconText}>
              {quest.completed ? "✅" : quest.type === "daily" ? "🎯" : "📜"}
            </Text>
          </View>

          <View style={styles.questInfo}>
            <Text style={styles.questTitle}>{quest.title}</Text>

            <Text style={styles.questDescription}>{quest.description}</Text>
          </View>
        </View>

        <View style={styles.progressRow}>
          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${percentage * 100}%`,
                },
              ]}
            />
          </View>

          <Text style={styles.progressText}>
            {progress}/{quest.target}
          </Text>
        </View>

        <View style={styles.questBottom}>
          <Text style={styles.rewardText}>⭐ {quest.rewardXP} XP</Text>

          <Text style={styles.rewardText}>🪙 {quest.rewardCoins}</Text>

          {quest.completed && (
            <Text style={styles.completedText}>COMPLETED</Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </Pressable>

        <View>
          <Text style={styles.headerTitle}>QUEST BOARD</Text>

          <Text style={styles.headerSubtitle}>
            COMPLETE QUESTS • EARN REWARDS
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* =================================================
            DAILY QUESTS
            ================================================= */}

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>🎯 DAILY QUESTS</Text>

            <Text style={styles.sectionSubtitle}>New challenges every day</Text>
          </View>

          <Text style={styles.counter}>
            {completedDaily}/{dailyQuests.length}
          </Text>
        </View>

        {dailyQuests.map(renderQuest)}

        {/* =================================================
            SIDE QUESTS
            ================================================= */}

        <View style={[styles.sectionHeader, styles.sideHeader]}>
          <View>
            <Text style={styles.sectionTitle}>📜 SIDE QUESTS</Text>

            <Text style={styles.sectionSubtitle}>
              Long-term coding challenges
            </Text>
          </View>

          <Text style={styles.counter}>
            {completedSide}/{sideQuests.length}
          </Text>
        </View>

        {sideQuests.map(renderQuest)}

        {/* =================================================
            MOTIVATION
            ================================================= */}

        <View style={styles.motivationCard}>
          <Text style={styles.motivationIcon}>⚔️</Text>

          <View style={styles.motivationContent}>
            <Text style={styles.motivationTitle}>KEEP CODING!</Text>

            <Text style={styles.motivationDescription}>
              Every quest brings you closer to becoming a Master Coder.
            </Text>
          </View>
        </View>

        <Pressable
          style={styles.homeButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.homeButtonText}>← RETURN TO HOME</Text>
        </Pressable>
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

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#27272a",
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#18181b",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  backText: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "800",
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 1,
  },

  headerSubtitle: {
    color: "#71717a",
    fontSize: 10,
    fontWeight: "700",
    marginTop: 3,
    letterSpacing: 1,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  sideHeader: {
    marginTop: 30,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  sectionSubtitle: {
    color: "#71717a",
    fontSize: 12,
    marginTop: 4,
  },

  counter: {
    color: "#facc15",
    fontSize: 15,
    fontWeight: "900",
  },

  questCard: {
    backgroundColor: "#18181b",
    borderWidth: 1,
    borderColor: "#27272a",
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
  },

  completedCard: {
    borderColor: "#365314",
    backgroundColor: "#141a0f",
  },

  questTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  questIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#27272a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  iconText: {
    fontSize: 23,
  },

  questInfo: {
    flex: 1,
  },

  questTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  questDescription: {
    color: "#a1a1aa",
    fontSize: 12,
    marginTop: 4,
    lineHeight: 17,
  },

  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },

  progressBackground: {
    flex: 1,
    height: 7,
    borderRadius: 20,
    backgroundColor: "#27272a",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#facc15",
    borderRadius: 20,
  },

  progressText: {
    color: "#a1a1aa",
    fontSize: 11,
    fontWeight: "800",
    marginLeft: 10,
    minWidth: 28,
    textAlign: "right",
  },

  questBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },

  rewardText: {
    color: "#facc15",
    fontSize: 12,
    fontWeight: "800",
    marginRight: 14,
  },

  completedText: {
    color: "#84cc16",
    fontSize: 10,
    fontWeight: "900",
    marginLeft: "auto",
  },

  motivationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c1917",
    borderWidth: 1,
    borderColor: "#44403c",
    borderRadius: 18,
    padding: 18,
    marginTop: 25,
  },

  motivationIcon: {
    fontSize: 32,
    marginRight: 14,
  },

  motivationContent: {
    flex: 1,
  },

  motivationTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "900",
  },

  motivationDescription: {
    color: "#a8a29e",
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
  },

  homeButton: {
    backgroundColor: "#27272a",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
  },

  homeButtonText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
});
