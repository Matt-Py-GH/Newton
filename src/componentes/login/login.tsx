import './login.css'
import { Link } from 'react-router-dom'
import Button from "../button/button"
import Title from '../title/title'
import { useEffect } from 'react'

export default function Login() {
  useEffect(() => {
    document.title = 'Newton | Login'
  }, [])
  return (
    <>
      <header>
        <Title title="Newton" subtitle="An idea falls from the tree" />
      </header>
      <main>
        <form className="login-form">
          <div>
            <h2>Iniciar Sesión</h2>
          </div>
          <div>
            <div className='login-inputs'>
              <label htmlFor="user">Usuario</label>
              <input type="text" id="user" name="user" placeholder="Tu usuario" />
            </div>

            <div className='login-inputs'>
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" placeholder="Tu contraseña" />
            </div>
          </div>
          <div>
            <div>
              <Button className="button" children='Login'></Button>
            </div>
            <Link to="/register" className="login-register-link">Register</Link>
          </div>
        </form>
      </main>
    </>
  )
}
