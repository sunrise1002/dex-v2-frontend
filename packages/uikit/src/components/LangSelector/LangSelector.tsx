import React from "react";
import styled from 'styled-components';
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import { LanguageIcon } from "../../../../../src/components/thelabX";
import MenuButton from "./MenuButton";
import { Colors } from "../../theme";
import { Language } from "./types";
import { Position } from "../Dropdown/types";
import { Scale } from "../Button/types";
import { Color } from "../../../../../src/assets";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  color: string;
  dropdownPosition?: Position;
  buttonScale?: Scale;
  hideLanguage?: boolean;
}

const StyledIconWrapper = styled(Button)`
  padding-top: 6px;
`

const LangSelector: React.FC<React.PropsWithChildren<Props>> = ({
  currentLang,
  langs,
  color,
  setLang,
  dropdownPosition = "bottom",
  buttonScale = "md",
  hideLanguage = false,
}) => (
  <Dropdown
    position={dropdownPosition}
    target={
      <StyledIconWrapper scale={buttonScale} variant="text" startIcon={<LanguageIcon color={color} width="24px" />}>
        {!hideLanguage && <Text color={color}>{currentLang?.toUpperCase()}</Text>}
      </StyledIconWrapper>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
