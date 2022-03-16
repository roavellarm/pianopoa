import { create } from 'react-test-renderer'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import Footer from '../components/Footer'

import { FooterContainer, NameContainer } from '../components/Footer/style-footer'

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
})
