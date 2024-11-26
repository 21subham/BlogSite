import { useId } from "react";
import React from "react";
import PropTypes from "prop-types";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black 
      outline-one focus:bg-whitetext-black outline-none
       focus:bg-gray-50  duration-200 border border-gray-200 w-full ${className}`}
      >
        {/* loop through options */}
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of strings for options
  label: PropTypes.string, // Optional label text
  className: PropTypes.string, // Additional classes for customization
  props: PropTypes.object, // Any additional props
};

export default React.forwardRef(Select);
