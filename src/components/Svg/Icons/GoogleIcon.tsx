import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20.2275 8.58642C18.7734 7.18263 16.9239 6.46785 14.864 6.46785C11.2097 6.46785 8.11654 8.9599 7.01323 12.3084C6.73261 13.1584 6.57317 14.0664 6.57317 15.0001C6.57317 15.9338 6.7326 16.8417 7.0132 17.6917C8.11652 21.0402 11.2097 23.5322 14.864 23.5322C16.7517 23.5322 18.3589 23.03 19.6153 22.18C21.1012 21.1754 22.0898 19.6751 22.415 17.9043H14.864V12.4243H28.0783C28.2441 13.3516 28.3334 14.3175 28.3334 15.3221C28.3334 19.6365 26.8028 23.2683 24.1497 25.7346C21.8283 27.8982 18.6522 29.1667 14.864 29.1667C9.37932 29.1667 4.63443 25.9921 2.32575 21.3622C1.37549 19.4497 0.833374 17.2861 0.833374 15.0001C0.833374 12.7141 1.37547 10.5505 2.32572 8.63795C4.6344 4.00802 9.3793 0.833374 14.864 0.833374C18.6459 0.833374 21.8219 2.23716 24.2518 4.52315L20.2275 8.58642Z" />
    </Svg>
  );
};

export default Icon;