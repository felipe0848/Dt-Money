import { Header } from '../../../components/header'
import { Summary } from '../../../components/summary'
import { FormSearch } from './components/form-search'
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <FormSearch />
        <TransactionTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
