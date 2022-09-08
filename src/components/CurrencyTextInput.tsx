import { Color } from '@assets'
import { Header, ReloadIcon } from 'components'
import { useTranslation } from '@pancakeswap/localization'
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
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 12px 16px;
  border: 1px solid ${Color.baseColors.lagoonMirror};
  border-radius: 12px;
  margin-top: 8px;
`

const TextFrom = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.baseColors.bayWharf};
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const TextInputWrapper = styled(RowContainer)`
  margin-top: 10;
`

const TextInput = styled.input<{ type: string, placeholder: string }>`
  display: flex;
  flex:1;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: ${Color.baseColors.abyssal};
  ::placeholder {
    color: ${Color.baseColors.cistern};
  }
  background-color: transparent;
  border-color: transparent;
  border-width: 0px;
  padding: 0;
  margin-right: 15px;
`

const MaxButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 32px;
  border-radius: 28px;
  background-color: ${Color.baseColors.freinachtBlack};
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: ${Color.baseColors.white};
  cursor: pointer;
  &:active {
    opacity: 0.85;
    transform: translateY(1px);
  }
`

const CurrencyTextInput: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <TextMedium>{`${t('Balance')}: 1.21`}</TextMedium>
      <TextInputContainer>
        <TextFrom>{t('From')}</TextFrom>

        <TextInputWrapper>
          <TextInput type='text' placeholder='0.0' />

          <RowContainer>
            <MaxButton>{t('Max')}</MaxButton>
          </RowContainer>
        </TextInputWrapper>
      </TextInputContainer>
    </Container>
  )
}

export default CurrencyTextInput
