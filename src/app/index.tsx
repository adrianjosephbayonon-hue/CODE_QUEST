import { router } from "expo-router";

import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { usePlayer } from "../store/player";

export default function ShopScreen() {
  const { player } = usePlayer();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backText}>‹ BACK</Text>
          </Pressable>

          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>CODE SHOP</Text>

            <Text style={styles.headerSubtitle}>Gear up, Code Quester.</Text>
          </View>

          <View style={styles.coinContainer}>
            <Text style={styles.coinIcon}>🪙</Text>

            <Text style={styles.coinText}>{player.coins}</Text>
          </View>
        </View>

        {/* SHOP BANNER */}

        <View style={styles.banner}>
          <Text style={styles.bannerIcon}>🛒</Text>

          <View style={styles.bannerInfo}>
            <Text style={styles.bannerTitle}>CODING GEAR</Text>

            <Text style={styles.bannerDescription}>
              Spend your hard-earned coins on useful items and special gear.
            </Text>
          </View>
        </View>

        {/* SHOP SECTION */}

        <Text style={styles.sectionTitle}>ITEMS</Text>

        {/* XP POTION */}

        <View style={styles.itemCard}>
          <View style={styles.itemIconContainer}>
            <Text style={styles.itemIcon}>🧪</Text>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>XP POTION</Text>

            <Text style={styles.itemDescription}>
              A magical coding potion that grants bonus experience.
            </Text>

            <Text style={styles.itemEffect}>⭐ +25 XP</Text>
          </View>

          <Pressable style={styles.buyButton} onPress={() => {}}>
            <Text style={styles.buyPrice}>🪙 50</Text>

            <Text style={styles.buyText}>BUY</Text>
          </Pressable>
        </View>

        {/* XP ELIXIR */}

        <View style={styles.itemCard}>
          <View style={[styles.itemIconContainer, styles.purpleIcon]}>
            <Text style={styles.itemIcon}>🔮</Text>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>XP ELIXIR</Text>

            <Text style={styles.itemDescription}>
              A powerful elixir containing advanced programming knowledge.
            </Text>

            <Text style={styles.itemEffect}>⭐ +60 XP</Text>
          </View>

          <Pressable style={styles.buyButton} onPress={() => {}}>
            <Text style={styles.buyPrice}>🪙 100</Text>

            <Text style={styles.buyText}>BUY</Text>
          </Pressable>
        </View>

        {/* DEBUGGER BADGE */}

        <View style={styles.itemCard}>
          <View style={[styles.itemIconContainer, styles.blueIcon]}>
            <Text style={styles.itemIcon}>🛡️</Text>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>DEBUGGER BADGE</Text>

            <Text style={styles.itemDescription}>
              A badge proving that you have mastered the art of debugging.
            </Text>

            <Text style={styles.itemEffect}>🏅 SPECIAL ITEM</Text>
          </View>

          <Pressable style={styles.buyButton} onPress={() => {}}>
            <Text style={styles.buyPrice}>🪙 100</Text>

            <Text style={styles.buyText}>BUY</Text>
          </Pressable>
        </View>

        {/* GOLDEN SWORD */}

        <View style={styles.itemCard}>
          <View style={[styles.itemIconContainer, styles.goldIcon]}>
            <Text style={styles.itemIcon}>⚔️</Text>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>GOLDEN SYNTAX SWORD</Text>

            <Text style={styles.itemDescription}>
              A legendary weapon forged from perfect Java syntax.
            </Text>

            <Text style={styles.itemEffect}>⚔️ LEGENDARY GEAR</Text>
          </View>

          <Pressable style={styles.buyButton} onPress={() => {}}>
            <Text style={styles.buyPrice}>🪙 150</Text>

            <Text style={styles.buyText}>BUY</Text>
          </Pressable>
        </View>

        {/* CODER CROWN */}

        <View style={styles.itemCard}>
          <View style={[styles.itemIconContainer, styles.crownIcon]}>
            <Text style={styles.itemIcon}>👑</Text>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>MASTER CODER CROWN</Text>

            <Text style={styles.itemDescription}>
              The ultimate symbol of programming mastery.
            </Text>

            <Text style={styles.itemEffect}>👑 MYTHIC ITEM</Text>
          </View>

          <Pressable style={styles.buyButton} onPress={() => {}}>
            <Text style={styles.buyPrice}>🪙 250</Text>

            <Text style={styles.buyText}>BUY</Text>
          </Pressable>
        </View>

        {/* FUTURE CONTENT */}

        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonIcon}>🔒</Text>

          <Text style={styles.comingSoonTitle}>MORE ITEMS COMING</Text>

          <Text style={styles.comingSoonText}>
            Complete more coding areas and defeat stronger bosses to discover
            new shop items.
          </Text>
        </View>

        {/* BACK HOME */}

        <Pressable style={styles.homeButton} onPress={() => router.push("/")}>
          <Text style={styles.homeButtonText}>🏠 RETURN HOME</Text>
        </Pressable>
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
    paddingBottom: 50,
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  backButton: {
    width: 70,
  },

  backText: {
    color: "#60a5fa",
    fontSize: 12,
    fontWeight: "900",
  },

  headerCenter: {
    flex: 1,
    alignItems: "center",
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 1,
  },

  headerSubtitle: {
    color: "#64748b",
    fontSize: 9,
    marginTop: 3,
  },

  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 7,
    minWidth: 65,
    justifyContent: "center",
  },

  coinIcon: {
    fontSize: 15,
    marginRight: 4,
  },

  coinText: {
    color: "#facc15",
    fontSize: 13,
    fontWeight: "900",
  },

  /* BANNER */

  banner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#422006",
    borderWidth: 1,
    borderColor: "#a16207",
    borderRadius: 18,
    padding: 18,
    marginBottom: 25,
  },

  bannerIcon: {
    fontSize: 38,
    marginRight: 15,
  },

  bannerInfo: {
    flex: 1,
  },

  bannerTitle: {
    color: "#facc15",
    fontSize: 16,
    fontWeight: "900",
  },

  bannerDescription: {
    color: "#fde68a",
    fontSize: 11,
    lineHeight: 17,
    marginTop: 5,
  },

  /* SECTION */

  sectionTitle: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "900",
    marginBottom: 12,
  },

  /* ITEM */

  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
  },

  itemIconContainer: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: "#422006",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  purpleIcon: {
    backgroundColor: "#3b0764",
  },

  blueIcon: {
    backgroundColor: "#172554",
  },

  goldIcon: {
    backgroundColor: "#713f12",
  },

  crownIcon: {
    backgroundColor: "#312e81",
  },

  itemIcon: {
    fontSize: 27,
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "900",
  },

  itemDescription: {
    color: "#94a3b8",
    fontSize: 10,
    lineHeight: 15,
    marginTop: 4,
  },

  itemEffect: {
    color: "#60a5fa",
    fontSize: 10,
    fontWeight: "900",
    marginTop: 5,
  },

  /* BUY BUTTON */

  buyButton: {
    backgroundColor: "#2563eb",
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 8,
    alignItems: "center",
    marginLeft: 8,
  },

  buyPrice: {
    color: "#facc15",
    fontSize: 9,
    fontWeight: "900",
  },

  buyText: {
    color: "#ffffff",
    fontSize: 9,
    fontWeight: "900",
    marginTop: 3,
  },

  /* COMING SOON */

  comingSoon: {
    alignItems: "center",
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 18,
    padding: 25,
    marginTop: 10,
  },

  comingSoonIcon: {
    fontSize: 28,
    marginBottom: 8,
  },

  comingSoonTitle: {
    color: "#64748b",
    fontSize: 12,
    fontWeight: "900",
  },

  comingSoonText: {
    color: "#475569",
    fontSize: 10,
    textAlign: "center",
    lineHeight: 16,
    marginTop: 6,
  },

  /* HOME */

  homeButton: {
    backgroundColor: "#172554",
    borderWidth: 1,
    borderColor: "#1d4ed8",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 15,
  },

  homeButtonText: {
    color: "#60a5fa",
    fontSize: 12,
    fontWeight: "900",
  },
});
