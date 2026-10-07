import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Player = {
  level: number;
  xp: number;
  coins: number;

  conditionForestUnlocked: boolean;
  loopLandsUnlocked: boolean;
  functionKingdomUnlocked: boolean;

  achievements: string[];
};

type PlayerContextType = {
  player: Player;

  addRewards: (xp: number, coins: number) => void;

  unlockAchievement: (achievementId: string) => void;

  hasAchievement: (achievementId: string) => boolean;

  resetProgress: () => void;
};

const STORAGE_KEY = "@codequest_player";

const defaultPlayer: Player = {
  level: 1,
  xp: 0,
  coins: 0,

  conditionForestUnlocked: false,
  loopLandsUnlocked: false,
  functionKingdomUnlocked: false,

  achievements: [],
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [player, setPlayer] = useState<Player>(defaultPlayer);

  const [isLoaded, setIsLoaded] = useState(false);

  /*
   * LOAD SAVED PLAYER
   */
  useEffect(() => {
    const loadPlayer = async () => {
      try {
        const savedPlayer = await AsyncStorage.getItem(STORAGE_KEY);

        if (savedPlayer) {
          const parsedPlayer = JSON.parse(savedPlayer);

          /*
           * Make sure old saved data that does
           * not have achievements still works.
           */
          setPlayer({
            ...defaultPlayer,
            ...parsedPlayer,
            achievements: parsedPlayer.achievements ?? [],
          });
        }
      } catch (error) {
        console.log("Failed to load player:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadPlayer();
  }, []);

  /*
   * SAVE PLAYER
   */
  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    const savePlayer = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(player));
      } catch (error) {
        console.log("Failed to save player:", error);
      }
    };

    savePlayer();
  }, [player, isLoaded]);

  /*
   * ADD XP AND COINS
   */
  const addRewards = (xp: number, coins: number) => {
    setPlayer((currentPlayer) => {
      const newXP = currentPlayer.xp + xp;

      const newLevel = Math.floor(newXP / 100) + 1;

      return {
        ...currentPlayer,

        xp: newXP,

        coins: currentPlayer.coins + coins,

        level: newLevel,

        /*
         * WORLD UNLOCKS
         */
        conditionForestUnlocked: newXP >= 50,

        loopLandsUnlocked: newXP >= 125,

        functionKingdomUnlocked: newXP >= 225,
      };
    });
  };

  /*
   * UNLOCK ACHIEVEMENT
   */
  const unlockAchievement = (achievementId: string) => {
    setPlayer((currentPlayer) => {
      /*
       * Already unlocked.
       */
      if (currentPlayer.achievements.includes(achievementId)) {
        return currentPlayer;
      }

      return {
        ...currentPlayer,

        achievements: [...currentPlayer.achievements, achievementId],
      };
    });
  };

  /*
   * CHECK ACHIEVEMENT
   */
  const hasAchievement = (achievementId: string) => {
    return player.achievements.includes(achievementId);
  };

  /*
   * RESET GAME
   */
  const resetProgress = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);

      setPlayer(defaultPlayer);
    } catch (error) {
      console.log("Failed to reset player:", error);
    }
  };

  /*
   * DON'T RENDER UNTIL SAVED DATA
   * HAS BEEN LOADED.
   */
  if (!isLoaded) {
    return null;
  }

  return (
    <PlayerContext.Provider
      value={{
        player,
        addRewards,
        unlockAchievement,
        hasAchievement,
        resetProgress,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("usePlayer must be used inside PlayerProvider");
  }

  return context;
}
