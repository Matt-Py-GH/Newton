import { Routes, Route } from 'react-router-dom'
import Login from './componentes/login/login'
import Home from './componentes/home/home'
import Register from './componentes/register/register'
import ProtectedRoute from './componentes/protected-route/ProtectedRoute'

export default function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>

  )
}
