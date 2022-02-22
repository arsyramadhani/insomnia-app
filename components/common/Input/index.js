import React from "react";

function Input({ type, placeholder, value, onChange, onBlur, error, ...rest }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      className={`form-input w-full select-auto rounded-md   focus:ring-offset-0
            ${
              error
                ? "border-red-600  focus:border-red-500 focus:ring-red-500"
                : "border-slate-400  focus:border-slate-400 focus:ring-slate-400"
            }
      `}
      {...rest}
    />
  );
}

export default Input;
