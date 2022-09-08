import { Color } from '@assets';
import { BoxHomeIcon, LightCircleImage, LightImage, LockHomeIcon, MedalHomeIcon, SearchHomeIcon } from 'components';
import { useTranslation } from '@pancakeswap/localization';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 170px 157px 0px 157px;
  background-color: ${Color.baseColors.backgroundHome};
`
const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  margin-top: 15px;
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

const InfoSmallText1 = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: ${Color.baseColors.bayWharf};
  margin-top: 16px;
`

const InfoSmallText2 = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: ${Color.baseColors.cistern};
  margin-top: 30px;
  white-space: pre-line;
`

const Container2 = styled(Container)`
  padding: 170px 157px 172px 157px;
`

const ContentMiddle: React.FC<React.PropsWithChildren> = () => {
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
              <InfoSmallText1>{t('IN THE LAST 30 DAYS')}</InfoSmallText1>
            </div>
            <div>
              <InfoLargeText>{t('3.2M\nStaked')}</InfoLargeText>
              <InfoSmallText1>{t('TOTAL VALUE LOCKED')}</InfoSmallText1>
            </div>
          </InfoRowContainer>

          <InfoRowContainer>
            <div>
              <InfoLargeText>{t('24M\nTrades')}</InfoLargeText>
              <InfoSmallText1>{t('MADE IN THE LAST 30 DAYS')}</InfoSmallText1>
            </div>
          </InfoRowContainer>
        </InformationContainer>
      </Container>

      <Container2>
        <InformationContainer>
          <InfoBigText>{t('Fully decentralized.\nCompletely secure.')}</InfoBigText>
          <InfoMediumText>{t('We have all been in this industry too long not to make the\nsecurity of your funds our absolute top priority')}</InfoMediumText>

          <InfoRowContainer>
            <div>
              <SearchHomeIcon />
              <InfoSmallText2>{t('Constant reviews and\ntesting of our platform')}</InfoSmallText2>
            </div>
            <div>
              <MedalHomeIcon />
              <InfoSmallText2>{t('Fully decentralized\nand non-custodial')}</InfoSmallText2>
            </div>
          </InfoRowContainer>

          <InfoRowContainer>
            <div>
              <BoxHomeIcon />
              <InfoSmallText2>{t('Your funds are as\nsecure as possible')}</InfoSmallText2>
            </div>
            <div>
              <LockHomeIcon />
              <InfoSmallText2>{t('Built by seasoned\ncrypto veterans')}</InfoSmallText2>
            </div>
          </InfoRowContainer>
        </InformationContainer>

        <LightCircleImage />
      </Container2>
    </>
  )
}

export default ContentMiddle
