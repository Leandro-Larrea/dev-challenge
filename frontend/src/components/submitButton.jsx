import styles from ".././styles/button.module.css";

export function SubmitButton({ loader, name }) {
  return (
    <div>
      {!loader ? (
        <button type="submit" className={styles.button}>
          {name}
        </button>
      ) : (
        <button className={styles.buttonLoading}></button>
      )}
    </div>
  );
}
