import { Color } from '@assets'
import { Header } from 'components'
import styled from 'styled-components'
import ContentBottom from './components/ContentBottom'
import ContentMiddle from './components/ContentMiddle'
import ContentTop from './components/ContentTop'
import HomeFooter from './components/HomeFooter'

const Container = styled.div`
  display: flex;
  background-color: ${Color.baseColors.backgroundHome};
  flex-direction: column;
`

const Home: React.FC<React.PropsWithChildren> = () => {
  return (
    <Container>
      <Header isHomeScreen />
      <ContentTop />
      <ContentMiddle />
      <ContentBottom />
      <HomeFooter />
    </Container>
  )
}

export default Home
