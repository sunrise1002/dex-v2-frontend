import React from "react"
import { Svg, SvgProps } from '@pancakeswap/uikit'

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M29 21.5H17C16.18 21.5 15.5 20.82 15.5 20C15.5 19.18 16.18 18.5 17 18.5H29C29.82 18.5 30.5 19.18 30.5 20C30.5 20.82 29.82 21.5 29 21.5Z" fill="#9B4CFF"/>
      <path d="M23 27.5H17C16.18 27.5 15.5 26.82 15.5 26C15.5 25.18 16.18 24.5 17 24.5H23C23.82 24.5 24.5 25.18 24.5 26C24.5 26.82 23.82 27.5 23 27.5Z" fill="#9B4CFF"/>
      <path opacity="0.4" d="M23 42C33.4934 42 42 33.4934 42 23C42 12.5066 33.4934 4 23 4C12.5066 4 4 12.5066 4 23C4 33.4934 12.5066 42 23 42Z" fill="#9B4CFF"/>
      <path d="M42.6 44C42.24 44 41.88 43.86 41.62 43.6L37.9 39.88C37.36 39.34 37.36 38.46 37.9 37.9C38.44 37.36 39.32 37.36 39.88 37.9L43.6 41.62C44.14 42.16 44.14 43.04 43.6 43.6C43.32 43.86 42.96 44 42.6 44Z" fill="#9B4CFF"/>
    </Svg>
  )
}

export default Icon

