import React from "react";

const Button = ({ isLoading = false, variant, children, ...rest }) => {
  return (
    <button
      type="submit"
      {...rest}
      disabled={isLoading && "disabled"}
      className={`inline-flex h-10  ${
        !isLoading && "hover:bg-zinc-600 active:bg-zinc-700"
      } 
      ${variant === "block" ? "w-auto" : "max-w-fit px-4"} 
      items-center justify-center rounded-md bg-zinc-500 text-center text-sm font-semibold leading-6 text-white   transition-colors disabled:bg-zinc-300`}
    >
      {isLoading && <LoadingSVG />}
      {isLoading && "Processing..."}
      {!isLoading && children}
    </button>
  );
};

export default Button;
const LoadingSVG = () => {
  return (
    <svg
      className="mt-0 mr-2 h-5 w-5 animate-spin  text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};
