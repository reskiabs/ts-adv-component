import { useState } from "react";
import { type Timer as TimerProps } from "../store/timer-context.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState<number | null>(
    duration * 1000,
  );

  setInterval(function () {
    setRemainingTime((prevTime) => prevTime - 50);
  }, 50);
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress value={remainingTime} max={duration * 1000} />
      </p>
      <p>{}</p>
    </Container>
  );
}
