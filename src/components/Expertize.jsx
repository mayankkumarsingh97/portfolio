import "./header/index.css";
import DOT from "../assets/icons/dot.png";
//
const Expertize = ({ item }) => {
  const { heading, desc } = item;
  return (
    <section className="section-one">
      <div className="brand">
        <img src={DOT} alt="Branding dot" /> <h5>{heading}</h5>
      </div>
      <p>{desc}</p>
    </section>
  );
};
export default Expertize;
