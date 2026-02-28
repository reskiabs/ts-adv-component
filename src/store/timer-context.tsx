import { createContext, useContext, type ReactNode } from "react";

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

export const TimerContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timerCtx = useContext(TimerContext)!;

  if (timerCtx === null) {
    throw new Error("TimerContext is null - that should not be the case!");
  }

  return timerCtx;
}

type TimerContextProviderProps = {
  children: ReactNode;
};

export default function TimerContextProvider({
  children,
}: TimerContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: true,
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
