import React from 'react';
import PasswordInput from './PasswordInput';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, value, onChange, required = false }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      {type === 'password' ? (
        <PasswordInput name={name} value={value} onChange={onChange} required={required} />
      ) : (
        <input
          type={type}
          name={name}
          className="input input-bordered"
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};

export default InputField;
