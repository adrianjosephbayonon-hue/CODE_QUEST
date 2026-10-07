import { router } from "expo-router";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function WorldScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backButton}>‹</Text>
          </Pressable>

          <View>
            <Text style={styles.title}>WORLD MAP</Text>

            <Text style={styles.subtitle}>Your programming adventure</Text>
          </View>

          <View style={styles.headerSpacer} />
        </View>

        {/* WORLD INTRO */}
        <View style={styles.introCard}>
          <Text style={styles.mapEmoji}>🗺️</Text>

          <View style={styles.introText}>
            <Text style={styles.introTitle}>The Coding Realm</Text>

            <Text style={styles.introDescription}>
              Explore different regions and master programming concepts to
              unlock new areas.
            </Text>
          </View>
        </View>

        {/* AVAILABLE AREA */}
        <Text style={styles.sectionTitle}>AVAILABLE AREA</Text>

        <Pressable
          style={styles.areaCard}
          onPress={() => router.push("/village")}
        >
          <View style={styles.areaIcon}>
            <Text style={styles.areaEmoji}>🏘️</Text>
          </View>

          <View style={styles.areaInfo}>
            <Text style={styles.areaTitle}>Beginner Village</Text>

            <Text style={styles.areaDescription}>
              Learn the foundations of programming.
            </Text>

            <View style={styles.progressContainer}>
              <View style={styles.progressBackground}>
                <View style={styles.progress} />
              </View>

              <Text style={styles.progressText}>0%</Text>
            </View>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        {/* LOCKED AREAS */}
        <Text style={styles.sectionTitle}>LOCKED AREAS</Text>

        <View style={styles.lockedCard}>
          <Text style={styles.lockedEmoji}>🌲</Text>

          <View style={styles.lockedInfo}>
            <Text style={styles.lockedTitle}>Condition Forest</Text>

            <Text style={styles.lockedDescription}>Master Variables first</Text>
          </View>

          <Text style={styles.lock}>🔒</Text>
        </View>

        <View style={styles.lockedCard}>
          <Text style={styles.lockedEmoji}>🌳</Text>

          <View style={styles.lockedInfo}>
            <Text style={styles.lockedTitle}>Loop Lands</Text>

            <Text style={styles.lockedDescription}>
              Master Conditions first
            </Text>
          </View>

          <Text style={styles.lock}>🔒</Text>
        </View>

        <View style={styles.lockedCard}>
          <Text style={styles.lockedEmoji}>🏰</Text>

          <View style={styles.lockedInfo}>
            <Text style={styles.lockedTitle}>Function Kingdom</Text>

            <Text style={styles.lockedDescription}>Master Loops first</Text>
          </View>

          <Text style={styles.lock}>🔒</Text>
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
    fontSize: 23,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 1,
  },

  subtitle: {
    color: "#8f96aa",
    fontSize: 11,
    textAlign: "center",
    marginTop: 3,
  },

  introCard: {
    backgroundColor: "#1b2030",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#292f43",
  },

  mapEmoji: {
    fontSize: 48,
    marginRight: 15,
  },

  introText: {
    flex: 1,
  },

  introTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "800",
  },

  introDescription: {
    color: "#8f96aa",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  sectionTitle: {
    color: "#777f96",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginTop: 25,
    marginBottom: 10,
  },

  areaCard: {
    backgroundColor: "#1b2030",
    borderRadius: 18,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#51457f",
  },

  areaIcon: {
    width: 65,
    height: 65,
    borderRadius: 16,
    backgroundColor: "#292f43",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  areaEmoji: {
    fontSize: 38,
  },

  areaInfo: {
    flex: 1,
  },

  areaTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },

  areaDescription: {
    color: "#8f96aa",
    fontSize: 11,
    marginTop: 4,
  },

  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  progressBackground: {
    flex: 1,
    height: 7,
    backgroundColor: "#30364a",
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 8,
  },

  progress: {
    width: "0%",
    height: "100%",
    backgroundColor: "#7c5cff",
    borderRadius: 10,
  },

  progressText: {
    color: "#8f96aa",
    fontSize: 10,
    fontWeight: "700",
  },

  arrow: {
    color: "#7c5cff",
    fontSize: 30,
    marginLeft: 10,
  },

  lockedCard: {
    backgroundColor: "#171b28",
    borderRadius: 16,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    opacity: 0.65,
  },

  lockedEmoji: {
    fontSize: 32,
    width: 55,
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

  lock: {
    fontSize: 18,
  },
});
