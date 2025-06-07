import React from 'react';

interface InputBoxProps {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value : string;
  name: string;
  type? : string;
}

export default function InputBox({ label, placeholder, onChange, value, name }: InputBoxProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-white pl-1">
        {label}
      </label>
      <input 
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="py-2 px-3 rounded-md border border-blue-200 focus:border-white focus:ring-1 focus:ring-white outline-none text-white"
      />
    </div>
  );
}
