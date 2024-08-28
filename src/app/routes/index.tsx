import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@src/pages/home'
import Details from '@src/pages/details'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  </Router>
)

export default AppRoutes
