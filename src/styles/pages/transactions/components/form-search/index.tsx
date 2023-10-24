import { MagnifyingGlass } from 'phosphor-react'
import { FormSeachContainer } from './styles'

export function FormSearch() {
  return (
    <FormSeachContainer>
      <input type="text" placeholder="Busque uma transação" />
      <button>
        <MagnifyingGlass size={20} />
        <span>Buscar</span>
      </button>
    </FormSeachContainer>
  )
}
