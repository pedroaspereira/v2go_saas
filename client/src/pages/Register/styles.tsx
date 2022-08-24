import styled from 'styled-components'

export const RegisterContainer = styled.main`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 2rem 0;
`

export const LogoImage = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
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

export const RegisterLabelInput = styled.label``

export const RegisterInput = styled.input`
  background: ${(props) => props.theme.white};
  height: 2.75rem;
  width: 100%;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme['gray-500']};
  font-size: 1.125rem;
  padding: 0.45rem;
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

export const SubmitRegisterButton = styled.button`
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
