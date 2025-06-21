import React, { useState } from "react";

interface FilterOption {
  id: string;
  name: string;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  type?: "checkbox" | "radio";
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  type = "checkbox",
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (optionId: string) => {
    if (type === "radio") {
      setSelectedOptions([optionId]);
    } else {
      setSelectedOptions((prev) =>
        prev.includes(optionId)
          ? prev.filter((id) => id !== optionId)
          : [...prev, optionId]
      );
    }
  };

  return (
    <div className="mb-6">
      <h4 className="font-medium mb-2">{title}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.id} className="flex items-center space-x-3">
            <input
              type={type}
              name={type === "radio" ? title.toLowerCase() : option.id}
              checked={selectedOptions.includes(option.id)}
              onChange={() => handleOptionChange(option.id)}
              className={`rounded ${
                type === "checkbox" ? "text-teal-600" : "text-teal-600"
              } focus:ring-teal-500`}
            />
            <span className="text-gray-700">{option.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
