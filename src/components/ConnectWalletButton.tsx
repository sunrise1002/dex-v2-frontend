import { Button, useWalletModal, ButtonProps } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Color } from '@assets'
import Trans from './Trans'

const ButtonWrapper = styled(Button)`
  background: ${Color.baseColors.freinachtBlack};
  border-width: 0px;
`

const ConnectWalletButton = ({ children, ...props }: ButtonProps) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <ButtonWrapper onClick={onPresentConnectModal} {...props}>
      {children || <Trans>Connect Wallet</Trans>}
    </ButtonWrapper>
  )
}

export default ConnectWalletButton
