import { render } from '@testing-library/react'

import { App } from '../App'

describe('App', () => {
  it('should render correctly and compare if have a text Hellow World', () => {
    render(<App />)
  })
})
