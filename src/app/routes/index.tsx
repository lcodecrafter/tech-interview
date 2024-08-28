import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@src/views/home'
import Details from '@src/views/detail'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  </Router>
)

export default AppRoutes
