import React from "react";
import ButtonPrimary from "../components/molicules/ButtonPrimary";
import ButtonSecondary from "../components/molicules/ButtonSecondary";
//
const BlogCard = ({ item, className }) => {
  const {
    id,
    image,
    heading,
    buttonText: { a, b },
    date,
  } = item;
  return (
    <div className={`blog-card ${className}`}>
      {/* Left: Image */}
      <div className="blog-image">
        <img src={image} alt="blog" />
      </div>

      {/* Middle: Info */}
      <div className="blog-info">
        <span className="blog-date">{date}</span>
        <h2 className="blog-title">{heading}</h2>
        <div className="blog-tags">
          <ButtonSecondary text={a} />
          <ButtonSecondary text={b} />
        </div>
      </div>

      {/* Right: Read Button */}
      <div className="blog-action">
        <ButtonPrimary text="Read" />
      </div>
    </div>
  );
};

export default BlogCard;
