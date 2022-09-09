import React from "react"
import { Svg, SvgProps } from '@pancakeswap/uikit'

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M70.2996 17.7842L17.7842 70.2995L70.2996 70.2995M70.2996 17.7842L34 17.7841M70.2996 17.7842L70.2996 53.7789" strokeWidth="2"/>
    </Svg>
  );
}

export default Icon
