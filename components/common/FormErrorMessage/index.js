import React from "react";

const FormErrorMessage = ({ message }) => {
  return (
    <div className="max-w-full overflow-clip whitespace-normal break-all ">
      <p className="text-xs font-semibold text-red-800">{message}</p>
    </div>
  );
};

export default FormErrorMessage;
