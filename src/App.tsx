import { Routes, Route} from 'react-router-dom'
import Login from './componentes/login/login'
import Home from './componentes/home/home'
import Errors from './componentes/errors/errors'
import  Register  from './componentes/register/register'

export default function App() {
    return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/errors" element={<Errors />} />
    </Routes>

    )
  }
  