import { useContext } from 'react'
import { Header } from '../../../components/header'
import { Summary } from '../../../components/summary'
import { FormSearch } from './components/form-search'
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from './styles'
import { TransactionsContext } from '../../../contexts/transactions-contexts'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <FormSearch />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    R$ {transaction.price}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{new Date(transaction.createAt).toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
