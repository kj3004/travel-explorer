import React from "react";

interface MapEmbedProps {
  location: string;
  height?: string;
  className?: string;
}

const MapEmbed: React.FC<MapEmbedProps> = ({
  location,
  height = "h-64",
  className = "",
}) => {
  // In a real app, you would use the Google Maps API
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    location
  )}&output=embed`;

  return (
    <div className={`w-full rounded-lg overflow-hidden ${height} ${className}`}>
      <iframe
        title="Tour location map"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapUrl}
        className="border-0"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
