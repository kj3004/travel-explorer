import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-primary hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
