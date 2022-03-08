import renderer from 'react-test-renderer'
import { theme } from '../styles/theme'
import 'jest-styled-components'
import Header from '../components/Header/header'

import { ContainerHeader } from '../components/Header/style_header'

import { render } from '@testing-library/react'

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Header />)
  })

  test('it works', () => {
    const tree = renderer.create(<ContainerHeader />).toJSON()
    expect(tree).toHaveStyleRule('color', `${theme.colors.primary}`)
    expect(tree).toHaveStyleRule('background', `${theme.colors.black}`)
    expect(tree).toHaveStyleRule('height', `50px`)
  })
})
