import React from "react";
//
const ListCard = (item) => {
  const { heading, subheading, date } = item.item;
  return (
    <div style={styles.listCardContainer}>
      <div className="section-one">
        <h1 style={styles.heading}>{heading}</h1>
      </div>
      <div>
        <h3 style={styles.headingtwo}>{subheading}</h3>
        <h4 style={styles.headingThree}>{date}</h4>
      </div>
    </div>
  );
};
export default ListCard;
//
const styles = {
  listCardContainer: {
    width:"100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#070707",
    marginTop: "5rem",
    borderBottom: "2px solid #ccc",
    padding: "2rem",
  },
  heading: {
    fontFamily: "var(--font-Sync)",
    color: "#ffffff",
    fontSize: "4rem",
    fontWeight: "700",
  },
  headingtwo: {
    fontFamily: "var(--font-Sync)",
    color: "#ffffff",
    fontSize: "3rem",
    fontWeight: "700",
  },
  headingThree: {
    fontFamily: "var(--font-Sync)",
    color: "#ffffff",
    fontSize: "2rem",
    fontWeight: "700",
  },
};
