//Imports de React
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
//Funciones
import validarPassword from "./validation"
//Componentes
import Button from "../button/button"
import Message from "../message/message"
//Estilos
import "../login/login.css"



export default function Register() {
  useEffect(() => {
    document.title = "Register"
  }, [])

  const [mensajeMostrado, setMensajeMostrado] = useState("")
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const error = validarPassword(password)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setMensajeMostrado("")
    e.preventDefault()
    sendUser()
  }

  const sendUser = async () => {
    if (!user.trim() || !email.trim() || !password.trim() || !repeatPassword.trim()) {
      setMensajeMostrado("Por favor, completa todos los campos")
      return
    }
    else if (password !== repeatPassword) {
      setMensajeMostrado("Las contraseñas no coinciden")
      return
    }
    else if (error) {
      setMensajeMostrado(error)
      return
    }
    else if (user.length < 3 || user.length > 20) {
      setMensajeMostrado("El usuario debe tener entre 3 y 20 caracteres")
      return
    }
    else if (email.length < 5 || email.length > 50) {
      setMensajeMostrado("El email debe tener entre 5 y 50 caracteres")
      return
    }
    else if (!/^[a-zA-Z0-9]+$/.test(user)) {
      setMensajeMostrado("El usuario solo puede contener letras y números")
      return
    }

    else {
      setMensajeMostrado("")
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user,
          email,
          password
        })
      })
      const data = await res.json()
      if (data.message === "Éxito") {
        setMensajeMostrado("Se ha envaiado un email de confirmación")
        setUser("")
        setEmail("")
        setPassword("")
        setRepeatPassword("")
        return
      }
      else if (data.message === "Usuario o email ya registrado") {
        setMensajeMostrado("Usuario o email ya registrado")
        return
      }
      else {
        setMensajeMostrado("Error al registrar usuario")
        return
      }
    }
  }

  return (
    <main>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Registrarse</h2>

        <label htmlFor="user">Usuario</label>
        <input
          type="text"
          id="user"
          name="user"
          placeholder="Tu usuario"
          value={user}
          onChange={e => setUser(e.target.value)} />

        <label htmlFor="email">E-mail</label>
        <input type="mail"
          id="mail"
          name="mail"
          placeholder="Tu email"
          value={email}
          onChange={e => setEmail(e.target.value)} />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" placeholder="Tu contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)} />

        <label htmlFor="password">Repite la contraseña</label>
        <input type="password" id="password" name="password" placeholder="Repite tu contraseña"
          value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />

        <Button type="submit">Register</Button>
        <Message children={mensajeMostrado} />

        <Link to="/" className="login-register-link">Login</Link>
      </form>
    </main>
  )
}