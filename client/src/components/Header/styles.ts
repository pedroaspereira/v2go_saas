import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.4rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ProfileButton = styled.button`
  height: 80px;
  width: 80px;
  background: ${(props) => props.theme['yellow-400']};
  border: 0;
  border-radius: 80px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-500']};
    transition: background-color 0.2s;
  }
`
