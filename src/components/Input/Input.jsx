import React from "react";

const Input = ({
  label,
  type,
  id,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label} </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default Input;
