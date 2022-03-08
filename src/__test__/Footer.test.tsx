import renderer from 'react-test-renderer'
import { theme } from '../styles/theme'
import 'jest-styled-components'
import { render } from '@testing-library/react'
import Footer from '../components/Footer/Footer'
import { ContainerFooter } from '../components/Footer/style_footer'

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />)
  })

  test('its execute styles correctly', () => {
    const tree = renderer.create(<ContainerFooter />).toJSON()
    expect(tree).toHaveStyleRule('background', `${theme.colors.primary}`)
    expect(tree).toHaveStyleRule('color', `${theme.colors.blackLight}`)
    expect(tree).toHaveStyleRule('width', '100vw')
    expect(tree).toHaveStyleRule('height', '50px')
    expect(tree).toHaveStyleRule('align-items', 'baseline')
  })
})
