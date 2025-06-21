import React, { useState } from "react";
import Button from "../common/Button";

interface EnquiryFormProps {
  tourId: number;
  tourTitle: string;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ tourId, tourTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    tourId,
    tourTitle,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real app, you would send the data to your backend
      console.log("Form submitted:", formData);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        tourId,
        tourTitle,
      });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="p-4 bg-green-50 text-green-700 rounded-lg">
        <h3 className="font-bold mb-2">Thank you for your enquiry!</h3>
        <p>We'll get back to you soon regarding your tour: {tourTitle}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-bold text-lg mb-2">Enquire About This Tour</h3>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.name
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-teal-500"
          }`}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.email
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-teal-500"
          }`}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.message
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-teal-500"
          }`}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <input type="hidden" name="tourId" value={tourId} />
      <input type="hidden" name="tourTitle" value={tourTitle} />

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </Button>
    </form>
  );
};

export default EnquiryForm;
