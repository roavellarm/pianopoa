import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'

export const Router = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
)
