import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function UserInputLayout() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  )
}
