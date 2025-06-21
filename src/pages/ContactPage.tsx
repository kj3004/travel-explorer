import React from "react";
import SectionHeader from "../components/common/SectionHeader";
import ContactForm from "../components/sections/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader title="Contact Us" subtitle="Get in touch with our team" />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
