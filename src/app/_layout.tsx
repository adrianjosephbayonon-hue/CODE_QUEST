import { Stack } from "expo-router";
import { PlayerProvider } from "../store/player";

export default function RootLayout() {
  return (
    <PlayerProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </PlayerProvider>
  );
}
