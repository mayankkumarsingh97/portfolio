import ButtonPrimary from "../components/molicules/ButtonPrimary";
import ButtonSecondary from "../components/molicules/ButtonSecondary";
import "./index.css";
//
const ApplicationCard = ({ item, className }) => {
  const {
    id,
    image,
    heading,
    desc,
    buttonTextPrimary,
    buttonTextSecondary: { a1, a2 },
  } = item;
  return (
    <div className={`image-card-container ${className}`}>
      <section className="image">
        <img src={image} alt="" />
      </section>
      <section className="details">
        <div className="card-details">
          <h2>{heading}</h2>
          <p className="details-desc">{desc}</p>
          <div className="details-cta">
            <ButtonSecondary text={a1} />
            <ButtonSecondary text={a2} className="ml-10" />
          </div>
        </div>
        <div >
          <ButtonPrimary text={buttonTextPrimary} className='mt-20'/>
        </div>
      </section>
    </div>
  );
};
export default ApplicationCard;
