import { Button, ButtonProps } from '@pancakeswap/uikit'
import { useWallet } from 'hooks/useWallet'
import styled from 'styled-components'
// @ts-ignore
// eslint-disable-next-line import/extensions
import { Color } from '@assets'
import { useActiveHandle } from 'hooks/useEagerConnect.bmp'
import Trans from './Trans'

const ButtonWrapper = styled(Button)`
  background: ${Color.baseColors.freinachtBlack};
  border-width: 0px;
`

const ConnectWalletButton = ({ children, ...props }: ButtonProps) => {
  const handleActive = useActiveHandle()
  const { onPresentConnectModal } = useWallet()

  const handleClick = () => {
    if (typeof __NEZHA_BRIDGE__ !== 'undefined') {
      handleActive()
    } else {
      onPresentConnectModal()
    }
  }

  return (
    <ButtonWrapper onClick={onPresentConnectModal} {...props}>
      {children || <Trans>Connect Wallet</Trans>}
    </ButtonWrapper>
  )
}

export default ConnectWalletButton
