import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface PasswordInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ name, value, onChange, required }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative">
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        name={name}
        className="input input-bordered w-full [input::-ms-reveal]:hidden"
        value={value}
        onChange={onChange}
        required={required}
        />
        <style jsx>{`
          input::-ms-reveal {
            display: none;
          }
        `}</style>
      <button
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
