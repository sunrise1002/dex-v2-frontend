import { Color } from '@assets';
import { FarmIcon, LanguageIcon, LiquidityHomeIcon, SettingIcon, SwapHomeIcon } from '@components/Svg';
import { useTranslation } from '@pancakeswap/localization';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 72px;
  background-color: ${Color.baseColors.backgroundHome};
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
  color: ${Color.baseColors.white};
  z-index: 1;
`

const FunctionNameWrapper = styled.div`
  font-weight: 200;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
  color: ${Color.baseColors.white};
`

const FunctionWrapper = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-contents: center;
  margin: 0px 25px;
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
`

const SettingWrapper = styled.div`
  margin: 0px 12px;
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
`

const ConnectButton = styled.div`
  display: flex;
  width: 170px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background-color: ${Color.baseColors.white};
  border-radius: 28px;
  margin-left: 12px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  color: ${Color.baseColors.freinachtBlack};
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
`

const HomeHeader: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <ProjectNameWrapper>{t('thelabX.')}</ProjectNameWrapper>

      <FunctionsWrapper>
        <FunctionWrapper>
          <SwapHomeIcon fill={Color.baseColors.empireStateGrey} />
          <FunctionNameWrapper>{t('Swap')}</FunctionNameWrapper>
        </FunctionWrapper>

        <FunctionWrapper>
          <LiquidityHomeIcon fill={Color.baseColors.empireStateGrey} />
          <FunctionNameWrapper>{t('Liquidity')}</FunctionNameWrapper>
        </FunctionWrapper>

        <FunctionWrapper>
          <FarmIcon fill={Color.baseColors.empireStateGrey} />
          <FunctionNameWrapper>{t('Farm')}</FunctionNameWrapper>
        </FunctionWrapper>
      </FunctionsWrapper>

      <FunctionsWrapper2>
        <SettingWrapper>
          <LanguageIcon fill={Color.baseColors.cistern} />
        </SettingWrapper>

        <SettingWrapper>
          <SettingIcon fill={Color.baseColors.cistern} />
        </SettingWrapper>

        <ConnectButton>{t('Connect wallet')}</ConnectButton>
      </FunctionsWrapper2>
    </Container>
  )
}

export default HomeHeader