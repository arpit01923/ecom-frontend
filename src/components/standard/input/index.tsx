import classNames from "classnames";
import React from "react";

interface Props {
  label?: string;
  value: string;
  onChange: (e: any) => void;
  error?: string;
  type: string;
  icon?: any;
  iconLeft?: any;
  placeholder?: string;
}
const Input: React.FC<Props> = ({
  label,
  value,
  onChange,
  error,
  type,
  icon,
  iconLeft,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label>{label}</label>}
      <div className="relative">
        <div className="absolute left-3 top-2">{iconLeft}</div>
        <input
          type={type}
          placeholder={placeholder}
          className={classNames(
            "px-4 py-1 rounded-5 border-2 focused:border-primary focused:outline-primary w-full",
            iconLeft ? "pl-10" : "",
            icon ? "pr-10" : ""
          )}
          value={value}
          onChange={onChange}
        />
        <div className="absolute right-3 top-2">{icon}</div>
      </div>
      {error && <div className="-mt-2 text-sm text-secondary">{error}</div>}
    </div>
  );
};

export default Input;
