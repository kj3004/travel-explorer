import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
