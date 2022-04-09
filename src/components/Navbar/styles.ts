import styled from 'styled-components'
import theme from '../../styles/theme'

export const NavbarContainer = styled.h1`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 5.5rem;
  width: 100%;
  background: rgba(16, 12, 8, 0.5);
  box-shadow: 0px 0px 25px 25px rgba(16, 12, 8, 0.5);
  filter: brightness(77%);
`
export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: ${theme.fontFamily.oswald};
  font-size: 2.5rem;
  white-space: nowrap;
  margin-right: 1rem;
  letter-spacing: 0.5rem;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.51);
  font-weight: 400;
  color: rgba(239, 239, 235, 1);
  cursor: pointer;
`
export const LinksWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  justify-content: space-between;
  margin-left: 1rem;

  @media screen and (max-width: 750px) {
    display: none;
  }
`
export const NavLink = styled.span<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 1.35rem;
  font-family: ${theme.fontFamily.urbanist};
  font-size: 1.5rem;
  color: ${({ isSelected }) => (isSelected ? '#90948D' : 'rgba(244, 211, 194, 1)')};
  text-shadow: 1px 1px 1px #000000;
  cursor: pointer;
  transition: ease 0.5s;

  :hover {
    color: #e7a17e;
  }
`
