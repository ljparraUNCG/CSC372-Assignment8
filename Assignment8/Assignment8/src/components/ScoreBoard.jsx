import styles from "./ScoreBoard.module.css";

export default function ScoreBoard({ score, onReset }) {
  return (
    <div className={styles.scoreBoard}>
      <h3>Score</h3>
      <p>Wins: {score.wins}</p>
      <p>Losses: {score.losses}</p>
      <p>Ties: {score.ties}</p>

      <button onClick={onReset}>Reset</button>
    </div>
  );
}
