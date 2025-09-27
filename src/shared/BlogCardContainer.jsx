import blogdatalist from "../mock_data/mock_blog_card";
import BlogCard from "./BlogCard";
//
//
const BlogCardContainer = () => {
  return (
    <div>
      {" "}
      {blogdatalist.map((item) => {
        return <BlogCard key={item.id} item={item} className="mt-20" />;
      })}
    </div>
  );
};

export default BlogCardContainer;
