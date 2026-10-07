import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

/* ============================================================
   PLAYER DATA
   ============================================================ */

type Player = {
  level: number;
  xp: number;
  coins: number;

  conditionForestUnlocked: boolean;
  loopLandsUnlocked: boolean;
  functionKingdomUnlocked: boolean;

  achievements: string[];

  inventory: string[];
};

/* ============================================================
   PLAYER CONTEXT
   ============================================================ */

type PlayerContextType = {
  player: Player;

  addRewards: (xp: number, coins: number) => void;

  spendCoins: (amount: number) => boolean;

  addItem: (itemId: string) => void;

  hasItem: (itemId: string) => boolean;

  unlockAchievement: (achievementId: string) => void;

  hasAchievement: (achievementId: string) => boolean;

  resetProgress: () => void;
};

/* ============================================================
   STORAGE
   ============================================================ */

const STORAGE_KEY = "@codequest_player";

/* ============================================================
   DEFAULT PLAYER
   ============================================================ */

const defaultPlayer: Player = {
  level: 1,

  xp: 0,

  coins: 0,

  conditionForestUnlocked: false,

  loopLandsUnlocked: false,

  functionKingdomUnlocked: false,

  achievements: [],

  inventory: [],
};

/* ============================================================
   CONTEXT
   ============================================================ */

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

/* ============================================================
   PROVIDER
   ============================================================ */

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [player, setPlayer] = useState<Player>(defaultPlayer);

  const [isLoaded, setIsLoaded] = useState(false);

  /* ==========================================================
     LOAD PLAYER
     ========================================================== */

  useEffect(() => {
    const loadPlayer = async () => {
      try {
        const savedPlayer = await AsyncStorage.getItem(STORAGE_KEY);

        if (savedPlayer) {
          const parsedPlayer = JSON.parse(savedPlayer);

          setPlayer({
            ...defaultPlayer,

            ...parsedPlayer,

            achievements: parsedPlayer.achievements ?? [],

            inventory: parsedPlayer.inventory ?? [],
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

  /* ==========================================================
     SAVE PLAYER
     ========================================================== */

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

  /* ==========================================================
     ADD REWARDS
     ========================================================== */

  const addRewards = (xp: number, coins: number) => {
    setPlayer((currentPlayer) => {
      const newXP = currentPlayer.xp + xp;

      const newLevel = Math.floor(newXP / 100) + 1;

      return {
        ...currentPlayer,

        xp: newXP,

        coins: currentPlayer.coins + coins,

        level: newLevel,

        conditionForestUnlocked: newXP >= 50,

        loopLandsUnlocked: newXP >= 125,

        functionKingdomUnlocked: newXP >= 225,
      };
    });
  };

  /* ==========================================================
     SPEND COINS
     ========================================================== */

  const spendCoins = (amount: number): boolean => {
    if (player.coins < amount) {
      return false;
    }

    setPlayer((currentPlayer) => {
      if (currentPlayer.coins < amount) {
        return currentPlayer;
      }

      return {
        ...currentPlayer,

        coins: currentPlayer.coins - amount,
      };
    });

    return true;
  };

  /* ==========================================================
     ADD ITEM
     ========================================================== */

  const addItem = (itemId: string) => {
    setPlayer((currentPlayer) => {
      if (currentPlayer.inventory.includes(itemId)) {
        return currentPlayer;
      }

      return {
        ...currentPlayer,

        inventory: [...currentPlayer.inventory, itemId],
      };
    });
  };

  /* ==========================================================
     CHECK ITEM
     ========================================================== */

  const hasItem = (itemId: string) => {
    return player.inventory.includes(itemId);
  };

  /* ==========================================================
     ACHIEVEMENTS
     ========================================================== */

  const unlockAchievement = (achievementId: string) => {
    setPlayer((currentPlayer) => {
      if (currentPlayer.achievements.includes(achievementId)) {
        return currentPlayer;
      }

      const updatedAchievements = [
        ...currentPlayer.achievements,
        achievementId,
      ];

      const bossAchievements = [
        "first_blood",
        "logic_slayer",
        "loop_master",
        "function_master",
      ];

      const allBossesDefeated = bossAchievements.every((id) =>
        updatedAchievements.includes(id),
      );

      if (
        allBossesDefeated &&
        !updatedAchievements.includes("codequest_beginner")
      ) {
        updatedAchievements.push("codequest_beginner");
      }

      return {
        ...currentPlayer,

        achievements: updatedAchievements,
      };
    });
  };

  /* ==========================================================
     CHECK ACHIEVEMENT
     ========================================================== */

  const hasAchievement = (achievementId: string) => {
    return player.achievements.includes(achievementId);
  };

  /* ==========================================================
     RESET
     ========================================================== */

  const resetProgress = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);

      setPlayer(defaultPlayer);
    } catch (error) {
      console.log("Failed to reset player:", error);
    }
  };

  /* ==========================================================
     LOADING
     ========================================================== */

  if (!isLoaded) {
    return null;
  }

  /* ==========================================================
     PROVIDER
     ========================================================== */

  return (
    <PlayerContext.Provider
      value={{
        player,

        addRewards,

        spendCoins,

        addItem,

        hasItem,

        unlockAchievement,

        hasAchievement,

        resetProgress,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

/* ============================================================
   USE PLAYER
   ============================================================ */

export function usePlayer() {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("usePlayer must be used inside PlayerProvider");
  }

  return context;
}
