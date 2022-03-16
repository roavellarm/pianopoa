import { create } from 'react-test-renderer'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import Footer from '../components/Footer'

import {
  FooterContainer,
  NameContainer,
  Name,
  LineNameContainer,
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
})
