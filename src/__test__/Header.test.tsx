import { create } from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Header from '../components/Header'

import {
  HeaderContainer,
  BioSpan,
  PianoPoaContainer,
  BioContainer,
} from '../components/Header/style-header'

describe('Header', () => {
  it('should render correctly', () => {
    render(<Header />)
  })

  test('Expect to render corretcly the HeaderContainer styles', () => {
    const tree = create(<HeaderContainer />).toJSON()
    expect(tree).toHaveStyleRule('background', 'rgba(16,12,8,0.5)')
    expect(tree).toHaveStyleRule('box-shadow', '0px 0px 25px 25px rgba(16,12,8,0.5)')
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('height', '80px')
    expect(tree).toHaveStyleRule('width', '100%')
    expect(tree).toHaveStyleRule('position', 'fixed')
    expect(tree).toHaveStyleRule('filter', 'brightness(77%)')
  })

  test('Expect to render corretcly the PianoPoaContainer styles', () => {
    const tree = create(<PianoPoaContainer />).toJSON()
    expect(tree).toHaveStyleRule('font-family', 'Oswald,sans-serif')
    expect(tree).toHaveStyleRule('font-size', '36px')
    expect(tree).toHaveStyleRule('margin-left', '4.5rem')
    expect(tree).toHaveStyleRule('letter-spacing', '0.5rem')
    expect(tree).toHaveStyleRule('line-height', '53.35px')
    expect(tree).toHaveStyleRule('text-shadow', '4px 4px 8px rgba(0,0,0,0.51)')
    expect(tree).toHaveStyleRule('font-weight', '400')
    expect(tree).toHaveStyleRule('color', 'rgba(239,239,235,1)')
  })

  test('Expect to render corretcly the BioContainer styles', () => {
    const tree = create(<BioContainer />).toJSON()
    expect(tree).toHaveStyleRule('width', '50rem')
    expect(tree).toHaveStyleRule('height', '26px')
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('align-items', 'flex-end')
    expect(tree).toHaveStyleRule('justify-content', 'right')
    expect(tree).toHaveStyleRule('margin-left', '11.1rem')
    expect(tree).toHaveStyleRule('margin-top', '0.7rem')
  })

  test('Expect to render corretcly the BioSpan styles', () => {
    const tree = create(<BioSpan />).toJSON()
    expect(tree).toHaveStyleRule('margin-right', '2.7rem')
    expect(tree).toHaveStyleRule('font-family', 'Urbanist,sans-serif')
    expect(tree).toHaveStyleRule('font-size', '22px')
    expect(tree).toHaveStyleRule('line-height', '26.4px')
    expect(tree).toHaveStyleRule('color', 'rgba(244,211,194,1)')
    expect(tree).toHaveStyleRule('text-shadow', '1px 1px 1px #000000')
    expect(tree).toHaveStyleRule('cursor', 'pointer')
    expect(tree).toHaveStyleRule('transition', 'ease 0.5s')
  })

  it('should compare if have a text PIANO POA', () => {
    render(<Header />)

    const getText = screen.getByText('PIANO POA')

    expect(getText).toBeInTheDocument()
  })

  it('should compare if have a text BIO', () => {
    render(<Header />)

    const getText = screen.getByText('BIO')

    expect(getText).toBeInTheDocument()
  })

  it('should compare if have a text AULAS', () => {
    render(<Header />)

    const getText = screen.getByText('AULAS')

    expect(getText).toBeInTheDocument()
  })

  it('should compare if have a text GALERIA', () => {
    render(<Header />)

    const getText = screen.getByText('GALERIA')

    expect(getText).toBeInTheDocument()
  })

  it('should compare if have a text MÚSICA', () => {
    render(<Header />)

    const getText = screen.getByText('MÚSICA')

    expect(getText).toBeInTheDocument()
  })

  it('should compare if have a text NEWSLETTER', () => {
    render(<Header />)

    const getText = screen.getByText('NEWSLETTER')

    expect(getText).toBeInTheDocument()
  })

  it('should compare if have a text CONTATO', () => {
    render(<Header />)

    const getText = screen.getByText('CONTATO')

    expect(getText).toBeInTheDocument()
  })
})
