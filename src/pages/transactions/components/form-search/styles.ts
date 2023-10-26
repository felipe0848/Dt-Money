import styled from 'styled-components'

export const FormSeachContainer = styled.form`
  display: flex;
  gap: 1rem;

  > input {
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    border: none;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
  > button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-radius: 6px;
    padding: 1rem 2rem;
    font-weight: bold;

    color: ${(props) => props.theme['green-300']};
    border: 1px solid ${(props) => props.theme['green-300']};
    background: transparent;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme.white};
      border-color: ${(props) => props.theme['green-500']};
      background: ${(props) => props.theme['green-500']};
      transition:
        background-color 0.2s,
        border-color 0.2s,
        color 0.2s;
    }
  }
`
