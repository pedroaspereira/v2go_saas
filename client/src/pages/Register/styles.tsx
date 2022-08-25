import styled from 'styled-components'

export const RegisterContainer = styled.main`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 2rem 0;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  padding: 2.5rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    border-radius: 8px;
  }
`

export const RegisterInput = styled.input`
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  width: 100%;
  border-radius: 6px;
  border: 0px;
  padding: 1rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const SubmitRegisterButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    opacity: 0.7;
  }
`
