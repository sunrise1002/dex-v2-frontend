import { Trade, TradeType, Currency } from '@pancakeswap/sdk'
import { Text } from '@pancakeswap/uikit'
import { Field } from 'state/swap/actions'
import { useTranslation } from '@pancakeswap/localization'
import { useUserSlippageTolerance } from 'state/user/hooks'
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown } from 'utils/exchange'
import { AutoColumn } from 'components/Layout/Column'
import QuestionHelper from 'components/QuestionHelper'
import { TOTAL_FEE, LP_HOLDERS_FEE, TREASURY_FEE, BUYBACK_FEE } from 'config/constants/info'
import { RowBetween, RowFixed } from 'components/Layout/Row'
import styled from 'styled-components'
import FormattedPriceImpact from './FormattedPriceImpact'
import SwapRoute from './SwapRoute'

const StyledRowBetween = styled(RowBetween)`
  background: transparent;
`

const StyledRowFixed = styled(RowFixed)`
  background: transparent;
`

function TradeSummary({
  trade,
  allowedSlippage,
}: {
  trade: Trade<Currency, Currency, TradeType>
  allowedSlippage: number
}) {
  const { t } = useTranslation()
  const { priceImpactWithoutFee, realizedLPFee } = computeTradePriceBreakdown(trade)
  const isExactIn = trade.tradeType === TradeType.EXACT_INPUT
  const slippageAdjustedAmounts = computeSlippageAdjustedAmounts(trade, allowedSlippage)

  const totalFeePercent = `${(TOTAL_FEE * 100).toFixed(2)}%`
  const lpHoldersFeePercent = `${(LP_HOLDERS_FEE * 100).toFixed(2)}%`
  const treasuryFeePercent = `${(TREASURY_FEE * 100).toFixed(4)}%`
  const buyBackFeePercent = `${(BUYBACK_FEE * 100).toFixed(4)}%`

  return (
    <AutoColumn style={{ padding: '0 16px', background: 'transparent' }}>
      <StyledRowBetween>
        <StyledRowFixed>
          <Text fontSize="14px" color="textSubtle">
            {isExactIn ? t('Minimum received') : t('Maximum sold')}
          </Text>
          <QuestionHelper
            text={t(
              'Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.',
            )}
            ml="4px"
            placement="top-start"
          />
        </StyledRowFixed>
        <StyledRowFixed>
          <Text fontSize="14px">
            {isExactIn
              ? `${slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4)} ${trade.outputAmount.currency.symbol}` ??
                '-'
              : `${slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4)} ${trade.inputAmount.currency.symbol}` ?? '-'}
          </Text>
        </StyledRowFixed>
      </StyledRowBetween>
      <StyledRowBetween>
        <StyledRowFixed>
          <Text fontSize="14px" color="textSubtle">
            {t('Price Impact')}
          </Text>
          <QuestionHelper
            text={t('The difference between the market price and estimated price due to trade size.')}
            ml="4px"
            placement="top-start"
          />
        </StyledRowFixed>
        <FormattedPriceImpact priceImpact={priceImpactWithoutFee} />
      </StyledRowBetween>

      <StyledRowBetween>
        <StyledRowFixed>
          <Text fontSize="14px" color="textSubtle">
            {t('Liquidity Provider Fee')}
          </Text>
          <QuestionHelper
            text={
              <>
                <Text mb="12px">{t('For each trade a %amount% fee is paid', { amount: totalFeePercent })}</Text>
                <Text>- {t('%amount% to LP token holders', { amount: lpHoldersFeePercent })}</Text>
                <Text>- {t('%amount% to the Treasury', { amount: treasuryFeePercent })}</Text>
                <Text>- {t('%amount% towards CAKE buyback and burn', { amount: buyBackFeePercent })}</Text>
              </>
            }
            ml="4px"
            placement="top-start"
          />
        </StyledRowFixed>
        <Text fontSize="14px">
          {realizedLPFee ? `${realizedLPFee.toSignificant(4)} ${trade.inputAmount.currency.symbol}` : '-'}
        </Text>
      </StyledRowBetween>
    </AutoColumn>
  )
}

export interface AdvancedSwapDetailsProps {
  trade?: Trade<Currency, Currency, TradeType>
}

export function AdvancedSwapDetails({ trade }: AdvancedSwapDetailsProps) {
  const { t } = useTranslation()
  const [allowedSlippage] = useUserSlippageTolerance()

  const showRoute = Boolean(trade && trade.route.path.length > 2)

  return (
    <AutoColumn gap="0px" style={{ background: 'transparent' }}>
      {trade && (
        <>
          <TradeSummary trade={trade} allowedSlippage={allowedSlippage} />
          {showRoute && (
            <>
              <StyledRowBetween style={{ padding: '0 16px' }}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <Text fontSize="14px" color="textSubtle">
                    {t('Route')}
                  </Text>
                  <QuestionHelper
                    text={t('Routing through these tokens resulted in the best price for your trade.')}
                    ml="4px"
                    placement="top-start"
                  />
                </span>
                <SwapRoute trade={trade} />
              </StyledRowBetween>
            </>
          )}
        </>
      )}
    </AutoColumn>
  )
}
