import Form from '../../componentes/form/form'
import Title from '../../componentes/title/title'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'


export default function Login() {
  useEffect(() => {
    document.title = 'Newton | Login'
    fetch("/api/home", {
      method: "GET",
      credentials: "include",
    }).then(res => {
      if (res.ok) return navigate("/home")
    }).catch(err => { console.log(err); return navigate("/") })
  }, [])

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [mensajeMostrado, setMensajeMostrado] = useState("")
  const navigate = useNavigate()
  const handleLoginClick = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!user || !password) {
      setMensajeMostrado("Por favor, completa todos los campos")
      return navigate("/")
    }
    setMensajeMostrado("")
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ user, password }),
    })
      .then(res => {
        if (!res.ok) return setMensajeMostrado("Usuario o contraseña incorrectos")
        console.log("Login successful")
        return navigate("/home")
      })
      .catch(err => {
        console.error("Error during login:", err)
        navigate("/")
      })
  }

  return (
    <>
      <header className='header'>
        <Title className='title-login' title="Newton" />
      </header>
      <main className='main'>
        <Form
          fields={[
            {
              id: "user",
              label: "Usuario",
              type: "text",
              value: user,
              onChange: e => setUser(e.target.value),
            },
            {
              id: "password",
              label: "Contraseña",
              type: "password",
              value: password,
              onChange: e => setPassword(e.target.value),
            },
          ]}
          buttonClick={handleLoginClick}
          buttonText="Iniciar Sesión"
          mensaje={mensajeMostrado}
          link="/register"
          linkText="¿No tenés cuenta? Regístrate"
          linkClassName="link"
          title='Iniciar Sesión'
        />
      </main>
    </>
  )
}
