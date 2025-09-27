const ButtonPrimary = ({ text, loading, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      style={styles.ButtonPrimary}
      className={className}
    >
      {loading ? <span>0</span> : null}
      {text}
    </button>
  );
};

export default ButtonPrimary;
const styles = {
  ButtonPrimary: {
    fontFamily: "Syne",
    backgroundColor: "var(--primary-color)",
    color: "#010208",
    fontSize: "1.4rem",
    fontWeight: "600",
    width: "24rem",
    padding: "2rem",
    borderRadius: "10rem",
    border: "1px solid #fff",
    cursor: "pointer",
  },
};
