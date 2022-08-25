import { Color } from '@assets'
import styled from 'styled-components'
import HomeHeader from './components/HomeHeader'

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: ${Color.baseColors.backgroundHome}
`

const Home: React.FC<React.PropsWithChildren> = () => {
  return <Container>
    <HomeHeader />
  </Container>
}

export default Home
