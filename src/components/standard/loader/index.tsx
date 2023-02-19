import React from "react";
import { Bars, Circles } from "react-loader-spinner";

interface Props {
  height: string;
  width: string;
  color: string;
  circle?: boolean;
}
const Loader: React.FC<Props> = ({ height, width, color, circle }) => {
  return (
    <div>
      {circle ? (
        <Circles
          height={height || "80"}
          width={width || "80"}
          color={color || "#4fa94d"}
        />
      ) : (
        <Bars
          height={height || "80"}
          width={width || "80"}
          color={color || "#4fa94d"}
        />
      )}
    </div>
  );
};

export default Loader;
