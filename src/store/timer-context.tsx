import { createContext, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimerContext = createContext<TimersContextValue | null>(null);

type TimerContextProviderProps = {
  children: ReactNode;
};

export default function TimerContextProvider({
  children,
}: TimerContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      // ...
    },
    startTimers() {
      // ...
    },
    stopTimers() {
      // ...
    },
  };
  return <TimerContext.Provider value={ctx}>{children}</TimerContext.Provider>;
}
