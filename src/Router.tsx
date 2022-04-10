import { Route, Routes } from 'react-router-dom'

import { MainContainer } from './components/MainContainer'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'

export const Router = () => (
  <MainContainer>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </MainContainer>
)
