import React from 'react'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
    children: React.ReactNode
}

export default function ProtectedRoute({ children }: Props) {
    const [isAuth, setIsAuth] = useState<boolean | null>(null)

    useEffect(() => {
        fetch('/api/home', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => setIsAuth(res.status === 200))
            .catch(() => setIsAuth(false))
    }, [])

    if (isAuth === null) return <p>Verificando autenticación...</p>
    if (isAuth === false) return <Navigate to="/" />

    return <>{children}</>
}
