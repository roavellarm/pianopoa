import { render, screen } from '@testing-library/react'

import { App } from '../App'

describe('App', () => {
  it('should render correctly and compare if have a text Hellow World', () => {
    render(<App />)
  })

  it('should compare if have a text Hellow World', () => {
    render(<App />)

    const getText = screen.getByText('Hellow World')

    expect(getText).toBeInTheDocument()
  })
})
