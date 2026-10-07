import { router } from "expo-router";
import { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { usePlayer } from "../store/player";

export default function FunctionBattleScreen() {
  const { addRewards } = usePlayer();

  const [code, setCode] = useState("");
  const [enemyHp, setEnemyHp] = useState(100);
  const [message, setMessage] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [victory, setVictory] = useState(false);

  const checkAnswer = () => {
    const normalizedCode = code.replace(/\s+/g, " ").trim();

    const answerWithoutSpaces = normalizedCode.replace(/\s/g, "").toLowerCase();

    const correctAnswers = [
      'voidattack(){system.out.println("attack!");}',
      'staticvoidattack(){system.out.println("attack!");}',
      "voidattack(){attack();}",
    ];

    const isCorrect = correctAnswers.includes(answerWithoutSpaces);

    if (isCorrect) {
      const newHp = Math.max(enemyHp - 100, 0);

      setEnemyHp(newHp);

      setMessage("💥 CORRECT! Your function unleashed a special attack!");

      setShowHint(false);

      if (newHp === 0) {
        addRewards(125, 60);
        setVictory(true);
      }
    } else {
      setMessage("❌ WRONG! The Function Mage counterattacks!");

      setShowHint(true);
    }
  };

  const resetBattle = () => {
    setCode("");
    setEnemyHp(100);
    setMessage("");
    setShowHint(false);
    setVictory(false);
  };

  /*
   * VICTORY
   */

  if (victory) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.victoryContainer}>
          <Text style={styles.victoryIcon}>🏆</Text>

          <Text style={styles.victoryTitle}>VICTORY!</Text>

          <Text style={styles.victoryEnemy}>FUNCTION MAGE DEFEATED</Text>

          <View style={styles.rewardCard}>
            <Text style={styles.rewardTitle}>REWARDS</Text>

            <Text style={styles.reward}>⭐ +125 XP</Text>

            <Text style={styles.reward}>🪙 +60 COINS</Text>
          </View>

          <Text style={styles.victoryMessage}>
            Amazing work!
            {"\n\n"}
            You learned how functions allow programmers to create reusable code.
          </Text>

          <Pressable
            style={styles.continueButton}
            onPress={() => router.push("/world")}
          >
            <Text style={styles.continueText}>RETURN TO WORLD ➜</Text>
          </Pressable>

          <Pressable style={styles.retryButton} onPress={resetBattle}>
            <Text style={styles.retryText}>FIGHT AGAIN</Text>
          </Pressable>
        </ScrollView>
      </View>
    );
  }

  /*
   * BATTLE
   */

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* HEADER */}

        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backButton}>‹ BACK</Text>
          </Pressable>

          <Text style={styles.headerTitle}>CODING BATTLE</Text>

          <Text style={styles.headerLevel}>LV. 3</Text>
        </View>

        {/* ENEMY */}

        <View style={styles.enemySection}>
          <Text style={styles.enemyEmoji}>🧙</Text>

          <Text style={styles.enemyName}>FUNCTION MAGE</Text>

          <Text style={styles.enemyDescription}>
            "Show me the power of reusable code!"
          </Text>

          {/* HP */}

          <View style={styles.hpContainer}>
            <Text style={styles.hpLabel}>HP {enemyHp} / 100</Text>

            <View style={styles.hpBarBackground}>
              <View
                style={[
                  styles.hpBar,
                  {
                    width: `${enemyHp}%`,
                  },
                ]}
              />
            </View>
          </View>
        </View>

        {/* MESSAGE */}

        {message !== "" && (
          <View
            style={[
              styles.messageBox,
              showHint ? styles.wrongMessage : styles.correctMessage,
            ]}
          >
            <Text style={styles.messageText}>{message}</Text>
          </View>
        )}

        {/* CHALLENGE */}

        <View style={styles.challengeCard}>
          <Text style={styles.challengeLabel}>⚔️ CHALLENGE</Text>

          <Text style={styles.challengeText}>
            Create a function named{" "}
            <Text style={styles.highlight}>attack()</Text> that prints{" "}
            <Text style={styles.highlight}>"Attack!"</Text>.
          </Text>
        </View>

        {/* INPUT */}

        <Text style={styles.inputLabel}>WRITE YOUR CODE</Text>

        <TextInput
          style={styles.codeInput}
          value={code}
          onChangeText={setCode}
          placeholder={'void attack() { System.out.println("Attack!"); }'}
          placeholderTextColor="#6b7280"
          multiline
          autoCapitalize="none"
          autoCorrect={false}
          textAlignVertical="top"
        />

        {/* HINT */}

        {showHint && (
          <View style={styles.hintCard}>
            <Text style={styles.hintTitle}>💡 HINT</Text>

            <Text style={styles.hintText}>Your function needs:</Text>

            <Text style={styles.hintText}>• A return type</Text>

            <Text style={styles.hintText}>• The name attack</Text>

            <Text style={styles.hintText}>• Parentheses ()</Text>

            <Text style={styles.hintText}>• Curly braces {"{ }"}</Text>

            <Text style={styles.hintText}>• A print statement</Text>

            <View style={styles.exampleCode}>
              <Text style={styles.exampleText}>{"void attack() {"}</Text>

              <Text style={styles.exampleText}>
                {'    System.out.println("Attack!");'}
              </Text>

              <Text style={styles.exampleText}>{"}"}</Text>
            </View>
          </View>
        )}

        {/* ATTACK */}

        <Pressable style={styles.attackButton} onPress={checkAnswer}>
          <Text style={styles.attackText}>⚔️ USE FUNCTION</Text>
        </Pressable>

        <Text style={styles.instruction}>
          Create a reusable attack function.
        </Text>
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
    fontSize: 17,
    fontWeight: "900",
  },

  headerLevel: {
    color: "#c084fc",
    fontSize: 14,
    fontWeight: "900",
  },

  enemySection: {
    alignItems: "center",
    paddingVertical: 15,
  },

  enemyEmoji: {
    fontSize: 80,
    marginBottom: 10,
  },

  enemyName: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: 1,
  },

  enemyDescription: {
    color: "#94a3b8",
    fontSize: 14,
    marginTop: 6,
    textAlign: "center",
  },

  hpContainer: {
    width: "100%",
    marginTop: 20,
  },

  hpLabel: {
    color: "#cbd5e1",
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 7,
  },

  hpBarBackground: {
    width: "100%",
    height: 16,
    backgroundColor: "#334155",
    borderRadius: 10,
    overflow: "hidden",
  },

  hpBar: {
    height: "100%",
    backgroundColor: "#a855f7",
    borderRadius: 10,
  },

  messageBox: {
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    borderWidth: 1,
  },

  correctMessage: {
    backgroundColor: "#052e16",
    borderColor: "#22c55e",
  },

  wrongMessage: {
    backgroundColor: "#450a0a",
    borderColor: "#ef4444",
  },

  messageText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
  },

  challengeCard: {
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 18,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#334155",
  },

  challengeLabel: {
    color: "#c084fc",
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 10,
  },

  challengeText: {
    color: "#e2e8f0",
    fontSize: 16,
    lineHeight: 24,
  },

  highlight: {
    color: "#facc15",
    fontWeight: "900",
  },

  inputLabel: {
    color: "#94a3b8",
    fontSize: 13,
    fontWeight: "800",
    marginTop: 22,
    marginBottom: 8,
  },

  codeInput: {
    backgroundColor: "#020617",
    borderWidth: 1,
    borderColor: "#475569",
    borderRadius: 12,
    minHeight: 130,
    padding: 16,
    color: "#4ade80",
    fontSize: 16,
    fontFamily: "monospace",
  },

  hintCard: {
    backgroundColor: "#422006",
    borderWidth: 1,
    borderColor: "#f59e0b",
    borderRadius: 14,
    padding: 16,
    marginTop: 15,
  },

  hintTitle: {
    color: "#fbbf24",
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 8,
  },

  hintText: {
    color: "#fde68a",
    fontSize: 14,
    lineHeight: 22,
  },

  exampleCode: {
    backgroundColor: "#1c1917",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  exampleText: {
    color: "#4ade80",
    fontFamily: "monospace",
    fontSize: 14,
    lineHeight: 22,
  },

  attackButton: {
    backgroundColor: "#7c3aed",
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 22,
  },

  attackText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "900",
  },

  instruction: {
    color: "#64748b",
    textAlign: "center",
    fontSize: 12,
    marginTop: 10,
  },

  victoryContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  victoryIcon: {
    fontSize: 80,
    marginBottom: 15,
  },

  victoryTitle: {
    color: "#facc15",
    fontSize: 36,
    fontWeight: "900",
  },

  victoryEnemy: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "800",
    marginTop: 8,
  },

  rewardCard: {
    width: "100%",
    backgroundColor: "#1e293b",
    borderRadius: 18,
    padding: 22,
    marginTop: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#475569",
  },

  rewardTitle: {
    color: "#94a3b8",
    fontSize: 13,
    fontWeight: "900",
    marginBottom: 12,
  },

  reward: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "800",
    marginVertical: 5,
  },

  victoryMessage: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 23,
    textAlign: "center",
    marginTop: 25,
  },

  continueButton: {
    width: "100%",
    backgroundColor: "#2563eb",
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: "center",
    marginTop: 30,
  },

  continueText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "900",
  },

  retryButton: {
    marginTop: 15,
    paddingVertical: 12,
  },

  retryText: {
    color: "#94a3b8",
    fontSize: 14,
    fontWeight: "800",
  },
});
