import React from "react"
import { Svg, SvgProps } from '@pancakeswap/uikit'

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width="166" height="31" viewBox="0 0 166 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M33.5033 9.09133C27.438 9.09133 22.7447 13.6403 22.7447 19.7777C22.7447 25.9152 27.3658 30.4641 33.5033 30.4641C39.6407 30.4641 44.3341 25.843 44.3341 19.7777C44.3341 13.7125 39.7129 9.09133 33.5033 9.09133ZM33.5755 25.9874C30.1096 25.9874 27.6546 23.3158 27.6546 19.7055C27.6546 16.0952 30.1096 13.4236 33.5755 13.4236C37.0413 13.4236 39.5685 16.0952 39.5685 19.7055C39.5685 23.3158 36.9691 25.9874 33.5755 25.9874ZM45.6338 13.7125H48.5942V30.0309H53.4319V9.45236H45.6338V13.7125ZM10.6864 13.4959C13.2136 13.4959 15.2353 15.0122 15.9574 17.3227H21.0117C20.0731 12.4128 16.0296 9.01912 10.6864 9.01912C4.69335 9.09133 0 13.6403 0 19.7777C0 25.9152 4.62114 30.4641 10.7586 30.4641C15.9574 30.4641 20.0731 27.1427 21.0117 22.1605H15.9574C15.2353 24.4711 13.2136 26.0596 10.7586 26.0596C7.29274 26.0596 4.83776 23.388 4.83776 19.7777C4.83776 16.1675 7.22053 13.4959 10.6864 13.4959ZM136.685 17.756L133.147 17.2505C131.486 17.0339 130.258 16.4563 130.258 15.1566C130.258 13.7125 131.847 12.9904 133.941 12.9904C136.251 12.9904 137.768 14.0013 138.057 15.5898H142.678C142.172 11.4741 138.995 9.01912 134.085 9.01912C129.031 9.01912 125.637 11.6185 125.637 15.301C125.637 18.7668 127.803 20.8608 132.28 21.4384L135.818 21.9439C137.551 22.1605 138.49 22.8825 138.49 24.11C138.49 25.7708 136.829 26.4206 134.518 26.4206C131.702 26.4206 130.114 25.2653 129.825 23.5324H125.132C125.565 27.5759 128.742 30.3919 134.446 30.3919C139.645 30.3919 143.183 28.0091 143.183 23.8934C143.183 20.2832 140.656 18.4058 136.685 17.756ZM51.0492 1.00434C49.3162 1.00434 47.9443 2.30403 47.9443 4.03696C47.9443 5.76989 49.244 7.06958 51.0492 7.06958C52.7821 7.06958 54.154 5.76989 54.154 4.03696C54.154 2.30403 52.7821 1.00434 51.0492 1.00434ZM121.377 16.5285C121.377 12.0517 118.633 9.09133 112.929 9.09133C107.514 9.09133 104.481 11.8351 103.831 16.023H108.597C108.813 14.3623 110.113 13.0626 112.857 13.0626C115.312 13.0626 116.467 14.1457 116.467 15.4454C116.467 17.1783 114.301 17.6116 111.557 17.9004C107.875 18.3336 103.326 19.5611 103.326 24.3267C103.326 28.0091 106.07 30.3919 110.474 30.3919C113.94 30.3919 116.034 28.9478 117.117 26.7094C117.261 28.7312 118.778 30.0309 120.944 30.0309H123.76V25.7708H121.377V16.5285ZM116.612 21.6551C116.612 24.3989 114.229 26.4206 111.268 26.4206C109.463 26.4206 107.947 25.6986 107.947 24.0378C107.947 22.0161 110.402 21.4384 112.64 21.2218C114.806 21.0052 115.962 20.572 116.612 19.6333V21.6551ZM91.1953 9.09133C88.5237 9.09133 86.2853 10.1744 84.6968 12.0517V0.78772H79.9313V30.0309H84.6246V27.3593C86.2131 29.3088 88.5237 30.4641 91.1953 30.4641C96.9717 30.4641 101.304 25.9152 101.304 19.7777C101.304 13.6403 96.8995 9.09133 91.1953 9.09133ZM90.4733 25.9874C87.0074 25.9874 84.5524 23.3158 84.5524 19.7055C84.5524 16.0952 87.0796 13.4236 90.5455 13.4236C94.0113 13.4236 96.4663 16.0952 96.4663 19.7055C96.4663 23.388 93.9391 25.9874 90.4733 25.9874ZM68.4506 9.09133C65.3458 9.09133 63.3241 10.391 62.0966 12.124V9.45236H57.331V30.0309H62.0966V18.839C62.0966 15.662 64.1183 13.4959 67.0787 13.4959C69.8225 13.4959 71.5555 15.4454 71.5555 18.2614V30.0309H76.321V17.9004C76.321 12.7016 73.6494 9.09133 68.4506 9.09133ZM166 19.1279C166 13.207 161.668 9.09133 155.891 9.09133C149.754 9.09133 145.205 13.7125 145.205 19.7777C145.205 26.204 150.043 30.4641 155.963 30.4641C160.946 30.4641 164.845 27.5037 165.856 23.3158H160.873C160.151 25.1209 158.418 26.204 156.036 26.204C152.931 26.204 150.62 24.3267 150.115 20.933H166V19.1279ZM150.404 17.5394C151.198 14.6511 153.292 13.2792 155.819 13.2792C158.563 13.2792 160.585 14.7956 161.09 17.5394H150.404Z" />
    </Svg>
  )
}

export default Icon