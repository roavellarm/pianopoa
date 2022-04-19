import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarContainer, Wrapper, NavLink, Brand, LinksWrapper } from './styles'

export const Navbar = () => {
  const [currentPath, setCurrentPath] = useState(`${window.location.pathname || '/'}`)
  const navigate = useNavigate()

  useEffect(() => {
    setCurrentPath(`${window.location.pathname || '/'}`)
  }, [window.location.pathname]) // eslint-disable-line

  const links = [
    { label: 'BIO', path: '/bio' },
    { label: 'AULAS', path: '/aulas' },
    { label: 'GALERIA', path: '/galeria' },
    { label: 'MÚSICA', path: '/musica' },
    { label: 'NEWSLETTER', path: '/newsletter' },
    { label: 'CONTATO', path: '/contato' },
  ]

  return (
    <NavbarContainer>
      <Wrapper>
        <Brand onClick={() => navigate('/')}>PIANO POA</Brand>
        <LinksWrapper>
          {links.map((link) => (
            <NavLink
              key={link.path}
              isSelected={currentPath === link.path}
              onClick={() => navigate(link.path)}
            >
              {link.label}
            </NavLink>
          ))}
        </LinksWrapper>
      </Wrapper>
    </NavbarContainer>
  )
}
