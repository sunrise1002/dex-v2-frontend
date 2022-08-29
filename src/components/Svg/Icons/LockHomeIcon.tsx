import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity="0.4" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#2BBFDF"/>
      <path d="M31.5 21.46V20C31.5 18.14 31.5 12.5 24 12.5C16.5 12.5 16.5 18.14 16.5 20V21.46C14.06 22 13.24 23.58 13.24 27V29C13.24 33.4 14.6 34.76 19 34.76H29C33.4 34.76 34.76 33.4 34.76 29V27C34.76 23.58 33.94 22 31.5 21.46ZM24 30.2C22.78 30.2 21.8 29.22 21.8 28C21.8 26.78 22.78 25.8 24 25.8C25.22 25.8 26.2 26.78 26.2 28C26.2 29.22 25.22 30.2 24 30.2ZM28.5 21.24H19.5V20C19.5 17.08 20.22 15.5 24 15.5C27.78 15.5 28.5 17.08 28.5 20V21.24Z" fill="#2BBFDF"/>
    </Svg>
  );
};

export default Icon;
