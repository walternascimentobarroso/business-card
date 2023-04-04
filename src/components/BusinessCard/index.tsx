import React from "react";

interface Props {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
}

const BusinessCard: React.FC<Props> = ({
  name,
  title,
  email,
  phone,
  address,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">{title}</p>
      <p className="text-gray-700 mb-2">{email}</p>
      <p className="text-gray-700 mb-2">{phone}</p>
      <p className="text-gray-700">{address}</p>
    </div>
  );
};

export default BusinessCard;
