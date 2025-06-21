import { Routes, Route } from 'react-router-dom'
import Login from './paginas/login/login'
import Home from './paginas/home/home'
import Register from './paginas/register/register'
import ProtectedRoute from './componentes/protected-route/ProtectedRoute'
import './App.css'

export default function App() {
  return (
    <main className='app'>
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
    </main>
  )
}
