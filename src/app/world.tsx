import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { usePlayer } from "../store/player";

export default function WorldScreen() {
  const { player } = usePlayer();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backButton}>‹ BACK</Text>
          </Pressable>

          <Text style={styles.headerTitle}>WORLD</Text>

          <Text style={styles.levelText}>LV. {player.level}</Text>
        </View>

        {/* TITLE */}
        <View style={styles.titleSection}>
          <Text style={styles.worldIcon}>🌎</Text>

          <Text style={styles.title}>THE CODING REALM</Text>

          <Text style={styles.subtitle}>Explore. Learn. Battle. Level up.</Text>
        </View>

        {/* PLAYER PROGRESS */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>WORLD PROGRESS</Text>

            <Text style={styles.progressText}>
              {player.functionKingdomUnlocked
                ? "4 / 4 AREAS UNLOCKED"
                : player.loopLandsUnlocked
                  ? "3 / 4 AREAS UNLOCKED"
                  : player.conditionForestUnlocked
                    ? "2 / 4 AREAS UNLOCKED"
                    : "1 / 4 AREAS UNLOCKED"}
            </Text>
          </View>

          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressBar,
                {
                  width: player.functionKingdomUnlocked
                    ? "100%"
                    : player.loopLandsUnlocked
                      ? "75%"
                      : player.conditionForestUnlocked
                        ? "50%"
                        : "25%",
                },
              ]}
            />
          </View>

          <Text style={styles.xpText}>⭐ {player.xp} XP</Text>
        </View>

        {/* AREA 1 — BEGINNER VILLAGE */}
        <Pressable
          style={[styles.areaCard, styles.villageCard]}
          onPress={() => router.push("/village")}
        >
          <View style={styles.areaIconContainer}>
            <Text style={styles.areaIcon}>🏠</Text>
          </View>

          <View style={styles.areaInfo}>
            <Text style={styles.areaTitle}>BEGINNER VILLAGE</Text>

            <Text style={styles.unlockedText}>UNLOCKED</Text>

            <Text style={styles.areaDescription}>
              Learn the foundations of programming.
            </Text>

            <Text style={styles.areaLevel}>LEVEL 1</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        {/* AREA 2 — CONDITION FOREST */}
        <Pressable
          style={[
            styles.areaCard,
            player.conditionForestUnlocked
              ? styles.forestUnlocked
              : styles.lockedCard,
          ]}
          onPress={() => {
            if (player.conditionForestUnlocked) {
              router.push("/conditions");
            }
          }}
          disabled={!player.conditionForestUnlocked}
        >
          <View style={styles.areaIconContainer}>
            <Text style={styles.areaIcon}>
              {player.conditionForestUnlocked ? "🌲" : "🔒"}
            </Text>
          </View>

          <View style={styles.areaInfo}>
            <Text style={styles.areaTitle}>CONDITION FOREST</Text>

            {player.conditionForestUnlocked ? (
              <>
                <Text style={styles.unlockedText}>UNLOCKED</Text>

                <Text style={styles.areaDescription}>
                  Learn how programs make decisions.
                </Text>

                <Text style={styles.areaLevel}>LEVEL 2</Text>
              </>
            ) : (
              <Text style={styles.lockedText}>
                Defeat the Syntax Slime to unlock this area.
              </Text>
            )}
          </View>

          {player.conditionForestUnlocked && (
            <Text style={styles.arrow}>›</Text>
          )}
        </Pressable>

        {/* AREA 3 — LOOP LANDS */}
        <Pressable
          style={[
            styles.areaCard,
            player.loopLandsUnlocked ? styles.loopUnlocked : styles.lockedCard,
          ]}
          onPress={() => {
            if (player.loopLandsUnlocked) {
              router.push("/loops");
            }
          }}
          disabled={!player.loopLandsUnlocked}
        >
          <View style={styles.areaIconContainer}>
            <Text style={styles.areaIcon}>
              {player.loopLandsUnlocked ? "🔄" : "🔒"}
            </Text>
          </View>

          <View style={styles.areaInfo}>
            <Text style={styles.areaTitle}>LOOP LANDS</Text>

            {player.loopLandsUnlocked ? (
              <>
                <Text style={styles.unlockedText}>UNLOCKED</Text>

                <Text style={styles.areaDescription}>
                  Learn how to repeat actions with code.
                </Text>

                <Text style={styles.areaLevel}>LEVEL 2</Text>
              </>
            ) : (
              <Text style={styles.lockedText}>
                Defeat the Logic Goblin to unlock this area.
              </Text>
            )}
          </View>

          {player.loopLandsUnlocked && <Text style={styles.arrow}>›</Text>}
        </Pressable>

        {/* AREA 4 — FUNCTION KINGDOM */}
        <Pressable
          style={[
            styles.areaCard,
            player.functionKingdomUnlocked
              ? styles.functionUnlocked
              : styles.lockedCard,
          ]}
          onPress={() => {
            if (player.functionKingdomUnlocked) {
              router.push("/functions");
            }
          }}
          disabled={!player.functionKingdomUnlocked}
        >
          <View style={styles.areaIconContainer}>
            <Text style={styles.areaIcon}>
              {player.functionKingdomUnlocked ? "🏰" : "🔒"}
            </Text>
          </View>

          <View style={styles.areaInfo}>
            <Text style={styles.areaTitle}>FUNCTION KINGDOM</Text>

            {player.functionKingdomUnlocked ? (
              <>
                <Text style={styles.unlockedText}>UNLOCKED</Text>

                <Text style={styles.areaDescription}>
                  Learn how to create reusable abilities.
                </Text>

                <Text style={styles.areaLevel}>LEVEL 3</Text>
              </>
            ) : (
              <Text style={styles.lockedText}>
                Defeat the Loop Dragon to unlock this area.
              </Text>
            )}
          </View>

          {player.functionKingdomUnlocked && (
            <Text style={styles.arrow}>›</Text>
          )}
        </Pressable>

        {/* FUTURE AREA */}
        <View style={styles.futureCard}>
          <Text style={styles.futureIcon}>⚔️</Text>

          <View style={styles.futureInfo}>
            <Text style={styles.futureTitle}>MORE AREAS COMING</Text>

            <Text style={styles.futureText}>
              OOP Kingdom and advanced coding challenges await you.
            </Text>
          </View>
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

  /* HEADER */

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
    fontSize: 18,
    fontWeight: "900",
  },

  levelText: {
    color: "#38bdf8",
    fontSize: 14,
    fontWeight: "900",
  },

  /* TITLE */

  titleSection: {
    alignItems: "center",
    marginBottom: 25,
  },

  worldIcon: {
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

  /* PROGRESS */

  progressCard: {
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  progressTitle: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
  },

  progressText: {
    color: "#38bdf8",
    fontSize: 11,
    fontWeight: "800",
  },

  progressBackground: {
    width: "100%",
    height: 10,
    backgroundColor: "#334155",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#2563eb",
    borderRadius: 10,
  },

  xpText: {
    color: "#facc15",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 9,
  },

  /* AREA CARDS */

  areaCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    padding: 17,
    marginBottom: 14,
    borderWidth: 1,
  },

  areaIconContainer: {
    width: 58,
    height: 58,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  areaIcon: {
    fontSize: 30,
  },

  areaInfo: {
    flex: 1,
  },

  areaTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 4,
  },

  unlockedText: {
    color: "#4ade80",
    fontSize: 11,
    fontWeight: "900",
    marginBottom: 5,
  },

  areaDescription: {
    color: "#cbd5e1",
    fontSize: 13,
    lineHeight: 19,
  },

  areaLevel: {
    color: "#facc15",
    fontSize: 11,
    fontWeight: "800",
    marginTop: 7,
  },

  lockedText: {
    color: "#64748b",
    fontSize: 13,
    lineHeight: 19,
  },

  arrow: {
    color: "#94a3b8",
    fontSize: 30,
    fontWeight: "300",
    marginLeft: 8,
  },

  /* BEGINNER VILLAGE */

  villageCard: {
    backgroundColor: "#172554",
    borderColor: "#2563eb",
  },

  /* CONDITION FOREST */

  forestUnlocked: {
    backgroundColor: "#052e16",
    borderColor: "#166534",
  },

  /* LOOP LANDS */

  loopUnlocked: {
    backgroundColor: "#2e1065",
    borderColor: "#6d28d9",
  },

  /* FUNCTION KINGDOM */

  functionUnlocked: {
    backgroundColor: "#3b0764",
    borderColor: "#9333ea",
  },

  /* LOCKED */

  lockedCard: {
    backgroundColor: "#111827",
    borderColor: "#1f2937",
    opacity: 0.75,
  },

  /* FUTURE */

  futureCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1f2937",
    borderStyle: "dashed",
    borderRadius: 18,
    padding: 17,
    marginTop: 5,
  },

  futureIcon: {
    fontSize: 30,
    marginRight: 14,
  },

  futureInfo: {
    flex: 1,
  },

  futureTitle: {
    color: "#64748b",
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 5,
  },

  futureText: {
    color: "#475569",
    fontSize: 13,
    lineHeight: 19,
  },
});
