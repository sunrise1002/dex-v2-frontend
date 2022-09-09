import React from "react"
import { Svg, SvgProps } from '@pancakeswap/uikit'

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11.9998 2.00012C6.48623 2.00012 2 6.48412 2 11.9991C2 17.5119 6.48623 21.9982 11.9998 21.9982C17.514 21.9982 22 17.5119 22 11.9991C22 6.48412 17.514 2.00012 11.9998 2.00012ZM11.9998 19.7704C7.71409 19.7704 4.22779 16.2843 4.22779 11.9992C4.22779 7.7122 7.71409 4.22612 11.9998 4.22612C16.286 4.22612 19.7723 7.71225 19.7723 11.9992C19.7723 16.2843 16.286 19.7704 11.9998 19.7704Z" />
      <path d="M15.2821 13.8106C14.6433 14.9068 13.4554 15.5868 12.1822 15.5868C10.2049 15.5868 8.5943 13.9766 8.5943 11.9993C8.5943 10.0204 10.2049 8.4096 12.1822 8.4096C13.4555 8.4096 14.6433 9.09211 15.2821 10.1861L15.3647 10.3291H17.7747L17.63 9.94111C17.2106 8.8301 16.4748 7.88547 15.5007 7.21123C14.5242 6.53525 13.3772 6.17664 12.1822 6.17664C8.97202 6.17664 6.36145 8.78944 6.36145 11.9993C6.36145 15.2094 8.97202 17.8197 12.1822 17.8197C13.3772 17.8197 14.5241 17.4623 15.5007 16.7853C16.4748 16.1109 17.2106 15.1666 17.63 14.0556L17.7747 13.6674H15.3647L15.2821 13.8106Z" />
    </Svg>
  )
}

export default Icon