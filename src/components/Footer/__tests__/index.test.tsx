import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import { Footer } from '..'

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />)
  })

  it('should compare if have a text Jordana Brusa', () => {
    render(<Footer />)

    const getText = screen.getByText('Jordana Brusa')

    expect(getText).toBeInTheDocument()
  })

  it('should compare if have a text (51) 98459 6917', () => {
    render(<Footer />)
    const getText = screen.getByText('(51) 98459 6917')
    expect(getText).toBeInTheDocument()
  })

  it('should compare if have a text jordanabrusa11@gmail.com', () => {
    render(<Footer />)
    const getText = screen.getByText('jordanabrusa11@gmail.com')
    expect(getText).toBeInTheDocument()
  })

  it('should compare if have a text Social', () => {
    render(<Footer />)
    const getText = screen.getByText('Social')
    expect(getText).toBeInTheDocument()
  })

  it('should render corretcly the FooterContainer style', () => {
    const { container } = render(<Footer />)
    const footer = container.firstChild as Element
    expect(footer).toHaveStyleRule('background', 'rgba(244,211,194,0.9)')
    expect(footer).toHaveStyleRule('width', '100%')
    expect(footer).toHaveStyleRule('height', '100px')
    expect(footer).toHaveStyleRule('display', 'flex')
    expect(footer).toHaveStyleRule('align-items', 'center')
    expect(footer).toHaveStyleRule('justify-content', 'space-evenly')
    expect(footer).toHaveStyleRule('margin-top', '45.5rem')
  })
})
