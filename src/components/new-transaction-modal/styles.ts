import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.75);
  inset: 0;
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;
  background: ${(props) => props.theme['gray-800']};
  padding: 2.5rem 3rem;
  border-radius: 6px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    input {
      padding: 1rem;
      border-radius: 6px;

      border: none;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }
    button[type='submit'] {
      margin-top: 1.5rem;
      padding: 1rem 2rem;
      border-radius: 6px;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};

      border: none;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s;
      }
    }
  }
`
export const ButtonClose = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: none;
  background: transparent;
  border-radius: 6px;
  line-height: 0;
  color: ${(props) => props.theme.white};
`
