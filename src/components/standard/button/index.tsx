import classNames from "classnames";
import React from "react";
import Loader from "../loader";

interface Props {
  children: string;
  outline?: boolean;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}
const Button: React.FC<Props> = ({
  children,
  outline,
  className,
  onClick,
  loading,
}) => {
  return (
    <button
      className={classNames(
        "active:scale-95 duration-300 rounded-5 min-w-80 font-bold py-2 px-2",
        outline
          ? "text-primary border-2 border-primary"
          : "text-white bg-primary",
        className || ""
      )}
      onClick={loading ? () => {} : onClick}
    >
      {loading ? (
        <div className="flex justify-center">
          <Loader color="#fff" height="25" width="50" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
