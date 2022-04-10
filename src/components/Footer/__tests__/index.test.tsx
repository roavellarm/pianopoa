import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import { Footer } from '..'

import {
  NameContainer,
  Name,
  LineNameContainer,
  ContactContainer,
  WhatsContainer,
  WhatsImage,
  WhatsNumber,
  EmailContainer,
  EmailImage,
  EmailNumber,
  SocialContainer,
  SocialText,
  SocialIconsContainer,
} from '../style-footer'

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />)
  })

  test.only('Expect to render corretcly the FooterContainer styles', () => {
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

  test('Expect to render corretcly the NameContainer styles', () => {
    const tree = render(<NameContainer />)
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('justify-content', 'center')
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('margin-left', '-10px')
  })

  test('Expect to render corretcly the Name styles', () => {
    const tree = render(<Name />)
    expect(tree).toHaveStyleRule('font-family', 'Oswald,sans-serif')
    expect(tree).toHaveStyleRule('font-size', '45px')
    expect(tree).toHaveStyleRule('font-style', 'normal')
    expect(tree).toHaveStyleRule('font-weight', '200')
    expect(tree).toHaveStyleRule('line-height', '66.69px')
    expect(tree).toHaveStyleRule('letter-spacing', '0.05em')
    expect(tree).toHaveStyleRule('text-align', 'left')
    expect(tree).toHaveStyleRule('color', 'rgba(41,42,44,1)')
    expect(tree).toHaveStyleRule('letter-spacing', '0.05em')
    expect(tree).toHaveStyleRule('width', '250px')
  })

  test('Expect to render corretcly the LineNameContainer styles', () => {
    const tree = render(<LineNameContainer />)
    expect(tree).toHaveStyleRule('margin-left', '-18px')
    expect(tree).toHaveStyleRule('color', 'rgba(41,42,44,1)')
    expect(tree).toHaveStyleRule('width', '66px')
    expect(tree).toHaveStyleRule('height', '0px')
    expect(tree).toHaveStyleRule('top', '4px')
    expect(tree).toHaveStyleRule('border', '2px solid #292a2c')
    expect(tree).toHaveStyleRule('transform', 'rotate(90deg)')
  })

  test('Expect to render corretcly the  ContactContainer styles', () => {
    const tree = render(<ContactContainer />)
    expect(tree).toHaveStyleRule('margin-left', '-75px')
    expect(tree).toHaveStyleRule('flex-direction', 'column')
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('justify-content', 'center')
    expect(tree).toHaveStyleRule('margin-top', '22px')
  })

  test('Expect to render corretcly the  WhatsContainer styles', () => {
    const tree = render(<WhatsContainer />)
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('justify-content', 'center')
    expect(tree).toHaveStyleRule('margin-top', '-25px')
  })

  test('Expect to render corretcly the  WhatsImage styles', () => {
    const tree = render(<WhatsImage />)
    expect(tree).toHaveStyleRule('width', '20px')
    expect(tree).toHaveStyleRule('height', '20px')
    expect(tree).toHaveStyleRule('margin-right', '7px')
  })

  test('Expect to render corretcly the  WhatsNumber styles', () => {
    const tree = render(<WhatsNumber />)
    expect(tree).toHaveStyleRule('width', '298px')
    expect(tree).toHaveStyleRule('height', '20px')
    expect(tree).toHaveStyleRule('font-family', 'Oswald,sans-serif')

    expect(tree).toHaveStyleRule('font-style', 'normal')
    expect(tree).toHaveStyleRule('font-weight', '400')
    expect(tree).toHaveStyleRule('font-size', '14px')
    expect(tree).toHaveStyleRule('line-height', '21px')
    expect(tree).toHaveStyleRule('letter-spacing', '0.06em')
    expect(tree).toHaveStyleRule('color', '#292a2c')
  })

  test('Expect to render corretcly the  EmailContainer  styles', () => {
    const tree = render(<EmailContainer />)
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('margin-top', '13px')
  })

  test('Expect to render corretcly the  EmailImage  styles', () => {
    const tree = render(<EmailImage />)
    expect(tree).toHaveStyleRule('width', '16px')
    expect(tree).toHaveStyleRule('height', '16px')
    expect(tree).toHaveStyleRule('margin-right', '8px')
  })

  test('Expect to render corretcly the  EmailNumber  styles', () => {
    const tree = render(<EmailNumber />)
    expect(tree).toHaveStyleRule('width', '298px')
    expect(tree).toHaveStyleRule('height', '20px')
    expect(tree).toHaveStyleRule('margin-top', '-4px')
    expect(tree).toHaveStyleRule('font-family', 'Oswald,sans-serif')
    expect(tree).toHaveStyleRule('font-style', 'normal')
    expect(tree).toHaveStyleRule('font-weight', '400')
    expect(tree).toHaveStyleRule('font-size', '14px')
    expect(tree).toHaveStyleRule('line-height', '20.75px')
    expect(tree).toHaveStyleRule('letter-spacing', '0.06em')
    expect(tree).toHaveStyleRule('color', '#292a2c')
  })

  test('Expect to render corretcly the  SocialContainer  styles', () => {
    const tree = render(<SocialContainer />)
    expect(tree).toHaveStyleRule('width', '25%')
    expect(tree).toHaveStyleRule('height', '70px')
    expect(tree).toHaveStyleRule('margin-left', '100px')
    expect(tree).toHaveStyleRule('flex-direction', 'column')
    expect(tree).toHaveStyleRule('display', 'flex')
  })

  test('Expect to render corretcly the  SocialText  styles', () => {
    const tree = render(<SocialText />)
    expect(tree).toHaveStyleRule('text-align', 'right')
    expect(tree).toHaveStyleRule('font-family', 'Oswald,sans-serif')
    expect(tree).toHaveStyleRule('font-weight: 500')
    expect(tree).toHaveStyleRule('font-size', '15px')
    expect(tree).toHaveStyleRule('line-height', '22px')
    expect(tree).toHaveStyleRule('letter-spacing', '0.2em')
    expect(tree).toHaveStyleRule('color', '#292a2c')
  })

  test('Expect to render corretcly the  SocialIconsContainer  styles', () => {
    const tree = render(<SocialIconsContainer />)
    expect(tree).toHaveStyleRule('width', '50%')
    expect(tree).toHaveStyleRule('height', '70px')
    expect(tree).toHaveStyleRule('margin-left', '169px')
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('margin-top', '-5px')
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('justify-content', 'center')
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
})
