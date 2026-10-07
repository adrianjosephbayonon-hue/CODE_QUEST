import { router } from "expo-router";

import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { usePlayer } from "../store/player";

/* ============================================================
   SHOP ITEMS
   ============================================================ */

const SHOP_ITEMS = [
  {
    id: "xp_potion",
    name: "XP POTION",
    icon: "🧪",
    description: "A magical coding potion that grants bonus experience.",
    effect: "⭐ +25 XP",
    price: 50,
    type: "xp",
    xp: 25,
    background: "#422006",
  },

  {
    id: "xp_elixir",
    name: "XP ELIXIR",
    icon: "🔮",
    description: "A powerful elixir containing advanced programming knowledge.",
    effect: "⭐ +60 XP",
    price: 100,
    type: "xp",
    xp: 60,
    background: "#3b0764",
  },

  {
    id: "debugger_badge",
    name: "DEBUGGER BADGE",
    icon: "🛡️",
    description: "A badge proving that you have mastered the art of debugging.",
    effect: "🏅 SPECIAL ITEM",
    price: 100,
    type: "item",
    xp: 0,
    background: "#172554",
  },

  {
    id: "golden_syntax_sword",
    name: "GOLDEN SYNTAX SWORD",
    icon: "⚔️",
    description: "A legendary weapon forged from perfect Java syntax.",
    effect: "⚔️ LEGENDARY GEAR",
    price: 150,
    type: "item",
    xp: 0,
    background: "#713f12",
  },

  {
    id: "master_coder_crown",
    name: "MASTER CODER CROWN",
    icon: "👑",
    description: "The ultimate symbol of programming mastery.",
    effect: "👑 MYTHIC ITEM",
    price: 250,
    type: "item",
    xp: 0,
    background: "#312e81",
  },
];

/* ============================================================
   SHOP SCREEN
   ============================================================ */

