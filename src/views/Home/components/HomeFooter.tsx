import { Color, Images } from '@assets';
import { useTranslation } from '@pancakeswap/localization';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: ${Images.homeFooterImage.height}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-size: cover;
  background-image: url(${Images.homeFooterImage.src})
`

const HomeFooter: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
    <Container>
    </Container>
  )
}

export default HomeFooter
