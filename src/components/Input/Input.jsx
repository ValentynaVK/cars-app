import React from "react";

const Input = ({
  label,
  name,
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
        name={name}
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
