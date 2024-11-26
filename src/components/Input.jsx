import React, { useId } from "react";
import propTypes from "prop-types";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white
            text-black outline-none focus:bg-gray-50duration-200 border
             border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;

Input.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string,
  className: propTypes.string,
  id: propTypes.string,
};
