import STAR from "../assets/icons/Star.png";
//
const HeadingCard = ({ heading, isViewAll, className }) => {
  return (
    <div style={styles.container} className={className}>
      <div style={styles.heading}>
        {" "}
        <img src={STAR} alt="Star Pic" /> {heading}
      </div>
      <div>
        {isViewAll && (
          <a style={styles.a} href="##">
            view all
          </a>
        )}
      </div>
    </div>
  );
};
export default HeadingCard;

const styles = {
  heading: {
    fontFamily: "var(--font-Sync)",
    color: "#ffffff",
    fontSize: "4rem",
    fontWeight: "700",
  },
  container: {
    height: "6rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    background: "#000",
  },
  a: {
    fontFamily: "var(--font-Sync)",
    color: "#ffffff",
    fontSize: "1.8rem",
    fontWeight: "500",
  },
};
