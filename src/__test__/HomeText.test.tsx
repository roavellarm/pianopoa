import renderer from 'react-test-renderer'
import { theme } from '../styles/theme'
import 'jest-styled-components'
import HomeText from '../components/HomeText/HomeText'
import { Wrapper } from '../components/HomeText/style_homeText'

import { render } from '@testing-library/react'

describe('Footer', () => {
  it('should render correctly', () => {
    render(<HomeText />)
  })
})

test('it works', () => {
  const tree = renderer.create(<Wrapper />).toJSON()
  expect(tree).toHaveStyleRule('background', 'black')
  expect(tree).toHaveStyleRule('height', '500px')
  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('margin-top', '70px')
  expect(tree).toHaveStyleRule('width', '38%')
  expect(tree).toHaveStyleRule('line-height', '29px')
  expect(tree).toHaveStyleRule('font-size', '20px')
  expect(tree).toHaveStyleRule('padding-top', '25px')
  expect(tree).toHaveStyleRule('padding-left', '25px')
  expect(tree).toHaveStyleRule('margin-right', '50px')
  expect(tree).toHaveStyleRule('opacity', '0.8')
})
