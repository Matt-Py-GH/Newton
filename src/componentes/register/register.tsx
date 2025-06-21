//Imports de React
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
//Funciones
import validarPassword from "../../utils/validation"
//Componentes
import Form from "../form/form"
import Title from "../title/title"


export default function Register() {
  useEffect(() => {
    document.title = "Register"
    fetch("api/home", {
      method: "GET",
      credentials: "include"
    }).then(res => {
      if (res.ok) return navigate("/home")
    })
  }, [])

  const navigate = useNavigate()
  const [mensajeMostrado, setMensajeMostrado] = useState("")
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const error = validarPassword(password)

  const handleSubmit = (e: React.SyntheticEvent) => {
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
        setMensajeMostrado(data.message)
        return
      }
      else {
        setMensajeMostrado("Error al registrar usuario")
        return
      }
    }
  }

  return (
    <>
      <header className='header'>
        <Title title={<>Welcome to<br />Newton!</>} />
      </header>
      <main className="main">
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
              id: "email",
              label: "Email",
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
            },
            {
              id: "password",
              label: "Contraseña",
              type: "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
            },
            {
              id: "confirm",
              label: "Confirmar Contraseña",
              type: "password",
              value: repeatPassword,
              onChange: (e) => setRepeatPassword(e.target.value),
            },
          ]}
          buttonClick={handleSubmit}
          buttonText="Registrarse"
          mensaje={mensajeMostrado}
          link="/"
          linkText="¿Ya tenés cuenta? Iniciar sesión"
          linkClassName="link"
          title='Registrarse'
        />
      </main>
    </>
  )
}