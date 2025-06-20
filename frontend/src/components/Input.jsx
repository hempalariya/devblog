import React from "react";

export default function Input({ type, placeholder, value, name, onChange, required = false }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className="border-b-1 text-xl border-blue-400 px-2 py-1 outline-0"
      placeholder={placeholder}
      onChange={onChange}
      required = {required}
    />
  );
}
