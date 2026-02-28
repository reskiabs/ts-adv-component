import { createContext, useContext, useReducer, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
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

type Action = {
  type: "ADD_TIMER" | "START_TIMERS" | "STOP_TIMERS";
};

function timersReducer(state: TimersState, action: Action): TimersState {}

export default function TimerContextProvider({
  children,
}: TimerContextProviderProps) {
  const [timerState, dispatch] = useReducer(timersReducer, initialState);
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: true,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER" });
    },
    startTimers() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };
  return <TimerContext.Provider value={ctx}>{children}</TimerContext.Provider>;
}
