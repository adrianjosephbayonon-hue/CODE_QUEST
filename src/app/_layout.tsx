import { Stack } from "expo-router";

import { DailyQuestProvider } from "../store/dailyQuest";
import { PlayerProvider } from "../store/player";
import { QuestProvider } from "../store/quests";

export default function RootLayout() {
  return (
    <PlayerProvider>
      <DailyQuestProvider>
        <QuestProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </QuestProvider>
      </DailyQuestProvider>
    </PlayerProvider>
  );
}
