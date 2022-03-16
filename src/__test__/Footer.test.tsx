import { create } from 'react-test-renderer'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import Footer from '../components/Footer'

import {
  FooterContainer,
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
} from '../components/Footer/style-footer'

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />)
  })

  test('Expect to render corretcly the FooterContainer styles', () => {
    const tree = create(<FooterContainer />).toJSON()
    expect(tree).toHaveStyleRule('background', 'rgba(244,211,194,0.9)')
    expect(tree).toHaveStyleRule('width', '100%')
    expect(tree).toHaveStyleRule('height', '100px')
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('justify-content', 'space-evenly')
    expect(tree).toHaveStyleRule('margin-top', '45.2rem')
  })

  test('Expect to render corretcly the NameContainer styles', () => {
    const tree = create(<NameContainer />).toJSON()
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('justify-content', 'center')
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('margin-left', '-10px')
  })

  test('Expect to render corretcly the Name styles', () => {
    const tree = create(<Name />).toJSON()
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
    const tree = create(<LineNameContainer />).toJSON()
    expect(tree).toHaveStyleRule('margin-left', '-18px')
    expect(tree).toHaveStyleRule('color', 'rgba(41,42,44,1)')
    expect(tree).toHaveStyleRule('width', '66px')
    expect(tree).toHaveStyleRule('height', '0px')
    expect(tree).toHaveStyleRule('top', '4px')
    expect(tree).toHaveStyleRule('border', '2px solid #292a2c')
    expect(tree).toHaveStyleRule('transform', 'rotate(90deg)')
  })

  test('Expect to render corretcly the  ContactContainer styles', () => {
    const tree = create(<ContactContainer />).toJSON()
    expect(tree).toHaveStyleRule('margin-left', '-75px')
    expect(tree).toHaveStyleRule('flex-direction', 'column')
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('justify-content', 'center')
    expect(tree).toHaveStyleRule('margin-top', '22px')
  })

  test('Expect to render corretcly the  WhatsContainer styles', () => {
    const tree = create(<WhatsContainer />).toJSON()
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('justify-content', 'center')
    expect(tree).toHaveStyleRule('margin-top', '-25px')
  })

  test('Expect to render corretcly the  WhatsImage styles', () => {
    const tree = create(<WhatsImage />).toJSON()
    expect(tree).toHaveStyleRule('width', '20px')
    expect(tree).toHaveStyleRule('height', '20px')
    expect(tree).toHaveStyleRule('margin-right', '7px')
  })

  test('Expect to render corretcly the  WhatsNumber styles', () => {
    const tree = create(<WhatsNumber />).toJSON()
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
    const tree = create(<EmailContainer />).toJSON()
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('margin-top', '13px')
  })

  test('Expect to render corretcly the  EmailImage  styles', () => {
    const tree = create(<EmailImage />).toJSON()
    expect(tree).toHaveStyleRule('width', '16px')
    expect(tree).toHaveStyleRule('height', '16px')
    expect(tree).toHaveStyleRule('margin-right', '8px')
  })

  test('Expect to render corretcly the  EmailNumber  styles', () => {
    const tree = create(<EmailNumber />).toJSON()
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
    const tree = create(<SocialContainer />).toJSON()
    expect(tree).toHaveStyleRule('width', '25%')
    expect(tree).toHaveStyleRule('height', '70px')
    expect(tree).toHaveStyleRule('margin-left', '100px')
    expect(tree).toHaveStyleRule('flex-direction', 'column')
    expect(tree).toHaveStyleRule('display', 'flex')
  })

  test('Expect to render corretcly the  SocialText  styles', () => {
    const tree = create(<SocialText />).toJSON()
    expect(tree).toHaveStyleRule('text-align', 'right')
    expect(tree).toHaveStyleRule('font-family', 'Oswald,sans-serif')
    expect(tree).toHaveStyleRule('font-weight: 500')
    expect(tree).toHaveStyleRule('font-size', '15px')
    expect(tree).toHaveStyleRule('line-height', '22px')
    expect(tree).toHaveStyleRule('letter-spacing', '0.2em')
    expect(tree).toHaveStyleRule('color', '#292a2c')
  })

  test('Expect to render corretcly the  SocialIconsContainer  styles', () => {
    const tree = create(<SocialIconsContainer />).toJSON()
    expect(tree).toHaveStyleRule('width', '50%')
    expect(tree).toHaveStyleRule('height', '70px')
    expect(tree).toHaveStyleRule('margin-left', '169px')
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('margin-top', '-5px')
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('justify-content', 'center')
  })
})
