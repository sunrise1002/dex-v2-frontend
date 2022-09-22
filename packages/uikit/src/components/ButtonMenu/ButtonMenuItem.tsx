import React from "react";
import styled from "styled-components";
import { Color } from "../../../../../src/assets";
import { PolymorphicComponent } from "../../util/polymorphic";
import Button from "../Button/Button";
import { BaseButtonProps, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: ${Color.baseColors.bayWharf};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const StyledActiveButton = styled(Button)`
  background-color: ${Color.baseColors.freinachtBlack};
  color: ${Color.baseColors.white};
`

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />;
  }

  return <StyledActiveButton as={as} variant={variant} {...props} />;
};

export default ButtonMenuItem;
