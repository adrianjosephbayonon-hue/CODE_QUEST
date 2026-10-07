import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function FunctionsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* HEADER */}
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
          >
            <Text style={styles.backButton}>
              ‹ BACK
            </Text>
          </Pressable>

          <Text style={styles.headerTitle}>
            FUNCTION KINGDOM
          </Text>

          <Text style={styles.areaNumber}>
            AREA 4
          </Text>
        </View>

        {/* TITLE */}
        <View style={styles.titleSection}>
          <Text style={styles.kingdomIcon}>
            🏰
          </Text>

          <Text style={styles.title}>
            FUNCTION KINGDOM
          </Text>

          <Text style={styles.subtitle}>
            Learn how to create reusable abilities.
          </Text>
        </View>

        {/* STORY */}
        <View style={styles.storyCard}>
          <Text style={styles.storyTitle}>
            🏰 THE KINGDOM OF ABILITIES
          </Text>

          <Text style={styles.storyText}>
            You have reached the Function Kingdom.
            {'\n\n'}
            Here, powerful warriors do not repeat
            the same instructions over and over.
            {'\n\n'}
            Instead, they create reusable abilities
            called functions.
          </Text>
        </View>

        {/* LESSON */}
        <View style={styles.lessonCard}>
          <Text style={styles.sectionTitle}>
            📚 LESSON: FUNCTIONS
          </Text>

          <Text style={styles.lessonText}>
            A{' '}
            <Text style={styles.highlight}>
              function
            </Text>{' '}
            is a reusable block of code that performs
            a specific task.
          </Text>

          <Text style={styles.lessonText}>
            You define the function once, then call
            it whenever you need it.
          </Text>

          {/* CODE */}
          <View style={styles.codeBox}>
            <Text style={styles.codeText}>
              {'static void attack() {'}
              {'\n'}
              {'    System.out.println("Attack!");'}
              {'\n'}
              {'}'}
              {'\n\n'}
              {'attack();'}
            </Text>
          </View>

          <Text style={styles.explanation}>
            <Text style={styles.highlight}>
              attack()
            </Text>{' '}
            → the function name
            {'\n'}
            <Text style={styles.highlight}>
              {'{ }'}
            </Text>{' '}
            → contains the function's code
            {'\n'}
            <Text style={styles.highlight}>
              attack();
            </Text>{' '}
            → calls the function
          </Text>
        </View>

        {/* GAME EXAMPLE */}
        <View style={styles.exampleCard}>
          <Text style={styles.exampleTitle}>
            ⚔️ GAME EXAMPLE
          </Text>

          <Text style={styles.exampleText}>
            Imagine your character has a special
            ability:
          </Text>

          <View style={styles.smallCodeBox}>
            <Text style={styles.codeText}>
              {'heal();'}
            </Text>
          </View>

          <Text style={styles.exampleText}>
            Instead of writing all the healing
            instructions every time, you can simply
            call the function.
          </Text>
        </View>

        {/* OBJECTIVE */}
        <View style={styles.objectiveCard}>
          <Text style={styles.objectiveTitle}>
            🎯 YOUR OBJECTIVE
          </Text>

          <Text style={styles.objectiveText}>
            Create a function called{' '}
            <Text style={styles.highlight}>
              attack()
            </Text>{' '}
            and use it to defeat the next enemy.
          </Text>
        </View>

        {/* QUEST */}
        <View style={styles.questCard}>
          <View style={styles.questIconContainer}>
            <Text style={styles.questIcon}>
              🧙
            </Text>
          </View>

          <View style={styles.questInfo}>
            <Text style={styles.questTitle}>
              QUEST: FUNCTION MAGE
            </Text>

            <Text style={styles.questDescription}>
              Use a reusable function to unleash
              your special attack.
            </Text>

            <Text style={styles.questReward}>
              ⭐ +125 XP • 🪙 +60 COINS
            </Text>
          </View>
        </View>

        {/* START */}
        <Pressable
          style={styles.startButton}
          onPress={() =>
            router.push('/function-battle')
          }
        >
          <Text style={styles.startText}>
            START QUEST ⚔️
          </Text>
        </Pressable>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  backButton: {
    color: '#94a3b8',
    fontSize: 15,
    fontWeight: '700',
  },

  headerTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
  },

  areaNumber: {
    color: '#c084fc',
    fontSize: 13,
    fontWeight: '900',
  },

  titleSection: {
    alignItems: 'center',
    marginBottom: 25,
  },

  kingdomIcon: {
    fontSize: 65,
    marginBottom: 10,
  },

  title: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
  },

  subtitle: {
    color: '#94a3b8',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 7,
  },

  storyCard: {
    backgroundColor: '#2e1065',
    borderWidth: 1,
    borderColor: '#7c3aed',
    borderRadius: 18,
    padding: 20,
  },

  storyTitle: {
    color: '#c4b5fd',
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 12,
  },

  storyText: {
    color: '#ddd6fe',
    fontSize: 14,
    lineHeight: 23,
  },

  lessonCard: {
    backgroundColor: '#1e293b',
    borderRadius: 18,
    padding: 20,
    marginTop: 18,
    borderWidth: 1,
    borderColor: '#334155',
  },

  sectionTitle: {
    color: '#c084fc',
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 15,
  },

  lessonText: {
    color: '#cbd5e1',
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 15,
  },

  highlight: {
    color: '#facc15',
    fontWeight: '900',
  },

  codeBox: {
    backgroundColor: '#020617',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
  },

  codeText: {
    color: '#4ade80',
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'monospace',
  },

  explanation: {
    color: '#94a3b8',
    fontSize: 14,
    lineHeight: 25,
    marginTop: 10,
  },

  exampleCard: {
    backgroundColor: '#172554',
    borderWidth: 1,
    borderColor: '#1d4ed8',
    borderRadius: 18,
    padding: 20,
    marginTop: 18,
  },

  exampleTitle: {
    color: '#60a5fa',
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 12,
  },

  exampleText: {
    color: '#dbeafe',
    fontSize: 14,
    lineHeight: 21,
  },

  smallCodeBox: {
    backgroundColor: '#020617',
    borderRadius: 10,
    padding: 14,
    marginVertical: 10,
  },

  objectiveCard: {
    backgroundColor: '#3b0764',
    borderWidth: 1,
    borderColor: '#9333ea',
    borderRadius: 16,
    padding: 18,
    marginTop: 18,
  },

  objectiveTitle: {
    color: '#d8b4fe',
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 10,
  },

  objectiveText: {
    color: '#f3e8ff',
    fontSize: 15,
    lineHeight: 23,
  },

  questCard: {
    flexDirection: 'row',
    backgroundColor: '#451a03',
    borderWidth: 1,
    borderColor: '#92400e',
    borderRadius: 16,
    padding: 17,
    marginTop: 18,
  },

  questIconContainer: {
    width: 55,
    height: 55,
    borderRadius: 14,
    backgroundColor: '#3f1d0b',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  questIcon: {
    fontSize: 28,
  },

  questInfo: {
    flex: 1,
  },

  questTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 5,
  },

  questDescription: {
    color: '#fed7aa',
    fontSize: 13,
    lineHeight: 19,
  },

  questReward: {
    color: '#facc15',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 8,
  },

  startButton: {
    backgroundColor: '#7c3aed',
    borderRadius: 15,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 22,
  },

  startText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '900',
  },
});