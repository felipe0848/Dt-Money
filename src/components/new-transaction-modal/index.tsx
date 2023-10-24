import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { ButtonClose, Content, Overlay } from './styles'
export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <ButtonClose>
            <X size={24} />
          </ButtonClose>
          <form>
            <input type="text" placeholder="Descrição" />
            <input type="number" placeholder="Preço" />
            <input type="text" placeholder="Categoria" />

            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
