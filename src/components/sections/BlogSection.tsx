import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../common/SectionHeader";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Top 10 Beaches in Sri Lanka",
      excerpt: "Discover the most beautiful beaches from north to south",
      date: "June 15, 2025",
      image: "/images/blog/beaches.jpg",
      category: "Destinations",
    },
    {
      id: 2,
      title: "Sri Lankan Cuisine Guide",
      excerpt: "Must-try dishes and where to find them",
      date: "May 28, 2025",
      image: "/images/blog/food.jpg",
      category: "Culture",
    },
    {
      id: 3,
      title: "Sustainable Travel Tips",
      excerpt: "How to explore Sri Lanka responsibly",
      date: "April 10, 2025",
      image: "/images/blog/sustainable.jpg",
      category: "Tips",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Latest Travel Blogs"
          subtitle="Get inspired with our travel stories and tips"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-primary font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  <Link
                    to={`/blog/${post.id}`}
                    className="hover:text-primary transition"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-primary font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-block border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
