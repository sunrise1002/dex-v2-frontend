import { useCallback } from 'react';
import { Color } from '@assets';
import { FarmIcon, LanguageIcon, LiquidityHomeIcon, SettingIcon, SwapHomeIcon } from '@components';
import { useRouter } from 'next/router'
import { useTranslation } from '@pancakeswap/localization';
import styled from 'styled-components';

const Container = styled.div<StyledProps>`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 72px;
  background-color: ${({ isHomeScreen }) => isHomeScreen ? Color.baseColors.backgroundHome : Color.baseColors.lynxWhite};
`

const FunctionsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const FunctionsWrapper2 = styled(FunctionsWrapper)`
  justify-content: flex-end;
`

const ProjectNameWrapper = styled.div`
  flex: 1;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 23px;
  line-height: 32px;
  z-index: 1;
`

const ProjectNameWithColor = styled.div<StyledProps>`
  width: fit-content;
  block-size: fit-content;
  ${
    ({ isHomeScreen }) => isHomeScreen
    ? `color: ${Color.baseColors.white};`
    : `background: linear-gradient(226.36deg, #FFC371 -1.48%, #FF5F6D 64.19%, #E91FE5 117.74%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;`
  }
`

const FunctionNameWrapper = styled.div<StyledProps>`
  font-weight: 200;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
  color: ${({ isHomeScreen, isDisabled }) => isHomeScreen
    ? Color.baseColors.empireStateGrey
    : isDisabled ? Color.baseColors.cistern : Color.baseColors.wizardGrey};
`

const FunctionWrapper = styled.a<StyledProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-contents: center;
  margin: 0px 25px;
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
  ${({ isDisabled }) => isDisabled ? 'pointer-events: none;' : ''}
`

const SettingWrapper = styled.div`
  margin: 0px 12px;
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
`

const ConnectButton = styled.div<StyledProps>`
  display: flex;
  width: 170px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background-color: ${({ isHomeScreen }) => isHomeScreen ? Color.baseColors.white : Color.baseColors.freinachtBlack};
  border-radius: 28px;
  margin-left: 12px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  color: ${({ isHomeScreen }) => isHomeScreen ? Color.baseColors.freinachtBlack : Color.baseColors.white};
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
  &:active {
    opacity: 0.85;
    transform: translateY(1px);
  }
`

interface HeaderProps {
  isHomeScreen?: boolean;
}

interface StyledProps extends HeaderProps {
  isDisabled?: boolean;
}

const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({ isHomeScreen }) => {
  const { t } = useTranslation()
  const router = useRouter()

  const onGoToSwapScreen = useCallback(() => router.push('/swap'), [router])
  const onGoLiquidityScreen = useCallback(() => router.push('/liquidity'), [router])
  const onGoToFarmScreen = useCallback(() => router.push('/farm'), [router])

  const isDisableGoToSwapScreen = router?.pathname.includes('swap')
  const isDisableGoToLiquidityScreen = router?.pathname.includes('liquidity')
  const isDisableGoToFarmScreen = router?.pathname.includes('farm')

  return (
    <Container isHomeScreen={isHomeScreen}>
      <ProjectNameWrapper>
        <ProjectNameWithColor isHomeScreen={isHomeScreen}>
          {t('thelabX.')}
        </ProjectNameWithColor>
      </ProjectNameWrapper>

      <FunctionsWrapper>
        <FunctionWrapper onClick={onGoToSwapScreen} isDisabled={isDisableGoToSwapScreen}>
          <SwapHomeIcon
            fill={
              isHomeScreen
                ? Color.baseColors.empireStateGrey
                : isDisableGoToSwapScreen ? Color.baseColors.cistern : Color.baseColors.wizardGrey
            }
          />
          <FunctionNameWrapper isHomeScreen={isHomeScreen} isDisabled={isDisableGoToSwapScreen}>
            {t('Swap')}
          </FunctionNameWrapper>
        </FunctionWrapper>

        <FunctionWrapper onClick={onGoLiquidityScreen} isDisabled={isDisableGoToLiquidityScreen}>
          <LiquidityHomeIcon
            fill={
              isHomeScreen
                ? Color.baseColors.empireStateGrey
                : isDisableGoToLiquidityScreen ? Color.baseColors.cistern : Color.baseColors.wizardGrey
            }
          />
          <FunctionNameWrapper isHomeScreen={isHomeScreen} isDisabled={isDisableGoToLiquidityScreen}>
            {t('Liquidity')}
          </FunctionNameWrapper>
        </FunctionWrapper>

        <FunctionWrapper onClick={onGoToFarmScreen} isDisabled={isDisableGoToFarmScreen}>
          <FarmIcon
            fill={
              isHomeScreen
                ? Color.baseColors.empireStateGrey
                : isDisableGoToFarmScreen ? Color.baseColors.cistern : Color.baseColors.wizardGrey
            }
          />
          <FunctionNameWrapper isHomeScreen={isHomeScreen} isDisabled={isDisableGoToFarmScreen}>
            {t('Farm')}
          </FunctionNameWrapper>
        </FunctionWrapper>
      </FunctionsWrapper>

      <FunctionsWrapper2>
        <SettingWrapper>
          <LanguageIcon fill={isHomeScreen ? Color.baseColors.cistern : Color.baseColors.wizardGrey} />
        </SettingWrapper>

        <SettingWrapper>
          <SettingIcon fill={isHomeScreen ? Color.baseColors.cistern : Color.baseColors.wizardGrey} />
        </SettingWrapper>

        <ConnectButton isHomeScreen={isHomeScreen}>{t('Connect wallet')}</ConnectButton>
      </FunctionsWrapper2>
    </Container>
  )
}

export default Header