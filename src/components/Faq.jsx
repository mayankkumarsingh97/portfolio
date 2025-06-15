import React from "react";

const Faq = () => {
  return (
    <div style={styles.faq}>
      <h4 style={styles.h4}>What is your design process?</h4>
      <p style={styles.desc}>
        My design process typically involves four key phases: research, design,
        prototype, and test. In the research phase, I gather insights about the
        user and their needs. In the design phase, I create wireframes and
        visual designs that meet those needs. In the prototype phase, I create
        interactive models of the design for testing. In the test phase, I
        collect feedback from users to refine the design.
      </p>
      <h4 style={styles.h4}>What tools and software do you use for UX design?</h4>
      <h4 style={styles.h4}>How do you measure the success of your UX designs?</h4>
    </div>
  );
};

export default Faq;

const styles = {
  faq: {
    display: "block",
  },
  h4: {
    color: "#FFFFFF",
    fontSize: "3.2rem",
    marginTop:"2rem"
  },
  desc: {
    color: "#CBCBCB",
    fontFamily: "var(--font-Poppins)",
    fontSize: "1.8rem",
    fontWeight: "400",
    margin:"2rem 0"
  },
};
