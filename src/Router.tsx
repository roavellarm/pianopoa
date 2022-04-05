import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './pages/Home'

export const Router = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
)
