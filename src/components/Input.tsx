import { useId, InputHTMLAttributes, ForwardedRef } from "react";
import { forwardRef } from "react";
import React from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  className?: string;
}

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white
            text-black outline-none focus:bg-gray-50 duration-200 border
            border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
