import React from "react";
import ButtonPrimary from "../components/molicules/ButtonPrimary";
import ButtonSecondary from "../components/molicules/ButtonSecondary";

const BlogCard = ({ item, className = "" }) => {
  if (!item) return null;

  const { image, heading, buttonText = {}, date } = item;

  const { a = "", b = "" } = buttonText;

  return (
    <div className={`blog-card ${className}`.trim()}>
      {/* Left: Image */}
      <div className="blog-image">
        <img src={image} alt={heading || "blog"} />
      </div>

      {/* Middle: Info */}
      <div className="blog-info">
        {date && <span className="blog-date">{date}</span>}
        {heading && <h2 className="blog-title">{heading}</h2>}
        <div className="blog-tags">
          {a && <ButtonSecondary text={a} />}
          {b && <ButtonSecondary text={b} />}
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
