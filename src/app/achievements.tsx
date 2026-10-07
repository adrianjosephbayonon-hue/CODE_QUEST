import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { usePlayer } from "../store/player";

type Achievement = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

const achievements: Achievement[] = [
  {
    id: "first_blood",
    icon: "⚔️",
    title: "FIRST BLOOD",
    description: "Defeat the Syntax Slime for the first time.",
  },
  {
    id: "logic_slayer",
    icon: "🌲",
    title: "LOGIC SLAYER",
    description: "Defeat the Logic Goblin.",
  },
  {
    id: "loop_master",
    icon: "🔄",
    title: "LOOP MASTER",
    description: "Defeat the Loop Dragon.",
  },
  {
    id: "function_master",
    icon: "🧙",
    title: "FUNCTION MASTER",
    description: "Defeat the Function Mage.",
  },
  {
    id: "codequest_beginner",
    icon: "👑",
    title: "CODEQUEST BEGINNER",
    description: "Unlock all four current coding areas.",
  },
];

export default function AchievementsScreen() {
  const { player } = usePlayer();

  const unlockedCount = player.achievements.length;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backButton}>‹ BACK</Text>
          </Pressable>

          <Text style={styles.headerTitle}>ACHIEVEMENTS</Text>

          <Text style={styles.count}>
            {unlockedCount}/{achievements.length}
          </Text>
        </View>

        {/* TITLE */}
        <View style={styles.titleSection}>
          <Text style={styles.trophy}>🏆</Text>

          <Text style={styles.title}>HERO'S JOURNAL</Text>

          <Text style={styles.subtitle}>
            Complete challenges and earn your place among the coding legends.
          </Text>
        </View>

        {/* PROGRESS */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>ACHIEVEMENT PROGRESS</Text>

            <Text style={styles.progressCount}>
              {unlockedCount} / {achievements.length}
            </Text>
          </View>

          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressBar,
                {
                  width: `${(unlockedCount / achievements.length) * 100}%`,
                },
              ]}
            />
          </View>
        </View>

        {/* ACHIEVEMENTS */}
        {achievements.map((achievement) => {
          const unlocked = player.achievements.includes(achievement.id);

          return (
            <View
              key={achievement.id}
              style={[
                styles.achievementCard,
                unlocked ? styles.unlockedCard : styles.lockedCard,
              ]}
            >
              <View
                style={[
                  styles.iconContainer,
                  unlocked ? styles.unlockedIcon : styles.lockedIcon,
                ]}
              >
                <Text style={styles.icon}>
                  {unlocked ? achievement.icon : "🔒"}
                </Text>
              </View>

              <View style={styles.info}>
                <Text
                  style={[
                    styles.achievementTitle,
                    !unlocked && styles.lockedTitle,
                  ]}
                >
                  {achievement.title}
                </Text>

                <Text
                  style={[
                    styles.description,
                    !unlocked && styles.lockedDescription,
                  ]}
                >
                  {achievement.description}
                </Text>

                <Text
                  style={[
                    styles.status,
                    unlocked ? styles.unlockedStatus : styles.lockedStatus,
                  ]}
                >
                  {unlocked ? "✓ UNLOCKED" : "🔒 LOCKED"}
                </Text>
              </View>
            </View>
          );
        })}

        {/* MOTIVATION */}
        <View style={styles.motivationCard}>
          <Text style={styles.motivationIcon}>⭐</Text>

          <Text style={styles.motivationTitle}>KEEP CODING</Text>

          <Text style={styles.motivationText}>
            Every battle you win brings you closer to becoming a CodeQuest
            legend.
          </Text>
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
    paddingBottom: 45,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  backButton: {
    color: "#94a3b8",
    fontSize: 14,
    fontWeight: "800",
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "900",
  },

  count: {
    color: "#facc15",
    fontSize: 13,
    fontWeight: "900",
  },

  titleSection: {
    alignItems: "center",
    marginBottom: 25,
  },

  trophy: {
    fontSize: 60,
    marginBottom: 8,
  },

  title: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 7,
    maxWidth: 320,
  },

  progressCard: {
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 16,
    padding: 17,
    marginBottom: 15,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  progressTitle: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "900",
  },

  progressCount: {
    color: "#facc15",
    fontSize: 12,
    fontWeight: "900",
  },

  progressBackground: {
    height: 9,
    backgroundColor: "#334155",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#facc15",
    borderRadius: 10,
  },

  achievementCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
  },

  unlockedCard: {
    backgroundColor: "#422006",
    borderColor: "#a16207",
  },

  lockedCard: {
    backgroundColor: "#111827",
    borderColor: "#1f2937",
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  unlockedIcon: {
    backgroundColor: "#713f12",
  },

  lockedIcon: {
    backgroundColor: "#1f2937",
  },

  icon: {
    fontSize: 30,
  },

  info: {
    flex: 1,
  },

  achievementTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 4,
  },

  lockedTitle: {
    color: "#64748b",
  },

  description: {
    color: "#fde68a",
    fontSize: 12,
    lineHeight: 18,
  },

  lockedDescription: {
    color: "#475569",
  },

  status: {
    fontSize: 10,
    fontWeight: "900",
    marginTop: 7,
  },

  unlockedStatus: {
    color: "#facc15",
  },

  lockedStatus: {
    color: "#475569",
  },

  motivationCard: {
    alignItems: "center",
    backgroundColor: "#172554",
    borderWidth: 1,
    borderColor: "#1d4ed8",
    borderRadius: 18,
    padding: 20,
    marginTop: 8,
  },

  motivationIcon: {
    fontSize: 28,
    marginBottom: 6,
  },

  motivationTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "900",
  },

  motivationText: {
    color: "#93c5fd",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    marginTop: 6,
  },
});
