import styled from 'styled-components'

export const LoginContainer = styled.main`
  display: flex;
  flex-direction: row;
  height: 100%;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
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

export const LoginInput = styled.input`
  background: ${(props) => props.theme.white};
  height: 2.5rem;
  width: 100%;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  flex: 1;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: ${(props) => props.theme.white};
`

export const SubmitLoginButton = styled.button`
  width: 100%;
  border: 0;
  padding: 0.5rem;
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
