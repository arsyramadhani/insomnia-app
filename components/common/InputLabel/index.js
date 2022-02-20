import React from "react";

const InputLabel = ({ htmlFor, children, ...rest }) => {
  return (
    <label className="text-sm font-medium" htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
};

export default InputLabel;
