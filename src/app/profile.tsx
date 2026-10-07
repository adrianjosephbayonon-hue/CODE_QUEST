import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { usePlayer } from "../store/player";

export default function ProfileScreen() {
  const { player } = usePlayer();

  const xpIntoLevel = player.xp % 100;

  const achievementCount = player.achievements.length;

  const totalAchievements = 5;

  const unlockedAreas = [
    true,
    player.conditionForestUnlocked,
    player.loopLandsUnlocked,
    player.functionKingdomUnlocked,
  ].filter(Boolean).length;

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

          <Text style={styles.headerTitle}>CHARACTER</Text>

          <View style={styles.headerSpacer} />
        </View>

        {/* CHARACTER */}
        <View style={styles.characterCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>🧑‍💻</Text>
          </View>

          <Text style={styles.characterName}>CODE QUESTER</Text>

          <Text style={styles.characterTitle}>JAVA ADVENTURER</Text>

          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>LEVEL {player.level}</Text>
          </View>
        </View>

        {/* XP */}
        <View style={styles.xpCard}>
          <View style={styles.xpHeader}>
            <Text style={styles.xpTitle}>EXPERIENCE</Text>

            <Text style={styles.xpValue}>{xpIntoLevel} / 100 XP</Text>
          </View>

          <View style={styles.xpBackground}>
            <View
              style={[
                styles.xpBar,
                {
                  width: `${xpIntoLevel}%`,
                },
              ]}
            />
          </View>

          <Text style={styles.totalXP}>Total XP: {player.xp}</Text>
        </View>

        {/* STATS */}
        <Text style={styles.sectionTitle}>PLAYER STATS</Text>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>⭐</Text>

            <Text style={styles.statValue}>{player.level}</Text>

            <Text style={styles.statLabel}>LEVEL</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>🪙</Text>

            <Text style={styles.statValue}>{player.coins}</Text>

            <Text style={styles.statLabel}>COINS</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>🏆</Text>

            <Text style={styles.statValue}>{achievementCount}</Text>

            <Text style={styles.statLabel}>ACHIEVEMENTS</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>🗺️</Text>

            <Text style={styles.statValue}>{unlockedAreas}</Text>

            <Text style={styles.statLabel}>AREAS</Text>
          </View>
        </View>

        {/* ACHIEVEMENTS */}
        <Text style={styles.sectionTitle}>ACHIEVEMENTS</Text>

        <Pressable
          style={styles.achievementCard}
          onPress={() => router.push("/achievements")}
        >
          <View style={styles.achievementIcon}>
            <Text style={styles.achievementEmoji}>🏆</Text>
          </View>

          <View style={styles.achievementInfo}>
            <Text style={styles.achievementTitle}>HERO'S JOURNAL</Text>

            <Text style={styles.achievementDescription}>
              {achievementCount} of {totalAchievements} achievements unlocked.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        {/* WORLDS */}
        <Text style={styles.sectionTitle}>CODING REALM</Text>

        <View style={styles.worldCard}>
          <WorldRow icon="🏘️" name="Beginner Village" unlocked={true} />

          <WorldRow
            icon="🌲"
            name="Condition Forest"
            unlocked={player.conditionForestUnlocked}
          />

          <WorldRow
            icon="🔄"
            name="Loop Lands"
            unlocked={player.loopLandsUnlocked}
          />

          <WorldRow
            icon="🏰"
            name="Function Kingdom"
            unlocked={player.functionKingdomUnlocked}
          />
        </View>

        {/* HOME BUTTON */}
        <Pressable style={styles.homeButton} onPress={() => router.push("/")}>
          <Text style={styles.homeButtonText}>🏠 RETURN HOME</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

/*
 * WORLD ROW
 */
function WorldRow({
  icon,
  name,
  unlocked,
}: {
  icon: string;
  name: string;
  unlocked: boolean;
}) {
  return (
    <View style={styles.worldRow}>
      <View
        style={[
          styles.worldIcon,
          unlocked ? styles.worldUnlocked : styles.worldLocked,
        ]}
      >
        <Text style={styles.worldEmoji}>{unlocked ? icon : "🔒"}</Text>
      </View>

      <Text style={[styles.worldName, !unlocked && styles.worldNameLocked]}>
        {name}
      </Text>

      <Text
        style={[
          styles.worldStatus,
          unlocked ? styles.statusUnlocked : styles.statusLocked,
        ]}
      >
        {unlocked ? "UNLOCKED" : "LOCKED"}
      </Text>
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
    marginBottom: 22,
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

  headerSpacer: {
    width: 45,
  },

  characterCard: {
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 22,
    padding: 25,
    alignItems: "center",
    marginBottom: 15,
  },

  avatarContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#172554",
    borderWidth: 3,
    borderColor: "#facc15",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  avatar: {
    fontSize: 58,
  },

  characterName: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "900",
  },

  characterTitle: {
    color: "#60a5fa",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
    marginTop: 5,
  },

  levelBadge: {
    backgroundColor: "#713f12",
    borderWidth: 1,
    borderColor: "#a16207",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginTop: 14,
  },

  levelText: {
    color: "#facc15",
    fontSize: 11,
    fontWeight: "900",
  },

  xpCard: {
    backgroundColor: "#172554",
    borderWidth: 1,
    borderColor: "#1d4ed8",
    borderRadius: 18,
    padding: 17,
    marginBottom: 25,
  },

  xpHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  xpTitle: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "900",
  },

  xpValue: {
    color: "#60a5fa",
    fontSize: 12,
    fontWeight: "900",
  },

  xpBackground: {
    height: 10,
    backgroundColor: "#1e3a8a",
    borderRadius: 10,
    overflow: "hidden",
  },

  xpBar: {
    height: "100%",
    backgroundColor: "#60a5fa",
    borderRadius: 10,
  },

  totalXP: {
    color: "#93c5fd",
    fontSize: 11,
    marginTop: 9,
  },

  sectionTitle: {
    color: "#94a3b8",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: 10,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginBottom: 10,
  },

  statIcon: {
    fontSize: 25,
    marginBottom: 5,
  },

  statValue: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "900",
  },

  statLabel: {
    color: "#64748b",
    fontSize: 9,
    fontWeight: "900",
    marginTop: 3,
  },

  achievementCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#422006",
    borderWidth: 1,
    borderColor: "#a16207",
    borderRadius: 18,
    padding: 15,
    marginBottom: 25,
  },

  achievementIcon: {
    width: 52,
    height: 52,
    borderRadius: 15,
    backgroundColor: "#713f12",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  achievementEmoji: {
    fontSize: 27,
  },

  achievementInfo: {
    flex: 1,
  },

  achievementTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "900",
  },

  achievementDescription: {
    color: "#fde68a",
    fontSize: 11,
    marginTop: 4,
  },

  arrow: {
    color: "#facc15",
    fontSize: 30,
    fontWeight: "300",
  },

  worldCard: {
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 18,
    padding: 8,
    marginBottom: 25,
  },

  worldRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 11,
  },

  worldIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  worldUnlocked: {
    backgroundColor: "#172554",
  },

  worldLocked: {
    backgroundColor: "#111827",
  },

  worldEmoji: {
    fontSize: 22,
  },

  worldName: {
    flex: 1,
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "800",
  },

  worldNameLocked: {
    color: "#475569",
  },

  worldStatus: {
    fontSize: 8,
    fontWeight: "900",
  },

  statusUnlocked: {
    color: "#4ade80",
  },

  statusLocked: {
    color: "#475569",
  },

  homeButton: {
    backgroundColor: "#2563eb",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },

  homeButtonText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
  },
});
