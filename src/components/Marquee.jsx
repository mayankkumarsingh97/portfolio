import React from "react";

const Marquee = ({ imageSrc, text }) => {
  return (
    <div style={styles.marqueeContainer}>
      <div style={styles.marqueeContent}>
        <img src={imageSrc} alt="marquee" style={styles.image} />
        <span style={styles.text}>{text}</span>
      </div>
      <div style={styles.marqueeContent}>
        <img src={imageSrc} alt="marquee" style={styles.image} />
        <span style={styles.text}>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;

const styles = {
  marqueeContainer: {
    display: "flex",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
    background: "#000",
    height: "10rem",
    alignItems: "center",
    position: "relative",
    margin:'10rem 0'
  },
  marqueeContent: {
    width:"100%",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    animation: "marquee 10s linear infinite",
  },
  image: {
    height: "3rem",
    marginRight: "1rem",
  },
  text: {
    color: "#fff",
    fontSize: "5.6rem",
    fontWeight:'700',
    marginRight: "2rem",
  },
};
