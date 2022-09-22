import { useState } from 'react'
import { Button, Text, Flex, Message, Modal, InjectedModalProps, Checkbox } from '@pancakeswap/uikit'
import { useExpertModeManager } from 'state/user/hooks'
import { useTranslation } from '@pancakeswap/localization'
import { Color } from '@assets'
import styled from 'styled-components'

interface ExpertModalProps extends InjectedModalProps {
  setShowConfirmExpertModal: (boolean) => void
  setShowExpertModeAcknowledgement: (boolean) => void
}

const TurnOnButton = styled(Button)`
  background: ${Color.baseColors.freinachtBlack};
`

const CancelButton = styled(Button)`
  border: 2px solid ${Color.baseColors.freinachtBlack};
  color: ${Color.baseColors.freinachtBlack};
`

const ExpertModal: React.FC<React.PropsWithChildren<ExpertModalProps>> = ({
  setShowConfirmExpertModal,
  setShowExpertModeAcknowledgement,
}) => {
  const [, toggleExpertMode] = useExpertModeManager()
  const [isRememberChecked, setIsRememberChecked] = useState(false)

  const { t } = useTranslation()

  return (
    <Modal
      title={t('Expert Mode')}
      onBack={() => setShowConfirmExpertModal(false)}
      onDismiss={() => setShowConfirmExpertModal(false)}
      headerBackground={Color.baseColors.white}
      style={{ maxWidth: '360px' }}
    >
      <Message variant="warning" mb="24px">
        <Text color={Color.baseColors.bayWharf}>
          {t(
            "Expert mode turns off the 'Confirm' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.",
          )}
        </Text>
      </Message>
      <Text color={Color.baseColors.bayWharf} mb="24px">{t('Only use this mode if you know what you’re doing.')}</Text>
      <Flex alignItems="center" mb="24px">
        <Checkbox
          name="confirmed"
          type="checkbox"
          checked={isRememberChecked}
          onChange={() => setIsRememberChecked(!isRememberChecked)}
          scale="sm"
        />
        <Text color={Color.baseColors.bayWharf} ml="10px" style={{ userSelect: 'none' }}>
          {t('Don’t show this again')}
        </Text>
      </Flex>
      <TurnOnButton
        mb="8px"
        id="confirm-expert-mode"
        onClick={() => {
          // eslint-disable-next-line no-alert
          if (window.prompt(`Please type the word "confirm" to enable expert mode.`) === 'confirm') {
            toggleExpertMode()
            setShowConfirmExpertModal(false)
            if (isRememberChecked) {
              setShowExpertModeAcknowledgement(false)
            }
          }
        }}
      >
        {t('Turn On Expert Mode')}
      </TurnOnButton>
      <CancelButton
        variant="secondary"
        onClick={() => {
          setShowConfirmExpertModal(false)
        }}
      >
        {t('Cancel')}
      </CancelButton>
    </Modal>
  )
}

export default ExpertModal