export default function ShopScreen() {
  const { player, addRewards, spendCoins, addItem, hasItem } = usePlayer();

  /* ==========================================================
     BUY ITEM
     ========================================================== */

  const handleBuy = (item: (typeof SHOP_ITEMS)[number]) => {
    /* --------------------------------------------------------
       Permanent item already owned
       -------------------------------------------------------- */

    if (item.type === "item" && hasItem(item.id)) {
      Alert.alert("Already Owned", `You already own the ${item.name}.`);

      return;
    }

    /* --------------------------------------------------------
       Check coins
       -------------------------------------------------------- */

    if (player.coins < item.price) {
      Alert.alert(
        "Not Enough Coins",
        `You need ${item.price} coins to buy this item.\n\nYou currently have ${player.coins} coins.`,
      );

      return;
    }

    /* --------------------------------------------------------
       Spend coins
       -------------------------------------------------------- */

    const purchaseSuccessful = spendCoins(item.price);

    if (!purchaseSuccessful) {
      Alert.alert("Purchase Failed", "You do not have enough coins.");

      return;
    }

    /* --------------------------------------------------------
       XP ITEM
       -------------------------------------------------------- */

    if (item.type === "xp") {
      addRewards(item.xp, 0);

      Alert.alert(
        "Purchase Complete! 🎉",
        `${item.name} purchased!\n\n⭐ +${item.xp} XP\n🪙 -${item.price} Coins`,
      );

      return;
    }

    /* --------------------------------------------------------
       PERMANENT ITEM
       -------------------------------------------------------- */

    addItem(item.id);

    Alert.alert(
      "Purchase Complete! 🎉",
      `${item.name} added to your inventory!\n\n🪙 -${item.price} Coins`,
    );
  };

  /* ==========================================================
     SCREEN
     ========================================================== */

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

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

        {/* ================================================== */}
        {/* BANNER */}
        {/* ================================================== */}

        <View style={styles.banner}>
          <Text style={styles.bannerIcon}>🛒</Text>

          <View style={styles.bannerInfo}>
            <Text style={styles.bannerTitle}>CODING GEAR</Text>

            <Text style={styles.bannerDescription}>
              Spend your hard-earned coins on useful items and special gear.
            </Text>
          </View>
        </View>

        {/* ================================================== */}
        {/* INVENTORY SUMMARY */}
        {/* ================================================== */}

        <View style={styles.inventoryCard}>
          <View>
            <Text style={styles.inventoryTitle}>YOUR INVENTORY</Text>

            <Text style={styles.inventoryCount}>
              {player.inventory.length} special item
              {player.inventory.length === 1 ? "" : "s"} owned
            </Text>
          </View>

          <Text style={styles.inventoryIcon}>🎒</Text>
        </View>

        {/* ================================================== */}
        {/* ITEMS */}
        {/* ================================================== */}

        <Text style={styles.sectionTitle}>ITEMS</Text>

        {SHOP_ITEMS.map((item) => {
          const owned = item.type === "item" && hasItem(item.id);

          return (
            <View key={item.id} style={styles.itemCard}>
              {/* ITEM ICON */}

              <View
                style={[
                  styles.itemIconContainer,
                  {
                    backgroundColor: item.background,
                  },
                ]}
              >
                <Text style={styles.itemIcon}>{item.icon}</Text>
              </View>

              {/* ITEM INFORMATION */}

              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>

                <Text style={styles.itemDescription}>{item.description}</Text>

                <Text style={styles.itemEffect}>{item.effect}</Text>
              </View>

              {/* BUY BUTTON */}

              {owned ? (
                <View style={styles.ownedButton}>
                  <Text style={styles.ownedText}>✓ OWNED</Text>
                </View>
              ) : (
                <Pressable
                  style={[
                    styles.buyButton,
                    player.coins < item.price && styles.disabledButton,
                  ]}
                  onPress={() => handleBuy(item)}
                >
                  <Text style={styles.buyPrice}>🪙 {item.price}</Text>

                  <Text style={styles.buyText}>BUY</Text>
                </Pressable>
              )}
            </View>
          );
        })}

        {/* ================================================== */}
        {/* SHOP INFORMATION */}
        {/* ================================================== */}

        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>💡</Text>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>HOW TO EARN COINS</Text>

            <Text style={styles.infoText}>
              • Complete daily quests{"\n"}• Defeat coding enemies{"\n"}• Defeat
              powerful bosses{"\n"}• Explore new coding areas
            </Text>
          </View>
        </View>

        {/* ================================================== */}
        {/* COMING SOON */}
        {/* ================================================== */}

        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonIcon}>🔒</Text>

          <Text style={styles.comingSoonTitle}>MORE ITEMS COMING</Text>

          <Text style={styles.comingSoonText}>
            Complete more coding areas and defeat stronger bosses to discover
            new shop items.
          </Text>
        </View>

        {/* ================================================== */}
        {/* HOME */}
        {/* ================================================== */}

        <Pressable style={styles.homeButton} onPress={() => router.push("/")}>
          <Text style={styles.homeButtonText}>🏠 RETURN HOME</Text>
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
    backgroundColor: "#0f172a",
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  /* ==========================================================
     HEADER
     ========================================================== */

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

  /* ==========================================================
     BANNER
     ========================================================== */

  banner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#422006",
    borderWidth: 1,
    borderColor: "#a16207",
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
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

  /* ==========================================================
     INVENTORY
     ========================================================== */

  inventoryCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
  },

  inventoryTitle: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "900",
  },

  inventoryCount: {
    color: "#64748b",
    fontSize: 10,
    marginTop: 4,
  },

  inventoryIcon: {
    fontSize: 25,
  },

  /* ==========================================================
     SECTION
     ========================================================== */

  sectionTitle: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "900",
    marginBottom: 12,
  },

  /* ==========================================================
     ITEM CARD
     ========================================================== */

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
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
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

  /* ==========================================================
     BUY
     ========================================================== */

  buyButton: {
    backgroundColor: "#2563eb",
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 8,
    alignItems: "center",
    marginLeft: 8,
  },

  disabledButton: {
    backgroundColor: "#334155",
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

  /* ==========================================================
     OWNED
     ========================================================== */

  ownedButton: {
    backgroundColor: "#166534",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginLeft: 8,
  },

  ownedText: {
    color: "#bbf7d0",
    fontSize: 9,
    fontWeight: "900",
  },

  /* ==========================================================
     INFORMATION
     ========================================================== */

  infoCard: {
    flexDirection: "row",
    backgroundColor: "#172554",
    borderWidth: 1,
    borderColor: "#1d4ed8",
    borderRadius: 16,
    padding: 16,
    marginTop: 10,
  },

  infoIcon: {
    fontSize: 24,
    marginRight: 12,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    color: "#60a5fa",
    fontSize: 11,
    fontWeight: "900",
  },

  infoText: {
    color: "#bfdbfe",
    fontSize: 10,
    lineHeight: 17,
    marginTop: 6,
  },

  /* ==========================================================
     COMING SOON
     ========================================================== */

  comingSoon: {
    alignItems: "center",
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 18,
    padding: 25,
    marginTop: 15,
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

  /* ==========================================================
     HOME
     ========================================================== */

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
