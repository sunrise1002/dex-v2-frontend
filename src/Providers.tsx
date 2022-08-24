import { Theme } from "@assets"
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'
import React from "react"
import { LanguageProvider } from "@pancakeswap/localization"

const StyledThemeProvider: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
  const { resolvedTheme } = useNextTheme()
  return (
    <ThemeProvider theme={resolvedTheme === 'dark' ? Theme.dark : Theme.light} {...props}>
      {children}
    </ThemeProvider>
  )
}

const Providers: React.FC<React.PropsWithChildren<{children: React.ReactNode}>> = ({ children }) => {
  return (
    <NextThemeProvider>
      <StyledThemeProvider>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </StyledThemeProvider>
    </NextThemeProvider>
  )
}

export default Providers