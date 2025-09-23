import IMG1 from "../assets/icons/Frame3.png";
import IMG2 from "../assets/icons/Group2.png";
import IMG3 from "../assets/icons/Group.png";
//
import FREELANCER from "../assets/images/rec.png";
import DESINGER from "../assets/images/rec2.png";
//
//
const Hero = () => {
  return (
    <div style={styles.container}>
      <div style={styles.h1container}>
        <h1 style={styles.h1} className="justified-heading">
          I AM A{" "}
          <span>
            <img src={FREELANCER} alt="" />
          </span>{" "}
          FREELANCE
        </h1>
        <h1 style={styles.h1} className="justified-heading">
          DESIGNER{" "}
          <span>
            <img src={DESINGER} alt="" />
          </span>{" "}
          FROM
        </h1>
        <h1 style={styles.h1} className="justified-heading">
          San Francisco
        </h1>
      </div>

      <div style={styles.wave}>
        <div style={styles.sectionImage}>
          <img src={IMG1} alt="IMG1" />
          <img src={IMG2} alt="IMG2" />
          <img src={IMG3} alt="IMG3" />
        </div>

        <p style={styles.desc}>
          Welcome to my portfolio. Here, artistry meets functionality. Dive into
          a curated showcase of distinctive branding and web designs, each
          crafted to captivate and inspire.
        </p>
      </div>
    </div>
  );
};

export default Hero;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    
    background: "#000",
    padding: "10rem 0",
  },
  h1container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "0 auto",
    textAlign: "center",
  },
  h1: {
    width: "100%",
    fontSize: "6.4rem",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "800",
    fontFamily: "var(--font-Sync)",
    lineHeight: "8rem",
    letterSpacing: "2rem",
    position: "relative",
  },
  wave: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5rem",
  },
  sectionImage: {
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
  },
  desc: {
    width: "50%",
    color: "#CBCBCB",
    fontFamily: "var(--font-Poppins)",
    fontWeight: "400",
    fontSize: "1.6rem",
    textAlign: "justify",
    padding: "0 4rem",
  },
};
