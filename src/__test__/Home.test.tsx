import renderer from 'react-test-renderer'
import { theme } from '../styles/theme'
import 'jest-styled-components'
import { render } from '@testing-library/react'
import Home from '../Home/Home'
import { Container } from '../Home/style_home'
import bgHome from '../images/bg-home.jpg'

describe('Home', () => {
  it('should render correctly', () => {
    render(<Home />)
  })

  test('its execute styles correctly', () => {
    const tree = renderer.create(<Container />).toJSON()
    expect(tree).toHaveStyleRule('background', `url(${bgHome})`)
    expect(tree).toHaveStyleRule('width', '100%')
    expect(tree).toHaveStyleRule('height', '94vh')
    expect(tree).toHaveStyleRule('background-size', 'cover')
    expect(tree).toHaveStyleRule('filter', 'brightness(45%)')
  })
})
