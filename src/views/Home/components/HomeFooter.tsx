import { Color } from '@assets'
import { CopyrightIcon, GoogleIcon, TwitterIcon } from '@components'
import { useTranslation } from '@pancakeswap/localization'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${Color.baseColors.backgroundHome};
  padding: 172px 41px 70px 41px;
`
const Line = styled.hr`
  width: 100%;
  border: 1px solid ${Color.baseColors.freinachtBlack};
`

const RowContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 68px;
  padding: 0px 115px;
`

const RowWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`

const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const CopyrightText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.baseColors.wizardGrey};
  white-space: pre-line;
`

const CopyrightText2 = styled(CopyrightText)`
  margin-top: 15px;
`

const ProjectNameText = styled.div`
  flex: 1;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  line-height: 40px;
  text-align: center;
  color: ${Color.baseColors.white};
`

const CopyrightIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

const GoogleIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 36px;
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
`

const TwitterIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
`

const SocialMediaWrapper = styled(RowWrapper)`
  justify-content: flex-end;
`

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeFooterProps {}

const HomeFooter: React.FC<React.PropsWithChildren<HomeFooterProps>> = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Line />
      <RowContainer>
        <CopyrightContainer>
          <RowWrapper>
            <CopyrightIconWrapper>
            <CopyrightIcon color={Color.baseColors.wizardGrey} />
            </CopyrightIconWrapper>
            <CopyrightText>{t('Copyright 2022 thelabX')}</CopyrightText>
          </RowWrapper>
          <CopyrightText2>{t('All rights reserved | Privacy | Terms')}</CopyrightText2>
        </CopyrightContainer>
        
        <ProjectNameText>{t('thelabX.')}</ProjectNameText>

        <SocialMediaWrapper>
          <GoogleIconWrapper>
            <GoogleIcon color={Color.baseColors.wizardGrey} />
          </GoogleIconWrapper>
          <TwitterIconWrapper>
            <TwitterIcon color={Color.baseColors.wizardGrey} />
          </TwitterIconWrapper>
        </SocialMediaWrapper>
      </RowContainer>
    </Container>
  )
}

export default HomeFooter
