import styles from "./Message.module.css";

function Message({ message, type = "else" }) {
  return (
    <p className={styles.message}>
      {type === "error" ? (
        <span role="img">⛔</span>
      ) : (
        <span role="img">👋</span>
      )}{" "}
      {message}
    </p>
  );
}

export default Message;
