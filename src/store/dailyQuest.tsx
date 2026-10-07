import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

type DailyQuestContextType = {
  completed: boolean;
  completeQuest: () => void;
};

const STORAGE_KEY = "@codequest_daily_quest";

const DailyQuestContext = createContext<DailyQuestContextType | undefined>(
  undefined,
);

function getToday() {
  return new Date().toISOString().split("T")[0];
}

export function DailyQuestProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadQuest = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);

        if (saved) {
          const data = JSON.parse(saved);

          if (data.date === getToday()) {
            setCompleted(data.completed);
          } else {
            setCompleted(false);
          }
        }
      } catch (error) {
        console.log("Failed to load daily quest:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadQuest();
  }, []);

  const completeQuest = async () => {
    try {
      const data = {
        date: getToday(),
        completed: true,
      };

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));

      setCompleted(true);
    } catch (error) {
      console.log("Failed to save daily quest:", error);
    }
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <DailyQuestContext.Provider
      value={{
        completed,
        completeQuest,
      }}
    >
      {children}
    </DailyQuestContext.Provider>
  );
}

export function useDailyQuest() {
  const context = useContext(DailyQuestContext);

  if (!context) {
    throw new Error("useDailyQuest must be used inside DailyQuestProvider");
  }

  return context;
}
