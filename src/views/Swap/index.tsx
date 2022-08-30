import { Color } from '@assets'
import { Header, ReloadIcon } from '@components'
import { useTranslation } from '@pancakeswap/localization'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: ${Color.baseColors.lynxWhite};
  flex-direction: column;
`

const SwapFormContainer = styled.div`
  align-self: center;
  display: flex;
  background-color: ${Color.baseColors.white};
  flex-direction: column;
  padding: 32px;
  width: 40%;
  margin: 80px 0px;
  border-radius: 24px;
`

const SwapTextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

const SwapText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${Color.baseColors.abyssal};
`

const ReloadIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
  &:active {
    opacity: 0.85;
    transform: translateY(1px);
  }
`

const TextMedium = styled.div`
  text-align: left;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${Color.baseColors.cistern};
`

const Swap: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Header />

      <SwapFormContainer>
        <SwapTextContainer>
          <SwapText>{t('Swap')}</SwapText>
          <ReloadIconWrapper>
            <ReloadIcon stroke={Color.baseColors.bayWharf} />
          </ReloadIconWrapper>
        </SwapTextContainer>
        <TextMedium>{t('Trade tokens in an instant')}</TextMedium>
      </SwapFormContainer>
    </Container>
  )
}

export default Swap
