import React, { useState } from "react";

interface BusinessCardProps {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  photoUrl: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  name,
  jobTitle,
  email,
  phone,
  photoUrl,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      className={`max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transform transition duration-500 hover:scale-105 ${
        showDetails ? "hover:scale-100 rotate-y-180" : ""
      }`}
      onClick={handleClick}
    >
      <div className="relative">
        <img
          className="h-48 w-full object-cover rounded-t-xl"
          src={photoUrl}
          alt={`Foto de ${name}`}
        />
        <div className="absolute top-0 left-0 px-4 py-2 bg-white text-gray-800 font-semibold">
          {name}
        </div>
      </div>
      {showDetails && (
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {jobTitle}
          </div>
          <p className="mt-2 text-gray-500">{phone}</p>
          <p className="mt-2 text-gray-500">{email}</p>
        </div>
      )}
    </div>
  );
};

export default BusinessCard;
