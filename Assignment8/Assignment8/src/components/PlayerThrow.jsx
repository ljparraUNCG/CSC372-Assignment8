import styles from "./PlayerThrow.module.css";

export default function PlayerThrow({ playerChoice, onSelect }) {
  const options = ["rock", "paper", "scissors"];

  return (
    <div className={styles.playerSection}>
      <h2>Your Throw</h2>

      <div className={styles.options}>
        {options.map((opt) => (
          <img
            key={opt}
            src={`/images/${opt}.PNG`}
            alt={opt}
            className={`${styles.throwImg} ${
              playerChoice === opt ? styles.selected : ""
            }`}
            onClick={() => onSelect(opt)}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSelect(opt)}
          />
        ))}
      </div>
    </div>
  );
}
