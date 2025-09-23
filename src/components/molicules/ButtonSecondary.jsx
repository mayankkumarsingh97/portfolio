const ButtonSecondary = ({ text, loading, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className={className}
      style={styles.ButtonPrimary}
    >
      {loading ? <span>0</span> : null}
      {text}
    </button>
  );
};

export default ButtonSecondary;

const styles = {
  ButtonPrimary: {
    backgroundColor: "var(--secondary-color)",
    color: "#fff",
    width: "9rem",
    padding: "1rem",
    borderRadius: "10rem",
    border: "1px solid #fff",
    cursor: "pointer",
    textTransform: "uppercase",
    fontFamiliy: "Sync",
    fontSize: "1.2rem",
  },
};
