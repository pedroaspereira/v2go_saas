import { Check, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styled'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Última Entrega</span>
          <Check size={32} color="#00b37e" />
        </header>

        <strong>02/Jun/22</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Plano A</span>
          {/* <ArrowCircleDown size={32} color="#f75a68" /> */}
        </header>

        <strong>mês 1 - Setembro</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Último Pagamento</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>02/Jun/22</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
