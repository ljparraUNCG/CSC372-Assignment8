import styles from "./ComputerThrow.module.css";

export default function ComputerThrow({ choice, isShuffling }) {
  const imagePath = choice
    ? `/images/${choice}.PNG`
    : "/images/question-mark.PNG";

  return (
    <div className={styles.computerSection}>
      <h2>Computer Throw</h2>
      <img
        src={imagePath}
        alt={choice || "?"}
        className={`${styles.throwImg} ${isShuffling ? styles.shuffling : ""}`}
      />
    </div>
  );
}
