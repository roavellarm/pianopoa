import styled from 'styled-components'
import theme from '../../styles/theme'

export const NavbarContainer = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.5rem;
  width: 100%;
  background: rgba(16, 12, 8, 0.5);
  box-shadow: 0px 0px 25px 25px rgba(16, 12, 8, 0.5);
  flex-shrink: 0;
  filter: brightness(77%);
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Brand = styled.div`
  height: 100%;
  font-family: ${theme.fontFamily.oswald};
  font-size: 2.5rem;
  white-space: nowrap;
  letter-spacing: 0.5rem;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.51);
  font-weight: 400;
  color: rgba(239, 239, 235, 1);
  cursor: pointer;
  transition: color ease 0.25s;
  &:hover {
    color: #e7a17e;
  }
`
export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    display: none;
  }
`
export const NavLink = styled.span<{ isSelected: boolean }>`
  display: flex;
  white-space: nowrap;
  margin: 0px 1.35rem;
  font-family: ${theme.fontFamily.urbanist};
  font-size: 1.5rem;
  color: ${({ isSelected }) => (isSelected ? '#90948D' : 'rgba(244, 211, 194, 1)')};
  text-shadow: 1px 1px 1px #000000;
  cursor: pointer;
  transition: color ease 0.25s;

  &:hover {
    color: #e7a17e;
  }
`
