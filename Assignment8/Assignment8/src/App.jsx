import { useState, useEffect } from "react";
import PlayerThrow from "./components/PlayerThrow";
import ComputerThrow from "./components/ComputerThrow";
import ResultDisplay from "./components/ResultDisplay";
import ScoreBoard from "./components/ScoreBoard";
import "./App.css";

const choices = ["rock", "paper", "scissors"];

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    setIsShuffling(true);
    setComputerChoice("question-mark");

    //shuffle computer choice
    let shuffleInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * choices.length);
      setComputerChoice(choices[randomIndex]);
    }, 500);

    setTimeout(() => {
      clearInterval(shuffleInterval);
      const finalChoice = choices[Math.floor(Math.random() * 3)];
      setComputerChoice(finalChoice);
      setIsShuffling(false);
    }, 3000);
  };

  // judge winner
  useEffect(() => {
    if (!playerChoice || !computerChoice || isShuffling) return;

    if (playerChoice === computerChoice) {
      setResult("It's a tie!");
      setScore((prev) => ({ ...prev, ties: prev.ties + 1 }));
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You win!");
      setScore((prev) => ({ ...prev, wins: prev.wins + 1 }));
    } else {
      setResult("You lose!");
      setScore((prev) => ({ ...prev, losses: prev.losses + 1 }));
    }
  }, [playerChoice, computerChoice, isShuffling]);

  const resetScore = () => {
    setScore({ wins: 0, losses: 0, ties: 0 });
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
  };

  return (
    <div className="container">
      <h1>Rock Paper Scissors</h1>

      <ScoreBoard score={score} onReset={resetScore} />

      <div className="game">
        <PlayerThrow
          playerChoice={playerChoice}
          onSelect={handlePlayerChoice}
        />

        <ComputerThrow choice={computerChoice} isShuffling={isShuffling} />
      </div>

      <ResultDisplay result={result} />
    </div>
  );
}
