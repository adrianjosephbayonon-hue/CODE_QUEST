import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

/* ============================================================
   TYPES
   ============================================================ */

type Quest = {
  id: string;
  title: string;
  description: string;
  rewardXP: number;
  rewardCoins: number;
  type: "daily" | "side";
  target: number;
  progress: number;
  completed: boolean;
};

type QuestContextType = {
  dailyQuests: Quest[];
  sideQuests: Quest[];

  completeQuest: (questId: string) => void;

  updateProgress: (questId: string, amount?: number) => void;

  getQuestProgress: (questId: string) => Quest | undefined;
};

/* ============================================================
   STORAGE
   ============================================================ */

const STORAGE_KEY = "@codequest_quests";

/* ============================================================
   DAILY QUESTS
   ============================================================ */

const createDailyQuests = (): Quest[] => [
  {
    id: "daily_practice",
    title: "PRACTICE MAKES PERFECT",
    description: "Complete 3 coding challenges.",
    rewardXP: 40,
    rewardCoins: 20,
    type: "daily",
    target: 3,
    progress: 0,
    completed: false,
  },

  {
    id: "daily_boss",
    title: "BOSS HUNTER",
    description: "Defeat 1 coding boss.",
    rewardXP: 50,
    rewardCoins: 25,
    type: "daily",
    target: 1,
    progress: 0,
    completed: false,
  },

  {
    id: "daily_xp",
    title: "XP COLLECTOR",
    description: "Earn 100 XP.",
    rewardXP: 30,
    rewardCoins: 20,
    type: "daily",
    target: 100,
    progress: 0,
    completed: false,
  },
];

/* ============================================================
   SIDE QUESTS
   ============================================================ */

const createSideQuests = (): Quest[] => [
  {
    id: "side_variables",
    title: "VARIABLE APPRENTICE",
    description: "Defeat Syntax Slime.",
    rewardXP: 50,
    rewardCoins: 25,
    type: "side",
    target: 1,
    progress: 0,
    completed: false,
  },

  {
    id: "side_logic",
    title: "LOGIC WARRIOR",
    description: "Defeat Logic Goblin.",
    rewardXP: 75,
    rewardCoins: 35,
    type: "side",
    target: 1,
    progress: 0,
    completed: false,
  },

  {
    id: "side_loops",
    title: "LOOP MASTER",
    description: "Defeat Loop Dragon.",
    rewardXP: 100,
    rewardCoins: 50,
    type: "side",
    target: 1,
    progress: 0,
    completed: false,
  },

  {
    id: "side_functions",
    title: "FUNCTION HERO",
    description: "Defeat Function Mage.",
    rewardXP: 125,
    rewardCoins: 60,
    type: "side",
    target: 1,
    progress: 0,
    completed: false,
  },
];

/* ============================================================
   CONTEXT
   ============================================================ */

const QuestContext = createContext<QuestContextType | undefined>(undefined);

/* ============================================================
   DATE
   ============================================================ */

function getToday() {
  const date = new Date();

  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

/* ============================================================
   PROVIDER
   ============================================================ */

export function QuestProvider({ children }: { children: ReactNode }) {
  const [dailyQuests, setDailyQuests] = useState<Quest[]>([]);

  const [sideQuests, setSideQuests] = useState<Quest[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  /* ==========================================================
     LOAD QUESTS
     ========================================================== */

  useEffect(() => {
    const loadQuests = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);

        if (saved) {
          const data = JSON.parse(saved);

          if (data.date === getToday()) {
            setDailyQuests(data.dailyQuests);

            setSideQuests(data.sideQuests);
          } else {
            setDailyQuests(createDailyQuests());

            setSideQuests(data.sideQuests ?? createSideQuests());
          }
        } else {
          setDailyQuests(createDailyQuests());

          setSideQuests(createSideQuests());
        }
      } catch (error) {
        console.log("Failed to load quests:", error);

        setDailyQuests(createDailyQuests());

        setSideQuests(createSideQuests());
      } finally {
        setIsLoaded(true);
      }
    };

    loadQuests();
  }, []);

  /* ==========================================================
     SAVE QUESTS
     ========================================================== */

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    const saveQuests = async () => {
      try {
        await AsyncStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            date: getToday(),
            dailyQuests,
            sideQuests,
          }),
        );
      } catch (error) {
        console.log("Failed to save quests:", error);
      }
    };

    saveQuests();
  }, [dailyQuests, sideQuests, isLoaded]);

  /* ==========================================================
     COMPLETE QUEST
     ========================================================== */

  const completeQuest = (questId: string) => {
    setDailyQuests((quests) =>
      quests.map((quest) =>
        quest.id === questId
          ? {
              ...quest,
              progress: quest.target,
              completed: true,
            }
          : quest,
      ),
    );

    setSideQuests((quests) =>
      quests.map((quest) =>
        quest.id === questId
          ? {
              ...quest,
              progress: quest.target,
              completed: true,
            }
          : quest,
      ),
    );
  };

  /* ==========================================================
     UPDATE PROGRESS
     ========================================================== */

  const updateProgress = (questId: string, amount: number = 1) => {
    const updateList = (quests: Quest[]) => {
      return quests.map((quest) => {
        if (quest.id !== questId || quest.completed) {
          return quest;
        }

        const newProgress = Math.min(quest.progress + amount, quest.target);

        return {
          ...quest,

          progress: newProgress,

          completed: newProgress >= quest.target,
        };
      });
    };

    setDailyQuests(updateList);

    setSideQuests(updateList);
  };

  /* ==========================================================
     GET QUEST
     ========================================================== */

  const getQuestProgress = (questId: string) => {
    return [...dailyQuests, ...sideQuests].find(
      (quest) => quest.id === questId,
    );
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
    <QuestContext.Provider
      value={{
        dailyQuests,
        sideQuests,
        completeQuest,
        updateProgress,
        getQuestProgress,
      }}
    >
      {children}
    </QuestContext.Provider>
  );
}

/* ============================================================
   HOOK
   ============================================================ */

export function useQuests() {
  const context = useContext(QuestContext);

  if (!context) {
    throw new Error("useQuests must be used inside QuestProvider");
  }

  return context;
}
