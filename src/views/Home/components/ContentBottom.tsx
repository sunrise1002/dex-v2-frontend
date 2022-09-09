import { Color, Images } from '@assets'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 157px 0px 157px;
  background: linear-gradient(222.32deg, #E91FE5 -8.78%, #FF5F6D 51.41%, #FFC371 101.8%);
`

const PhoneHomeImage = styled.img``

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
  color: ${Color.baseColors.lagoonMirror};
  margin-top: 15px;
  white-space: pre-line;
`

const ConnectButton = styled.div`
  display: flex;
  width: 170px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background-color: ${Color.baseColors.white};
  border-radius: 28px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  color: ${Color.baseColors.freinachtBlack};
  cursor: pointer;
  margin-top: 55px;
  &:hover {
    opacity: 0.65;
  }
`

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContentBottomProps {}

const ContentBottom: React.FC<React.PropsWithChildren<ContentBottomProps>> = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <PhoneHomeImage src={Images.homePhoneImage.src} />

      <div>
        <InfoBigText>{t('Trade, Swap, Earn\ncryptocurrency from anywhere.')}</InfoBigText>
        <InfoMediumText>{t('Connect your crypto wallet to start\nusing the app in seconds.')}</InfoMediumText>

        <ConnectButton>{t('Connect wallet')}</ConnectButton>
      </div>
    </Container>
  )
}

export default ContentBottom
