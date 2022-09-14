import { Color } from '@assets'
import { Box, Flex, Card } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledSwapContainer = styled(Flex)<{ $isChartExpanded: boolean }>`
  flex-shrink: 0;
  height: fit-content;
  padding: 0 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0 40px;
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    ${({ $isChartExpanded }) => ($isChartExpanded ? 'padding: 0 120px' : 'padding: 0 40px')};
  }
`

export const StyledInputCurrencyWrapper = styled(Box)`
  width: 328px;
`

export const BodyWrapper = styled(Card).attrs({ background: Color.baseColors.white })`
  border-radius: 24px;
  max-width: 436px;
  width: 100%;
  z-index: 1;
  background: ${Color.baseColors.white};
  border-width: 0px;
`

export function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
