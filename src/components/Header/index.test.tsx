import { render } from '@testing-library/react'
import 'jest-styled-components'

import { Header } from '.'

describe('Header', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Header />)
    expect(getByText('PIANO POA')).toBeTruthy()
    expect(getByText('BIO')).toBeTruthy()
    expect(getByText('AULAS')).toBeTruthy()
    expect(getByText('GALERIA')).toBeTruthy()
    expect(getByText('MÚSICA')).toBeTruthy()
    expect(getByText('NEWSLETTER')).toBeTruthy()
    expect(getByText('CONTATO')).toBeTruthy()
  })

  it('renders corretcly the HeaderContainer styles', () => {
    const { getByText } = render(<Header />)

    const pianoPoa = getByText('PIANO POA') as Element

    expect(pianoPoa.parentElement).toHaveStyleRule('background', 'rgba(16,12,8,0.5)')
  })
})
