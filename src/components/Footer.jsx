import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.left}>
        © Mayank kumar - 2025
      </div>
      <div style={styles.right}>
        <a href="#Dribbble" style={styles.link}>Dribbble</a>
        <a href="#Behance" style={styles.link}>Behance</a>
        <a href="#Twitter" style={styles.link}>Twitter</a>
        <a href="#Instagram" style={styles.link}>Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4rem 1rem",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "1.4rem",
    fontWeight:"400",
    fontFamily:"Sync"
  },
  left: {
    flex: 1,
  },
  right: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};
