import React, { useState } from "react";
import Button from "../Button";
import { MdContentCopy } from "react-icons/md";
import Tooltip from "../Tooltip";
import Toast from "../Toast";
interface BusinessCardProps {
  photoUrl: string;
  name: string;
  jobTitle: string;
  data: any;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  photoUrl,
  name,
  jobTitle,
  data,
}) => {
  const [showDetails, setShowDetails] = useState(true);
  const [list, setList]: any = useState([]);
  const showToast = (type: string, title: string, description: string) => {
    const toastProperties = {
      id: list.length + 1,
      title,
      description,
      type,
    };
    setList([...list, toastProperties]);
  };

  const clipboardCopy = async (value: any) => {
    await navigator.clipboard.writeText(value);
    showToast("success", "Copied", "Copied with success");
  };

  return (
    <>
      <Toast toasties={list} position="top-right" setList={setList} />
      <div
        className={`mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 ${
          showDetails ? "hover:scale-100 rotate-y-180" : ""
        } w-1/2 overflow-y-auto m-8`}
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
            {Object.entries(data).map(([key, value]: any) => (
              <div className="flex mt-2 justify-between" key={key}>
                <strong className="capitalize">{key}: </strong>
                <div className="text-right w-full mr-4">
                  <span className="text-gray-500">{value}</span>
                </div>
                <Tooltip tooltip="Copy">
                  <button onClick={() => clipboardCopy(value)} className="">
                    <MdContentCopy className="w-6 h-6 transform transition-all duration-300 hover:scale-150" />
                  </button>
                </Tooltip>
              </div>
            ))}
            {/* <div className="flex mt-2 justify-between">
              <strong>E-Mail: </strong>
              <div className="text-right w-full mr-4">
                <span className="text-gray-500">{email}</span>
              </div>
              <Tooltip tooltip="Copy">
                <button onClick={() => clipboardCopy(email)}>
                  <MdContentCopy className="w-6 h-6" />
                </button>
              </Tooltip>
            </div> */}
          </div>
        )}

        <div className="p-2">
          <Button
            onClick={() => setShowDetails(!showDetails)}
            customClass="w-full"
          >
            Flip
          </Button>
        </div>
      </div>
    </>
  );
};

export default BusinessCard;
