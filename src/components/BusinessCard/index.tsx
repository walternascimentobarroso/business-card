import React, { useState } from "react";
import { MdContentCopy, MdLockOpen, MdLockOutline } from "react-icons/md";
import { useModal } from "../../hooks/useModal";

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
  const { openModal, closeModal, ModalWrapper } = useModal();

  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div
        className={`mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 ${
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
            <div className="uppercase text-indigo-500 font-semibold">
              {jobTitle}
            </div>
            <div className="flex mt-2">
              <strong>phone: </strong>
              <span className="text-gray-500">{phone}</span>
              <MdLockOpen onClick={openModal} />
              <MdContentCopy />
            </div>
            <div className="flex mt-2">
              <strong>E-Mail: </strong>
              <span className="text-gray-500">{email}</span>
              <MdLockOutline />
              <MdContentCopy />
            </div>
          </div>
        )}
      </div>
      <ModalWrapper title="Role">
        <span>Senha para desbloquear</span>
      </ModalWrapper>
    </>
  );
};

export default BusinessCard;
