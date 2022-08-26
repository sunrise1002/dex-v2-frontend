import { Color } from '@assets'
import styled from 'styled-components'
import ContentBottom from './components/ContentBottom'
import ContentTop from './components/ContentTop'
import HomeFooter from './components/HomeFooter'
import HomeHeader from './components/HomeHeader'

const Container = styled.div`
  display: flex;
  background-color: ${Color.baseColors.backgroundHome};
  flex-direction: column;
`

const Home: React.FC<React.PropsWithChildren> = () => {
  return (
    <Container>
      <HomeHeader />
      <ContentTop />
      <ContentBottom />
      <HomeFooter />
    </Container>
  )
}

export default Home
