import { Color } from '@assets';
import { LightCircleImage, LightImage } from '@components/Svg';
import { useTranslation } from '@pancakeswap/localization';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 170px 40px 0px 40px;
  background-color: ${Color.baseColors.backgroundHome};
`
const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 157px 0px 40px;
`

const InfoRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-top: 72px;
`

const InfoBigText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  flex-wrap: wrap;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: ${Color.baseColors.white};
  white-space: pre-line;
`

const InfoMediumText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: ${Color.baseColors.bayWharf};
  margin-top: 15;
  white-space: pre-line;
`

const InfoLargeText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
  color: ${Color.baseColors.white};
  white-space: pre-line;
`

const InfoSmallText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: ${Color.baseColors.bayWharf};
  margin-top: 16;
`

const LightCircleImageWrapper = styled.div`
  margin: 250px 210px 400px 0px;
  align-self: flex-end;
`

const ContentBottom: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
    <>
      <Container>
        <LightImage />

        <InformationContainer>
          <InfoBigText>{t('Used by millions.\nTrusted with billions.')}</InfoBigText>
          <InfoMediumText>{t('Swap, earn, and build on the leading decentralized crypto\ntrading protocol.')}</InfoMediumText>

          <InfoRowContainer>
            <div>
              <InfoLargeText>{t('1.5M\nUsers')}</InfoLargeText>
              <InfoSmallText>{t('IN THE LAST 30 DAYS')}</InfoSmallText>
            </div>
            <div>
              <InfoLargeText>{t('3.2M\nStaked')}</InfoLargeText>
              <InfoSmallText>{t('TOTAL VALUE LOCKED')}</InfoSmallText>
            </div>
          </InfoRowContainer>

          <InfoRowContainer>
            <div>
              <InfoLargeText>{t('24M\nTrades')}</InfoLargeText>
              <InfoSmallText>{t('MADE IN THE LAST 30 DAYS')}</InfoSmallText>
            </div>
          </InfoRowContainer>
        </InformationContainer>
      </Container>

      <LightCircleImageWrapper>
        <LightCircleImage />
      </LightCircleImageWrapper>
    </>
  )
}

export default ContentBottom
