import { Color } from '@assets';
import { ArrowHomeIcon, CoinbaseIcon, FortmaticIcon, MetamaskIcon, WalletConnectIcon } from '@components';
import { useTranslation } from '@pancakeswap/localization';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 72px;
  background-color: ${Color.baseColors.backgroundHome};
`

const SmallTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.baseColors.cistern};
  margin-top: 87px;
  padding: 0px;
`

const LargeTitleWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 96px;
  line-height: 112px;
  color: ${Color.baseColors.white};
  margin: 0px;
  padding: 0px;
  background-color: transparent;
  z-index: 1;
  white-space: pre-line;
`

const GradientComponentLarge = styled.div`
  position: absolute;
  width: 598px;
  height: 598px;
  left: -296px;
  top: 179px;
  background: linear-gradient(222.32deg, rgba(233, 31, 229, 0.5) -8.78%, rgba(255, 95, 109, 0.5) 51.41%, rgba(255, 195, 113, 0.5) 101.8%);
  filter: blur(250px);
  z-index: 0;
`

const GradientComponentSmall = styled.div`
  position: absolute;
  width: 312px;
  height: 312px;
  left: -156px;
  top: 322px;
  background: linear-gradient(222.32deg, rgba(233, 31, 229, 0.7) -8.78%, rgba(255, 95, 109, 0.7) 51.41%, rgba(255, 195, 113, 0.7) 101.8%);
  filter: blur(100px);
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 72px;
  z-index: 1;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 56px;
  border: 1px solid ${Color.baseColors.white};
  border-radius: 28px;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
  &:active {
    opacity: 0.85;
    transform: translateY(1px);
  }
`

const IntroductionContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
  z-index: 1;
`

const IntroductionText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.baseColors.cistern};
  white-space: pre-line;
`

const LogosContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-top: 270px;
  padding: 0px 100px;
  z-index: 1;
`

const ContentTop: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <SmallTitleWrapper>{t('THELABX Decentralized')}</SmallTitleWrapper>
      <LargeTitleWrapper>{t('Decentralized\nBlockchain for the Future.')}</LargeTitleWrapper>

      <GradientComponentSmall />
      <GradientComponentLarge/>

      <ButtonsContainer>
        <ButtonWrapper>{t('Swap')}</ButtonWrapper>
        <ButtonWrapper>{t('Liquidity')}</ButtonWrapper>
      </ButtonsContainer>

      <IntroductionContainer>
        <ArrowHomeIcon stroke={Color.baseColors.white} />
        <IntroductionText>{t('Swap, liquidity, earn, leverage all on\none decentralized,community\ndriven platform.')}</IntroductionText>
      </IntroductionContainer>

      <LogosContainer>
        <MetamaskIcon fill={Color.baseColors.charmedChalice} />
        <CoinbaseIcon fill={Color.baseColors.charmedChalice} />
        <WalletConnectIcon fill={Color.baseColors.charmedChalice} />
        <FortmaticIcon fill={Color.baseColors.charmedChalice} />
      </LogosContainer>
    </Container>
  )
}

export default ContentTop