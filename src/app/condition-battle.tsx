import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { usePlayer } from "../store/player";

export default function ConditionBattleScreen() {
  const { addRewards, unlockAchievement } = usePlayer();

  const [answer, setAnswer] = useState("");
  const [enemyHP, setEnemyHP] = useState(100);
  const [battleMessage, setBattleMessage] = useState(
    "The Logic Goblin is waiting...",
  );

  const correctAnswers = ["if(score>=50){attack();}", "if(score>=50)attack();"];

  const normalizeAnswer = (value: string) => {
    return value.replace(/\s+/g, "").toLowerCase();
  };

  const handleAttack = () => {
    const normalizedAnswer = normalizeAnswer(answer);

    const isCorrect = correctAnswers.includes(normalizedAnswer);

    if (!isCorrect) {
      setBattleMessage("❌ Wrong condition! Try again.");

      Alert.alert("WRONG ANSWER", "Check your if statement and try again.");

      return;
    }

    const newHP = Math.max(enemyHP - 50, 0);

    setEnemyHP(newHP);
    setAnswer("");

    if (newHP <= 0) {
      setBattleMessage("🎉 Logic Goblin defeated!");

      addRewards(75, 35);

      unlockAchievement("logic_slayer");

      Alert.alert(
        "VICTORY!",
        "You defeated the Logic Goblin!\n\n+75 XP\n+35 Coins\n🏆 Achievement Unlocked: Logic Slayer",
        [
          {
            text: "CONTINUE",
            onPress: () => {
              router.push("/loops");
            },
          },
        ],
      );

      return;
    }

    setBattleMessage("⚔️ Correct! You dealt 50 damage!");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backButton}>‹ BACK</Text>
          </Pressable>

          <Text style={styles.headerTitle}>BATTLE</Text>

          <Text style={styles.level}>LV.2</Text>
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.battleIcon}>🌲</Text>

          <Text style={styles.title}>LOGIC GOBLIN</Text>

          <Text style={styles.subtitle}>
            Use conditions to attack the enemy.
          </Text>
        </View>

        <View style={styles.enemyCard}>
          <Text style={styles.enemyEmoji}>👺</Text>

          <Text style={styles.enemyName}>LOGIC GOBLIN</Text>

          <Text style={styles.enemyHPText}>HP {enemyHP} / 100</Text>

          <View style={styles.hpBackground}>
            <View
              style={[
                styles.hpBar,
                {
                  width: `${enemyHP}%`,
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.messageCard}>
          <Text style={styles.message}>{battleMessage}</Text>
        </View>

        <View style={styles.challengeCard}>
          <Text style={styles.sectionLabel}>CODING CHALLENGE</Text>

          <Text style={styles.question}>
            Write an if statement that attacks when the score is at least 50.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.codeText}>if (score &gt;= 50) {"{"}</Text>

            <Text style={styles.codeText}>{"    "}attack();</Text>

            <Text style={styles.codeText}>{"}"}</Text>
          </View>
        </View>

        <View style={styles.answerCard}>
          <Text style={styles.sectionLabel}>YOUR CODE</Text>

          <TextInput
            value={answer}
            onChangeText={setAnswer}
            placeholder="Type your Java code..."
            placeholderTextColor="#64748b"
            style={styles.input}
            multiline
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Pressable style={styles.attackButton} onPress={handleAttack}>
            <Text style={styles.attackButtonText}>⚔️ ATTACK</Text>
          </Pressable>
        </View>

        <View style={styles.rewardCard}>
          <Text style={styles.rewardTitle}>VICTORY REWARD</Text>

          <View style={styles.rewardRow}>
            <Text style={styles.reward}>⭐ +75 XP</Text>

            <Text style={styles.reward}>🪙 +35 COINS</Text>
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

  level: {
    color: "#facc15",
    fontSize: 13,
    fontWeight: "900",
  },

  titleSection: {
    alignItems: "center",
    marginBottom: 22,
  },

  battleIcon: {
    fontSize: 48,
    marginBottom: 5,
  },

  title: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "900",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: 13,
    marginTop: 5,
  },

  enemyCard: {
    backgroundColor: "#3f1720",
    borderWidth: 1,
    borderColor: "#7f1d1d",
    borderRadius: 20,
    padding: 22,
    alignItems: "center",
    marginBottom: 15,
  },

  enemyEmoji: {
    fontSize: 65,
    marginBottom: 5,
  },

  enemyName: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "900",
  },

  enemyHPText: {
    color: "#fca5a5",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 6,
    marginBottom: 9,
  },

  hpBackground: {
    width: "100%",
    height: 12,
    backgroundColor: "#450a0a",
    borderRadius: 10,
    overflow: "hidden",
  },

  hpBar: {
    height: "100%",
    backgroundColor: "#ef4444",
    borderRadius: 10,
  },

  messageCard: {
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 14,
    padding: 15,
    marginBottom: 15,
  },

  message: {
    color: "#f8fafc",
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
    fontWeight: "700",
  },

  challengeCard: {
    backgroundColor: "#172554",
    borderWidth: 1,
    borderColor: "#1d4ed8",
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
  },

  sectionLabel: {
    color: "#60a5fa",
    fontSize: 11,
    fontWeight: "900",
    marginBottom: 10,
    letterSpacing: 1,
  },

  question: {
    color: "#e2e8f0",
    fontSize: 14,
    lineHeight: 21,
  },

  codeBox: {
    backgroundColor: "#020617",
    borderRadius: 12,
    padding: 15,
    marginTop: 14,
  },

  codeText: {
    color: "#86efac",
    fontFamily: "monospace",
    fontSize: 14,
  },

  answerCard: {
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
  },

  input: {
    minHeight: 110,
    backgroundColor: "#020617",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 12,
    padding: 15,
    color: "#ffffff",
    fontFamily: "monospace",
    fontSize: 14,
    textAlignVertical: "top",
    marginBottom: 13,
  },

  attackButton: {
    backgroundColor: "#dc2626",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
  },

  attackButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "900",
  },

  rewardCard: {
    backgroundColor: "#422006",
    borderWidth: 1,
    borderColor: "#a16207",
    borderRadius: 18,
    padding: 17,
  },

  rewardTitle: {
    color: "#facc15",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 12,
  },

  rewardRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  reward: {
    color: "#fde68a",
    fontSize: 13,
    fontWeight: "900",
  },
});
