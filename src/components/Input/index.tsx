import React from "react";

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  className,
  onChange,
}) => {
  return (
    <input
      className={className}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
