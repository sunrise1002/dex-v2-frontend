import { Color } from '@assets'
import { Header, ReloadIcon } from '@components'
import { useTranslation } from '@pancakeswap/localization'
import { text } from 'stream/consumers'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const TextMedium = styled.div`
  text-align: right;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${Color.baseColors.cistern};
`

const TextInputContainer = styled.div`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${Color.baseColors.lagoonMirror};
  border-radius: 12px;
`

const TextFrom = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.baseColors.bayWharf};
`

const CurrencyTextInput: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <TextMedium>{`${t('Balance')}: 1.21`}</TextMedium>
      <TextInputContainer>
        <TextFrom>{t('From')}</TextFrom>
      </TextInputContainer>
    </Container>
  )
}

export default CurrencyTextInput
