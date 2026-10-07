import { Stack } from "expo-router";
import { DailyQuestProvider } from "../store/dailyQuest";
import { PlayerProvider } from "../store/player";

export default function RootLayout() {
  return (
    <PlayerProvider>
      <DailyQuestProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </DailyQuestProvider>
    </PlayerProvider>
  );
}
