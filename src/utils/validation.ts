export default function validarPassword(password: string): string | null {
  if (password.length < 8) {
    return "La contraseña debe tener al menos 8 caracteres."
  }
  if (!/[A-Z]/.test(password)) {
    return "Debe contener al menos una letra mayúscula."
  }
  if (!/[a-z]/.test(password)) {
    return "Debe contener al menos una letra minúscula."
  }
  if (!/[0-9]/.test(password)) {
    return "Debe contener al menos un número."
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Debe contener al menos un símbolo."
  }
  return null
}