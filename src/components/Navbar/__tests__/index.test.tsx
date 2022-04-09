import { render, fireEvent } from '@testing-library/react'
import 'jest-styled-components'

import { Navbar } from '..'

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({ useNavigate: () => mockedNavigate }))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Navbar', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Navbar />)
    expect(getByText('PIANO POA')).toBeTruthy()
    expect(getByText('BIO')).toBeTruthy()
    expect(getByText('AULAS')).toBeTruthy()
    expect(getByText('GALERIA')).toBeTruthy()
    expect(getByText('MÚSICA')).toBeTruthy()
    expect(getByText('NEWSLETTER')).toBeTruthy()
    expect(getByText('CONTATO')).toBeTruthy()
  })

  it('renders corretcly the NavbarContainer styles', () => {
    const { getByText } = render(<Navbar />)

    const pianoPoa = getByText('PIANO POA') as Element

    expect(pianoPoa.parentElement).toHaveStyleRule('background', 'rgba(16,12,8,0.5)')
  })
})

describe('navigation links', () => {
  it('redirects correctly to homepage', () => {
    const { getByText } = render(<Navbar />)
    const home = getByText('PIANO POA')
    fireEvent.click(home)
    expect(mockedNavigate).toBeCalledWith('/')
  })

  it('redirects correctly to bio', () => {
    const { getByText } = render(<Navbar />)
    const bio = getByText('BIO')
    fireEvent.click(bio)
    expect(mockedNavigate).toBeCalledWith('/bio')
  })

  it('redirects correctly to aulas', () => {
    const { getByText } = render(<Navbar />)
    const aulas = getByText('AULAS')
    fireEvent.click(aulas)
    expect(mockedNavigate).toBeCalledWith('/aulas')
  })

  it('redirects correctly to galeria', () => {
    const { getByText } = render(<Navbar />)
    const galeria = getByText('GALERIA')
    fireEvent.click(galeria)
    expect(mockedNavigate).toBeCalledWith('/galeria')
  })

  it('redirects correctly to musica', () => {
    const { getByText } = render(<Navbar />)
    const musica = getByText('MÚSICA')
    fireEvent.click(musica)
    expect(mockedNavigate).toBeCalledWith('/musica')
  })

  it('redirects correctly to newsletter', () => {
    const { getByText } = render(<Navbar />)
    const newsletter = getByText('NEWSLETTER')
    fireEvent.click(newsletter)
    expect(mockedNavigate).toBeCalledWith('/newsletter')
  })

  it('redirects correctly to contato', () => {
    const { getByText } = render(<Navbar />)
    const contato = getByText('CONTATO')
    fireEvent.click(contato)
    expect(mockedNavigate).toBeCalledWith('/contato')
  })
})
