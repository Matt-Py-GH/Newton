import Form from '../form/form'
import Title from '../title/title'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  useEffect(() => {
    document.title = 'Newton | Login'
    fetch("/api/home", {
      method: "GET",
      credentials: "include",
    }).then(res => {
      if (res.ok) return navigate("/home")
    }).catch()
  }, [])
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleLoginClick = () => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ user, password }),
    })
      .then(res => {
        if (!res.ok) return navigate("/")
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
        <Title title="Newton" subtitle="An idea falls from the tree" />
      </header>
      <main className='main'>
        <Form
          fields={[
            {
              id: "user",
              label: "Usuario",
              type: "text",
              value: user,
              onChange: (e) => setUser(e.target.value),
            },
            {
              id: "password",
              label: "Contraseña",
              type: "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
            },
          ]}
          buttonClick={handleLoginClick}
          buttonText="Iniciar Sesión"
          mensaje=""
          link="/register"
          linkText="¿No tenés cuenta? Regístrate"
          linkClassName="link"
          title='Iniciar Sesión'
        />
      </main>
    </>
  )
}
