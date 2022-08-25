import logoV2go from '../../assets/logoV2go.jpeg'
import { HeaderContainer, HeaderContent, ProfileButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoV2go} alt="" height={80} width={80} />

        <ProfileButton>Profile</ProfileButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
