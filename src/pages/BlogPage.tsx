import React from "react";
import SectionHeader from "../components/common/SectionHeader";

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader
        title="Travel Blog"
        subtitle="Latest stories and travel tips"
      />
      {/* Add blog post listing here */}
    </div>
  );
};

export default BlogPage;
